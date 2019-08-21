(function () {
    const $root = document.querySelector('#root');

    const $loginButton = flatButton.render("log in");
    const $signupButton = flatButton.render("sign up", true);

    const $logoCollabcode = logoCollabcode.render();
    const $titleCollabcode = titleCollabcode.render("Welcome!");
    const $logoWrapper = logoWrapper.render($logoCollabcode, $titleCollabcode);

    const $labelCollabcode = labelCollabcode.render();
    const $inputCollabcode = inputCollabcode.render();

    $root.insertAdjacentHTML("beforeend", $loginButton);
    $root.insertAdjacentHTML("beforeend", $signupButton);
    $root.insertAdjacentHTML("beforeend", $logoWrapper);
    $root.insertAdjacentHTML("beforeend", $labelCollabcode);
    $root.insertAdjacentHTML("beforeend", $inputCollabcode);

})();