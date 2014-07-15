/* global modules:false */

modules.define('share', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                this.bindTo('click', this._openPopup);
            }
        }
    },
    _openPopup : function() {
        window.open(this.domElem.attr('href'), '', 'toolbar=0,status=0,width=626,height=436');
        return false;
    }
}));
});
