const eyeCollabcode = (function () {

    const module = {};

    module._style = () => { };

    module.render = () => `
        <label>Mostrar Senha</label>
    `;

    return {
        render: module.render
    };

})();