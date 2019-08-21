const labelCollabcode = (function () {

    const module = {};

    module._style = () => {
        const $head = document.querySelector('head');
        const $style = document.createElement('style');

        $style.textContent = `
            .label-collabcode {
                color: rgba(58, 64, 66, .5);
                font-size: 16px;
            }
        `;

        $head.insertBefore($style, null);
    }

    module.render = () => {
        module._style();

        return `<label class="label-collabcode" for=email>E-mail</label>`;

    };

    return {
        render: module.render
    }

})();