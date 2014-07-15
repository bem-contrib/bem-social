/* global modules:false */

modules.define('share', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {

            }
        }
    }
}));
});
