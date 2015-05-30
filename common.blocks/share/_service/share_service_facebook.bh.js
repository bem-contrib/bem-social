module.exports = function(bh) {

    bh.match('share_service_facebook', function(ctx, json) {
        var params = json.params,
            uri = 'https://www.facebook.com/sharer.php?s=100';

        ctx.js(params);

        params.url          && (uri += '&p[url]=' + encodeURIComponent(params.url));
        params.title        && (uri += '&p[title]=' + encodeURIComponent(params.title));
        params.description  && (uri += '&p[summary]=' + encodeURIComponent(params.description));
        params.image        && (uri += '&p[images][0]=' + encodeURIComponent(params.image));

        ctx.attrs({ href : uri, title : json.title || 'Facebook' });
    });

};
