const eyeCollabcode = (function () {

    const module = {};

    module._style = () => {
        const $head = document.querySelector('head');
        const $style = document.createElement('style');

        $style.textContent = `
            .eye-collabcode {
                display: block;
                text-indent: -9999px;
                background-image: url("../img/eye.png");
                background-repeat: no-repeat;
                background-position: center;
                width: 24px;
                height: 15px;
                cursor: pointer;
            }
        `;

        $head.insertBefore($style, null);
    };

    module.handleClick = () => {
        console.log("aeee!!!!")
    }

    module.render = () => {
        module._style();

        return `
            <label class=eye-collabcode for="password" onClick="eyeCollabcode.handleClick()">Mostrar Senha</label>
        `;
    };

    return {
        render: module.render,
        handleClick: module.handleClick
    };

})();