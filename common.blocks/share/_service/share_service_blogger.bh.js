module.exports = function(bh) {

    bh.match('share_service_blogger', function(ctx, json) {
        var params = json.params,
            uri = 'https://www.blogger.com/blog_this.pyra?';

        ctx.js(params);

        params.url          && (uri += '&u=' + encodeURIComponent(params.url));
        params.title        && (uri += '&n=' + encodeURIComponent(params.title));
        params.description  && (uri += '&t=' + encodeURIComponent(params.description));

        ctx.attrs({ href : uri, title : json.title || 'Blogger' });
    });

};
