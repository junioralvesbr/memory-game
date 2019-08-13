(function () {
    const $root = document.querySelector('#root');
    console.log($root);

    const $loginButton = flatButton.render("log in");
    const $signupButton = flatButton.render("sign up", true)

    $root.insertAdjacentHTML("beforeend", $loginButton);
    $root.insertAdjacentHTML("beforeend", $signupButton);

})();