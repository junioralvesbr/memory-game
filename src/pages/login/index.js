(function () {

    const $root = document.querySelector('#root');

    const $loginButton = flatButton.render("log in", "active");
    const $signupButton = flatButton.render("sign up");

    const $logoCollabcode = logoCollabcode.render();
    const $titleCollabcode = titleCollabcode.render("hello !!")
    const $logoWrapper = logoWrapper.render($logoCollabcode, $titleCollabcode);

    const $formLogin = formLogin.render();


    $root.insertAdjacentHTML("beforeend", $loginButton);
    $root.insertAdjacentHTML("beforeend", $signupButton);
    $root.insertAdjacentHTML("beforeend", $logoWrapper);
    $root.insertAdjacentHTML("beforeend", $formLogin);

})();