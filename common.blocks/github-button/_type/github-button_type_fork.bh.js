module.exports = function(bh) {

    bh.match('github-button_type_fork', function(ctx, json) {
        var mods = ctx.mods();
        var user = json.user;
        var repo = json.repo;

        ctx.attrs({
            href : 'https://github.com/' + user + '/' + repo,
            'data-style' : mods.large && 'mega',
            'data-count-href' : mods.count && ('/' + user + '/' + repo + '/network'),
            'data-count-api' : mods.count && ('/repos/' + user + '/' + repo + '#forks_count'),
            'data-icon' : 'octicon-git-branch'
        });
        ctx.content(json.text || 'Fork');
    });

};
