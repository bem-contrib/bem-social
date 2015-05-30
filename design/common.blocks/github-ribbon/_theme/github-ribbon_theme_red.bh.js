module.exports = function(bh) {

    bh.match('github-ribbon_theme_red', function(ctx) {
        var img = ctx.mod('right')?
            'https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png'
            : 'https://s3.amazonaws.com/github/ribbons/forkme_left_red_aa0000.png';

        ctx.param('image', img);
    });

};
