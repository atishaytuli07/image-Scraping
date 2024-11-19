/**
 * Preloads images specified by the CSS selector.
 * @function
 * @param {string} [selector='img']
 * @returns {Promise}
 */
const preloadImages = (selector = 'img') => {
    return new Promise((resolve) => {
        imagesLoaded(document.querySelectorAll(selector), {background: true}, resolve);
    });
};

export {
    preloadImages,
};
