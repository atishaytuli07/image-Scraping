
export class Item {
    DOM = {
        el: null,
        inner: null,
    };

    /**
     * Constructor for the Item class. Initializes the instance, sets up DOM references, and binds events.
     * @param {HTMLElement} DOM_el - The main DOM element for the Item, expected to have a child with class 'layers__item-img'.
     */
    constructor(DOM_el) {
        this.DOM.el = DOM_el;
        this.DOM.inner = this.DOM.el.querySelector('.layers__item-img');
    }
}