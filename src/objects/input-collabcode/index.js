const inputCollabcode = (function () {

    const module = {};

    module._style = () => {
        const $head = document.querySelector('head');
        const $style = document.createElement('style');

        $style.textContent = `
            .wrapper-input {
                position: relative;
            }

            .input-collabcode {
                display: block;
                width: 100%;
                color: rgb(58, 64, 66);
                font-size: 18px;
                font-weight: bold;
                padding: 12px 0;
                border: none;
                border-bottom: 2px solid rgba(58, 64, 66, .5);
            }

            .wrapper-input > .btn {
                position: absolute;
                top: 15px;
                right: 0;
                background-color: transparent;
                cursor: pointer;
            }

            .wrapper-input .image {
                opacity: 0.5;
            }

            .wrapper-input .image.-active {
                opacity: 1;
            }
        `

        $head.insertBefore($style, null);
    }

    module._button = (type) => {
        if (type === "password") {
            return `<button class="btn" type="button" onClick="inputCollabcode.active()"><img class="image" src="../img/hidden.svg" alt="eye passaword view"></button>`
        } else {
            return ""
        }
    }

    module.active = () => {
        const $buttonActive = document.querySelector('.image');

        $buttonActive.classList.toggle('-active');
    }

    module.render = () => {
        module._style();

        return ({ type, name, placeholder = "" }) => `
            <div class=wrapper-input>
                <input class="input-collabcode" type="${type}" name="${name}" placeholder="${placeholder}"/>
                ${module._button(type)}
            </div>
        `;
    };

    return {
        render: module.render,
        active: module.active
    };

})();