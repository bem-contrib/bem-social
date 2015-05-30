module.exports = function(bh) {
    bh.match('disqus', function(ctx, json) {
        ctx.js({ shortname : json.shortname });
        ctx.attr('id', 'disqus_thread');
    });
};
