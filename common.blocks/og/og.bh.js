module.exports = function(bh) {

    bh.match('og', function(ctx, json) {
        var og = [];

        function wrap(prop, value) {
            return { block : 'page', elem : 'meta', attrs : { property : prop, content : value } };
        }

        json.title       && og.push(wrap('og:title', json.title));
        json.description && og.push(wrap('og:description', json.description));
        json.type        && og.push(wrap('og:type', json.type));
        json.keywords    && og.push(wrap('og:article:tag', json.keywords));
        json.url         && og.push(wrap('og:url', json.url));
        json.image       && og.push(wrap('og:image', json.image));

        return og;
    });

};
