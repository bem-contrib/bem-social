module.exports = function(bh) {

    bh.match('twitter_widget_tweet', function(ctx, json) {
        ctx.cls('twitter-tweet');
        ctx.tag('blockquote');
        ctx.attrs({
            'lang' : json.lang || 'ru'
        });
    });

};
