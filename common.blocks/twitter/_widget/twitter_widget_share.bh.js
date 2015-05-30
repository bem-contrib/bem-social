module.exports = function(bh) {

    bh.match('twitter_widget_share', function(ctx, json) {
        ctx.cls('twitter-share-button');
        ctx.attrs({
            href : 'https://twitter.com/share',
            'data-url' : json.url,
            'data-text' : json.text,
            'data-via' : json.via,
            'data-related' : json.related,
            'data-hashtags' : json.hashtags,
            'data-count' : json.count,
            'data-lang' : json.lang,
            'data-size' : json.size
        });
        ctx.content('Tweet');
    });

};
