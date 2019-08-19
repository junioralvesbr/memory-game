const inputForm = (function () {

    const module = {};

    module._style = () => {
        const $head = document.querySelector('head');
        const $style = document.createElement('style');

        $style.textContent = `
            .input-form {
                width: 80vw;
                margin-left: 35px;
                padding-bottom: 12px;
                line-height: 1.13;
            }

            .input-form.-label {
                display: block;
                font-size: 16px;
                color: rgba(58, 64, 66, 0.5);
            }

            .input-form.-input {
                border: none;
                border-bottom: 2px solid rgba(58,64,66,.5);
                font-size: 18px;
                font-weight: bold;
                margin-bottom: 29px;
            }
        `

        $head.insertBefore($style, null);
    }

    module.create = () => {
        module._style();

        return ({ type, name, id, content, placeholder }) => `
            <label class="input-form -label" for=${id}>${content}</label>
            <input class="input-form -input" type=${type} name=${name} id=${id} placeholder=${placeholder} onblur=validEmail.valid(this) onfocus=validEmail.focus()>
            <span class="input-form -span"></span>
        `;
    };

    return {
        create: module.create
    };

})();