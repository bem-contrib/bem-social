modules.define(
    'ya-share2',
    ['i-bem__dom', 'loader_type_js'],
    function(provide, BEMDOM, Loader) {

    provide(BEMDOM.decl('ya-share2', {
        onSetMod : {
            js : {
                inited : function() {
                    Loader('https://yastatic.net/share2/share.js');
                }
            }
        }
    }));

});
