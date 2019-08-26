const formSignup = (function () {

    const module = {};

    module._style = () => {
        const $head = document.querySelector('head');
        const $style = document.createElement('style');

        $style.textContent = `
            .form-signup {
                padding: 0 35px 40px;
            }
        `;

        $head.insertBefore($style, null);
    };

    module._chilldren = () => {
        const createLabel = labelCollabcode.render();
        const createInput = inputCollabcode.render();

        const $usernameLabel = createLabel({
            type: "text",
            content: "Username"
        });

        const $usernameInput = createInput({
            type: "text",
            placeholder: "Name-example",

        });

        const $emailLabel = createLabel({
            type: "email",
            content: "E-mail"
        });

        const $emailInput = createInput({
            type: "email",
            // placeholder: "example@email.com",
        });

        const $passwordLabel = createLabel({
            type: "password",
            content: "Password"
        });

        const $passwordInput = createInput({
            type: "password",
            placeholder: "********"
        });

        const $confirmPasswordLabel = createLabel({
            type: "password",
            content: "Confirm Password"
        });

        const $confirmPasswordInput = createInput({
            type: "password",
            placeholder: "********"
        });

        const $pageButton = pageButton.render('Submit');

        return `
            ${$usernameLabel}
            ${$usernameInput}

            ${$emailLabel}
            ${$emailInput}

            ${$passwordLabel}
            ${$passwordInput}

            ${$confirmPasswordLabel}
            ${$confirmPasswordInput}

            ${$pageButton}
        `;
    };

    module.render = () => {
        module._style();

        return `
            <form class="form-signup" action="#" method="POST">${module._chilldren()}</form>
        `;
    };

    return {
        render: module.render
    };
})();