module.exports = function(bh) {
    bh.match('github-button', function(ctx) {
        ctx.tag('a');
    });
};
