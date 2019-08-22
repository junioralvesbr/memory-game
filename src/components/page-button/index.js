const pageButton = (function () {

    const module = {};

    module._style = () => {
        const $head = document.querySelector('head');
        const $style = document.createElement('style');

        $style.textContent = `
            .page-button {
                width: 302px;
                height: 48px;
                border-radius: 24px;
                background-color: #f25a70;
                font-size: 14px;
                font-weight: bold;
                color: #fff;
                text-transform: uppercase;
            }
        `

        $head.insertBefore($style, null);
    }

    module.render = (content = "Nome do botão") => {
        module._style();

        return `<button class="page-button">${content}</button>`;
    };

    return {
        render: module.render
    };

})();