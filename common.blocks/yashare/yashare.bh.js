module.exports = function(bh) {

    bh.match('yashare', function(ctx, json) {
        ctx.js(true);
        ctx.cls('ya-share2');
        ctx.attrs({
            'data-bare' : json.bare,
            'data-counter' : json.counter,
            'data-copy' : json.copy,
            'data-description' : json.description,
            'data-image' : json.image,
            'data-lang' : json.lang,
            'data-limit' : json.limit,
            'data-services' : (json.services || []).join(','),
            'data-size' : json.size,
            'data-title' : json.title,
            'data-url' : json.url,
        });
    });

};
