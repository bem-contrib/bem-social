module.exports = function(bh) {

    bh.match('github-ribbon_theme_darkblue', function(ctx) {
        var img = ctx.mod('right')?
            'https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png'
            : 'https://s3.amazonaws.com/github/ribbons/forkme_left_darkblue_121621.png';

        ctx.param('image', img);
    });

};
