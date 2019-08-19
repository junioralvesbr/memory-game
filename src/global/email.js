const validEmail = (function () {

    const module = {};

    module.valid = $element => {
        if (!module._emailTest($element)) {
            document.querySelector('.input-form.-span').innerHTML = "Email invalido";
        }
    }

    module.focusEmail = () => {
        document.querySelector('.input-form.-span').innerHTML = "";
    }

    module._emailTest = $element => {
        const email = $element.value;
        const regex = /^\w*(\.\w*)?@\w*\.[a-z]+(\.[a-z]+)?$/;

        const teste = regex.test(email);
        return teste;

    }

    return {
        valid: module.valid,
        focusEmail: module.focusEmail
    }
})();