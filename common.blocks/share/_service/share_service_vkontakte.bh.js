module.exports = function(bh) {

    bh.match('share_service_vkontakte', function(ctx, json) {
        var params = json.params,
            uri = 'http://vkontakte.ru/share.php?';

        ctx.js(params);

        params.url          && (uri += 'url=' + encodeURIComponent(params.url));
        params.title        && (uri += '&title=' + encodeURIComponent(params.title));
        params.description  && (uri += '&description=' + encodeURIComponent(params.description));
        params.image        && (uri += '&image=' + encodeURIComponent(params.image));
        true                && (uri += '&noparse=true');

        ctx.attrs({ href : uri, title : json.title || 'ВКонтакте' });
    });

};
