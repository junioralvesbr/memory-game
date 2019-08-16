const iconCollabCode = (function () {

    const module = {};

    module._style = () => {
        const $head = document.querySelector('head');
        const $style = document.createElement('style');

        $style.textContent = `
            .icon-wrapper {
                position: relative;
                top: -70px;
            }

            .icon-collabCode {
                width: 252px;
                height: 252px;
                background-color: #fff;
                border-radius: 50%;
                margin: 0 auto;
            }

            .icon {
                width: 175px;
                height: 175px;
                margin: 50%;
                transform: translate(-50%, -50%);
            }
        `;

        $head.insertBefore($style, null);
    }

    module.render = () => {
        const $titlePage = titlePage.render("Bem Vindo");
        module._style();

        return `
            <div class=icon-wrapper>
                <div class="icon-collabCode">
                    <img src="img/icon-collabcode.png" class="icon" alt="Icon CollabCode">
                </div>
                ${$titlePage}
            </div>
            <div>teste</div>
        `;
    };

    return {
        render: module.render
    };

})();