module.exports = function(bh) {

    bh.match('share', function(ctx, json) {
        ctx.tag('a');

        var content = [json.icon];

        (!json.icon && json.text !== false) && content.push({ elem : 'text', content : json.text || 'Share' });

        ctx.content(content);
    });

    bh.match('share__text', function(ctx) {
        ctx.tag('span');
    });

};
