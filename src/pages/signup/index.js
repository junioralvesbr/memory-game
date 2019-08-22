(function () {
    const $root = document.querySelector('#root');

    const $loginButton = flatButton.render("log in");
    const $signupButton = flatButton.render("sign up", true);

    const $logoCollabcode = logoCollabcode.render();
    const $titleCollabcode = titleCollabcode.render("Welcome!");
    const $logoWrapper = logoWrapper.render($logoCollabcode, $titleCollabcode);

    const createLabel = labelCollabcode.render();
    const createInput = inputCollabcode.render();

    const $labelUsername = createLabel({
        type: "text",
        content: "Username"
    });

    const $inputUsername = createInput({
        type: "text"
    });

    const $labelEmail = createLabel({
        type: "email",
        content: "E-mail"
    });

    const $inputEmail = createInput({
        type: "email"
    });

    const $labelPassword = createLabel({
        type: "password",
        content: "Password"
    });

    const $inputPassword = createInput({
        type: "password"
    });

    const $labelConfirmPassword = createLabel({
        type: "password",
        content: "Confirm Password"
    });

    const $inputConfirmPassword = createInput({
        type: "password"
    });

    const $pageButton = pageButton.render('Submit');

    $root.insertAdjacentHTML("beforeend", $loginButton);
    $root.insertAdjacentHTML("beforeend", $signupButton);
    $root.insertAdjacentHTML("beforeend", $logoWrapper);

    $root.insertAdjacentHTML("beforeend", $labelUsername);
    $root.insertAdjacentHTML("beforeend", $inputUsername);
    $root.insertAdjacentHTML("beforeend", $labelEmail);
    $root.insertAdjacentHTML("beforeend", $inputEmail);
    $root.insertAdjacentHTML("beforeend", $labelPassword);
    $root.insertAdjacentHTML("beforeend", $inputPassword);
    $root.insertAdjacentHTML("beforeend", $labelConfirmPassword);
    $root.insertAdjacentHTML("beforeend", $inputConfirmPassword);
    $root.insertAdjacentHTML("beforeend", $pageButton);

})();