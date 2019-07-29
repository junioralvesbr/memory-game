const layerStart = (function () {

    module = {};

    module.handleClick = $component => $component.remove();


    module.render = content => {
        const $transparentLayer = transparentLayer.render();
        const $gameButton = gameButton.render(content);

        return `
            <div class="layer-start" onclick="layerStart.handleClick(this)">
                ${$transparentLayer};
                ${$gameButton};
            </div>
        `
    }

    return {
        render: module.render,
        handleClick: module.handleClick
    }
})();