module.exports = function(bh) {

    bh.match('vk_widget_like', function(ctx, json) {
        ctx.js({
            element_id : json.id,
            type : json.type,
            pageTitle : json.title,
            pageDescription : json.description,
            pageUrl : json.url,
            pageImage : json.image,
            text : json.text,
            verb : json.verb,
            width : json.width,
            height : json.height,
            page_id : json.pageId
        });
        ctx.attrs({ id : json.id });
    });

};
