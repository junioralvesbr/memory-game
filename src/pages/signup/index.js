(function () {
    const $root = document.querySelector('#root');
    console.log($root);

    const $flatButton = flatButton.render("login");

    $root.insertAdjacentHTML("beforeend", $flatButton);

    $root.insertAdjacentHTML("beforeend", "<h1>Welcome!</h1>");

})();