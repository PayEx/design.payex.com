class Accordion {
    constructor (element) {
        this.elem = element;
        this.expandables = element.querySelectorAll(".expandable");
        this.containsOpen = [...this.expandables].find(exp => exp.isOpen);

        this.expandables.forEach(exp => {
            exp.querySelector(".expandable-header").addEventListener("click", () => {
                if (exp.classList.contains("expandable-open")) {
                    this._close(exp);
                } else {
                    this._closeAll(exp);
                    this._open(exp);
                }
            });
        });
    }

    _open (expandable) {
        expandable.classList.add("expandable-open");
        this.containsOpen = true;
    }

    _close (expandable) {
        expandable.classList.remove("expandable-open");
        this.containsOpen = false;
    }

    _closeAll (expandable) { // Closes all expandables except the one that is given
        this.expandables.forEach(item => item !== expandable ? item.classList.remove("expandable-open") : null);
    }
}

class Expandable {
    constructor (element) {
        this.elem = element;
        this.isOpen = element.classList.contains("expandable-open");

        this.elem.querySelector(".expandable-header").addEventListener("click", () => {
            this.elem.classList.toggle("expandable-open");
            this.isOpen = !this.isOpen;
        });
    }
}

const expandable = (() => {
    const init = () => {
        const accordions = document.querySelectorAll(".accordion");
        const expandables = [...document.querySelectorAll(".expandable")].filter(exp => !exp.closest(".accordion"));

        accordions.length ? accordions.forEach(acc => new Accordion(acc)) : null;
        expandables.length ? expandables.forEach(exp => new Expandable(exp)) : null;
    };

    return { init };
})();

export default expandable;
