module.exports = function(bh) {

    bh.match('share_service_gplus', function(ctx, json) {
        var params = json.params,
            uri = 'https://plus.google.com/share?';

        ctx.js(params);

        params.url && (uri += 'url=' + encodeURIComponent(params.url));

        ctx.attrs({ href : uri, title : json.title || 'Google Plus' });
    });

};
