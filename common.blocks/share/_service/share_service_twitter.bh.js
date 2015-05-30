module.exports = function(bh) {

    bh.match('share_service_twitter', function(ctx, json) {
        var params = json.params,
            uri = 'https://twitter.com/share?';

        ctx.js(params);

        params.title        && (uri += 'text=' + encodeURIComponent(params.title));
        params.url          && (uri += '&url=' + encodeURIComponent(params.url));
        params.url          && (uri += '&counturl=' + encodeURIComponent(params.url));

        ctx.attrs({ href : uri, title : json.title || 'Twitter' });
    });

};
