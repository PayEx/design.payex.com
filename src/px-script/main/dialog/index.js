const SELECTORS = {
    DIALOG: ".dialog",
    CLOSE: "[data-dialog-close]",
    OPEN: "[data-dialog-open]",
    CLOSEICON: ".dialog-close"
};

class Dialog {
    constructor (el) {
        this._el = el;
        this.id = el.id;
        this.closeIcon = el.querySelector(SELECTORS.CLOSEICON);
        this.isOpen = el.classList.contains("d-flex");
        this.openBtns = document.querySelectorAll(`[data-dialog-open=${this.id}]`);

        if (!this.openBtns.length) {
            console.warn(`No corresponding open-button found for dialog with id ${this.id}`);
        }

        if (this.closeIcon) {
            this.closeIcon.addEventListener("click", e => {
                e.preventDefault();
                this.close();
            });
        }

        if (this.isOpen) {
            document.body.classList.add("dialog-open");
        }

        // Close dialog on esc
        document.addEventListener("keydown", e => {
            e.keyCode === 27 ? this.close() : null;
        });

        // Close the dialog when clicking outside
        this._el.addEventListener("click", e => {
            e.target.classList.contains("d-flex") ? this.close() : null;
        });

        // Init open buttons
        this.openBtns.forEach(btn => {
            try {
                btn.addEventListener("click", e => {
                    e.preventDefault();
                    this.open();
                });
            } catch (error) {
                console.warn(`OPEN: No dialog with id ${this.id} was found, make sure the attribute data-dialog-open contains the correct id.`);
            }
        });

        // Init close buttons
        document.querySelectorAll(`[data-dialog-close=${this.id}]`).forEach(btn => {
            try {
                btn.addEventListener("click", e => {
                    e.preventDefault();
                    this.close();
                });
            } catch (error) {
                console.warn(`Close: No dialog with id ${this.id} was found, make sure the attribute data-dialog-open contains the correct id.`);
            }
        });
    }

    open () {
        px.utils.handleScrollbar();
        this.isOpen = true;
        this._el.classList.add("d-flex");
        document.body.classList.add("dialog-open");
    }

    close () {
        px.utils.handleScrollbar();
        this.isOpen = false;
        this._el.classList.remove("d-flex");
        document.body.classList.remove("dialog-open");
    }
}

const dialog = (() => {
    const init = ids => {
        const dialogEls = ids || ids === "" ? px.utils.getElementsByIds(ids, "dialog") : document.querySelectorAll(".dialog");

        if (dialogEls.length) {
            dialogEls.forEach(dialog => {
                const newDialog = new Dialog(dialog);

                if (_dialogs.length) {
                    _dialogs.forEach((element, index) => {
                        element.id === newDialog.id ? _dialogs[index] = newDialog : _dialogs.push(newDialog);
                    });
                } else {
                    _dialogs.push(newDialog);
                }
            });
        }
    };

    const close = id => {
        let dialog = null;

        _dialogs.forEach(d => d.id === id ? dialog = d : null);

        try {
            dialog.close();
        } catch (e) {
            console.error(`dialog.close: No dialog with id "${id}" found.`);

            return false;
        }

        return dialog;
    };

    const open = id => {
        let dialog = null;

        _dialogs.forEach(d => d.id === id ? dialog = d : null);

        try {
            dialog.open();
        } catch (e) {
            console.error(`dialog.open: No dialog with id "${id}" found.`);

            return false;
        }

        return dialog;
    };

    return {
        init,
        close,
        open
    };
})();

const _dialogs = _dialogs || [];

export default dialog;
