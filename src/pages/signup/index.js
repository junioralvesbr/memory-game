(function () {
    const $root = document.querySelector('#root');
    console.log($root);

    const $loginButton = flatButton.render("log in");
    const $signupButton = flatButton.render("sign up", true)
    const $iconCollabCode = iconCollabCode.render();


    $root.insertAdjacentHTML("beforeend", $loginButton);
    $root.insertAdjacentHTML("beforeend", $signupButton);
    $root.insertAdjacentHTML("beforeend", $iconCollabCode);
    $root.insertAdjacentHTML("beforeend", $titlePage);

})();