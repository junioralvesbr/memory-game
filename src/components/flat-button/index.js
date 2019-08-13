const flatButton = (function () {

    const module = {};

    module._style = () => {
        const $head = document.querySelector('head');
        const $style = document.createElement('style');

        $style.textContent = `
            .flat-button {
                width: 186px;
                height: 176px;
                background-color: #eae6da;
                border: none;
                font-size: 24px;
                font-weight: bold;
                color: #fffcee;
                text-decoration: none;
                text-transform: uppercase;
            }

            .flat-button.-active {
                background-color: #f25a70;
                color: #fff;
            }
        `

        $head.insertBefore($style, null);
    }

    module.render = (content, styleClass) => {
        module._style();

        return `<button class="flat-button ${styleClass}">${content}</button>`;
    };

    return {
        render: module.render
    }

})();