module.exports = function(bh) {

    bh.match('github-button_type_issue', function(ctx, json) {
        var mods = ctx.mods();
        var user = json.user;
        var repo = json.repo;

        ctx.attrs({
            href : 'https://github.com/' + user + '/' + repo + '/issues',
            'data-style' : mods.large && 'mega',
            'data-count-api' : mods.count && ('/repos/' + user + '/' + repo + '#open_issues_count'),
            'data-icon' : 'octicon-issue-opened'
        });
        ctx.content(json.text || 'Issue');
    });

};
