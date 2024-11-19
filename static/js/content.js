
export class Content {
    DOM = {
        el: null,
        title: null,
        description: null,
    };

    /**
     * Constructor for the Content class. Initializes the instance, sets up DOM references, and binds events.
     * @param {HTMLElement} DOM_el
     */
    constructor(DOM_el) {
        this.DOM.el = DOM_el;
        this.DOM.title = this.DOM.el.querySelector('h2');
        this.DOM.description = this.DOM.el.querySelector('p');
    }
}