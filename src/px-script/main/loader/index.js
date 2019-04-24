const SELECTORS = { LOADER: "[data-loader]" };

const _appendLoader = loader => {
    const ul = document.createElement("ul");

    ul.classList.add("loader-icon");

    for (let i = 0; i < 3; i++) {
        const li = document.createElement("li");

        ul.appendChild(li);
    }

    loader.appendChild(ul);
};

const loader = (() => {
    const init = () => {
        const loaders = document.querySelectorAll(SELECTORS.LOADER);

        if (loaders.length) {
            loaders.forEach(loader => {
                _appendLoader(loader);
            });
        }
    };

    return { init };
})();

export default loader;
