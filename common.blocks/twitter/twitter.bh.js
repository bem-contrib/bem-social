module.exports = function(bh) {

    bh.match('twitter', function(ctx) {
        ctx.tag('a');
    });

};
