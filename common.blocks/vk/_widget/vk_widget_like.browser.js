modules.define(
    'vk_widget_like',
    ['i-bem__dom', 'vk', 'vk__config'],
    function(provide, BEMDOM, VK) {

    provide(BEMDOM.decl({ block : 'vk', modName : 'widget', modVal : 'like' }, {
        onSetMod : {
            js : {
                inited : function() {
                    VK.Widgets.Like(this.params.element_id, this.params);
                }
            }
        }
    }));

});
