module.exports = function(bh) {

    bh.match('github-button_type_star', function(ctx, json) {
        var mods = ctx.mods();
        var user = json.user;
        var repo = json.repo;

        ctx.attrs({
            href : 'https://github.com/' + user + '/' + repo,
            'data-style' : mods.large && 'mega',
            'data-count-href' : mods.count && ('/' + user + '/' + repo + '/stargazers'),
            'data-count-api' : mods.count && ('/repos/' + user + '/' + repo + '#stargazers_count'),
            'data-icon' : 'octicon-star'
        });
        ctx.content(json.text || 'Star');
    });

};
