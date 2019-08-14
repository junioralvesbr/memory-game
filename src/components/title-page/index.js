const titlePage = (function () {

    const module = {};

    module._style = () => {
        const $head = document.querySelector('head');
        const $style = document.createElement('style');

        $style.textContent = `
            .title-page {
                font-size: 24px;
                color: #f25a70;
                text-align: center;
            }
        `;

        $head.insertBefore($style, null);
    }

    module.render = content => {
        module._style();

        return `<h1 class="title-page">${content}</h1>`;
    };

    return {
        render: module.render
    };

})();