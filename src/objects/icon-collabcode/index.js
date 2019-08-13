const iconCollabCode = (function () {

    const module = {};

    module.render = () => {
        return `
            <div>
                <img src="img/icon-collabcode.png" alt="Icon CollabCode">
            </div>
        `;
    };

    return {
        render: module.render
    };

})();