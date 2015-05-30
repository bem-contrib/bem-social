module.exports = function(bh) {

    bh.match('yashare', function(ctx, json) {
        ctx.js(true);
        ctx.cls('yashare-auto-init');
        ctx.attrs({
            'data-yashareQuickServices' : (json.quickServices || []).join(','),
            'data-yashareTheme' : json.theme || 'counter',
            'data-yashareL10n' : json.l10n || 'ru'
        });
    });

};
