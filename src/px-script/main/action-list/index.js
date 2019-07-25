const SELECTORS = {
    ACTIONLIST: ".action-list",
    ACTIONMENU: ".action-menu",
    TOGGLE: ".action-toggle",
    TOGGLE_OLD: ".action-list > i.material-icons"
};

const _actionLists = _actionLists || [];

class ActionList {
    constructor (element) {
        this.id = element.id ? element.id : null;
        this.container = element;
        this.actionMenu = element.querySelector(SELECTORS.ACTIONMENU);
        this.actionMenuLinks = this.actionMenu.querySelectorAll("a");
        this.isOpen = this.container.classList.contains("active");
        this.newToggleBtn = element.querySelector(SELECTORS.TOGGLE);

        /*
            TODO: remove oldToggleBtn and ternary related to oldToggleBtn on next major release. Current: 2.2.0
            https://payexjira.atlassian.net/browse/DG-325 [AW]
        */
        this.oldToggleBtn = element.querySelector(SELECTORS.TOGGLE_OLD);
        this.toggleBtn = (this.newToggleBtn) ? this.newToggleBtn : ((this.oldToggleBtn) ?
            (
                console.warn("DEPRECATED: Selecting on .material-icons is deprecated, add .action-toggle to your toggling element"),
                this.oldToggleBtn
            ) : null
        );

        try {
            this.toggleBtn.addEventListener("click", () => {
                this._toggleMenu();
            });
        } catch (e) {
            console.warn("No toggle element exist, add an element with the class .action-toggle");
        }

        // close menu when clicking on links
        this.actionMenuLinks.forEach(link => link.addEventListener("click", () => this.close()));
    }

    open () {
        this.container.classList.add("active");
        this.isOpen = true;
    }

    close () {
        this.container.classList.remove("active");
        this.isOpen = false;
    }

    _toggleMenu () {
        this.isOpen ? this.close() : this.open();
    }
}

const _createActionList = actionListQuery => {
    const actionListObject = new ActionList(actionListQuery);

    _actionLists.push(actionListObject);

    document.addEventListener("click", e => {
        if (e.target.closest(SELECTORS.ACTIONLIST) !== actionListObject.container && actionListObject.isOpen) {
            actionListObject.close();
        }
    });

    return actionListObject;
};

const init = id => {
    if (id) {
        const actionList = document.getElementById(id);

        if (!actionList) {
            console.warn(`No action List with id ${id} found`);

            return null;
        }

        return _createActionList(actionList);
    } else {
        const actionLists = document.querySelectorAll(SELECTORS.ACTIONLIST);

        if (!actionLists.length) {
            console.warn("No action lists found");

            return null;
        }

        return [...actionLists].map(actionList => _createActionList(actionList));
    }
};

const close = id => {
    let actionlist = null;

    _actionLists.forEach(d => d.id === id ? actionlist = d : null);

    try {
        actionlist.close();
    } catch (e) {
        console.warn(`actionlist.close: No actionlist with id "${id}" found.`);

        return false;
    }

    return actionlist;
};

const open = id => {
    let actionlist = null;

    _actionLists.forEach(d => d.id === id ? actionlist = d : null);

    try {
        actionlist.open();
    } catch (e) {
        console.warn(`actionlist.open: No actionlist with id "${id}" found.`);

        return false;
    }

    return actionlist;
};

export default {
    init,
    open,
    close
};
