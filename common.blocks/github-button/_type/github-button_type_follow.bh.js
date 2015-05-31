module.exports = function(bh) {

    bh.match('github-button_type_follow', function(ctx, json) {
        var mods = ctx.mods();
        var user = json.user;

        ctx.attrs({
            href : 'https://github.com/' + user,
            'data-style' : mods.large && 'mega',
            'data-count-href' : mods.count && ('/' + user + '/followers'),
            'data-count-api' : mods.count && ('/users/' + user + '#followers')
        });
        ctx.content(json.text || 'Follow @' +  json.user);
    });

};
