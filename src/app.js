(function () {
    const { hash } = window.location;

    const paths = [];

    paths[""] = login;
    paths["#/login"] = login;
    paths["#/signup"] = signup;
    paths["#/game"] = game;
    paths["#/404"] = status404

    paths[hash] ? paths[hash]() : paths["#/404"]();

    // if (paths[hash]) {
    //     paths[hash]();
    // } else {
    //     paths["#/404"]();
    // }


    // Fução aplicado ao navegador que utiliza o reload ao trocar o hash da pagina
    window.onhashchange = () => {
        location.reload(true);
    };

     // Outra forma de fazer o reload
    //  window.addEventListener('hashchange', () => {
    //      location.reload(true);
    //  });
    
})();