(function () {
    const $root = document.querySelector('#root');
    console.log($root);

    const $flatButtonLogin = flatButton.render("login");
    const $flatButtonsignup = flatButton.render("signup", "-active")

    $root.insertAdjacentHTML("beforeend", $flatButtonLogin);
    $root.insertAdjacentHTML("beforeend", $flatButtonsignup);


})();