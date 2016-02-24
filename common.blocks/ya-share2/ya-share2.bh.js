module.exports = function(bh) {

    bh.match('ya-share2', function(ctx, json) {
        ctx.js(true);
        ctx.attrs({
            'data-services' : (json.services || []).join(','),
            'data-counter' : json.counter,
            'data-copy' : json.copy,
            'data-description' : json.description,
            'data-image' : json.image,
            'data-lang' : json.lang || 'ru',
            'data-limit' : json.limit,
            'data-size' : json.size,
            'data-title' : json.title,
            'data-url' : json.url
        });
    });

};
