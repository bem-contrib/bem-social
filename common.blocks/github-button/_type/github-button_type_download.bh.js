module.exports = function(bh) {

    bh.match('github-button_type_download', function(ctx, json) {
        var mods = ctx.mods();
        var user = json.user;
        var repo = json.repo;

        ctx.attrs({
            href : 'https://github.com/' + user + '/' + repo + '/archive/master.zip',
            'data-style' : mods.large && 'mega',
            'data-icon' : 'octicon-cloud-download'
        });
        ctx.content(json.text || 'Download');
    });

};
