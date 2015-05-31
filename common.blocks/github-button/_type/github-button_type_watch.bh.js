module.exports = function(bh) {

    bh.match('github-button_type_watch', function(ctx, json) {
        var mods = ctx.mods();
        var user = json.user;
        var repo = json.repo;

        ctx.attrs({
            href : 'https://github.com/' + user + '/' + repo,
            'data-style' : mods.large && 'mega',
            'data-count-href' : mods.count && ('/' + user + '/' + repo + '/watchers'),
            'data-count-api' : mods.count && ('/repos/' + user + '/' + repo + '#subscribers_count'),
            'data-icon' : 'octicon-eye'
        });
        ctx.content(json.text || 'Watch');
    });

};
