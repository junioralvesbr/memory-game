const iconCollabCode = (function () {

    const module = {};

    module._style = () => {
        const $head = document.querySelector('head');
        const $style = document.createElement('style');

        $style.textContent = `
            .bkpLogo {
                width: 252px;
                height: 252px;
                background-color: #fff;
                border-radius: 50%;
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
        module._style();

        return `
            <div class="bkpLogo">
                <img src="img/icon-collabcode.png" class="icon" alt="Icon CollabCode">
            </div>
        `;
    };

    return {
        render: module.render
    };

})();