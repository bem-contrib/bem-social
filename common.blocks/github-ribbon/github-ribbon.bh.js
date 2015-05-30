module.exports = function(bh) {

    bh.match('github-ribbon', function(ctx, json) {
        ctx.tag('a');
        ctx.attrs({
            href : json.url
        });
        ctx.content({
            tag : 'img',
            attrs : {
                src : json.image,
                alt : json.alt || 'Fork me on GitHub'
            }
        });
    });

};
