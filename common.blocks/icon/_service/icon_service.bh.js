module.exports = function(bh) {

    bh.match('icon', function(ctx) {
        if(!ctx.mod('service')) return;

        ctx.tag('svg');
        ctx.attrs({
            xmlns : 'http://www.w3.org/2000/svg',
            width : '415',
            height : '415',
            viewBox : '0 0 415 415'
        }, true);
    });

};
