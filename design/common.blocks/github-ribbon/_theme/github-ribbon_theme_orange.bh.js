module.exports = function(bh) {

    bh.match('github-ribbon_theme_orange', function(ctx) {
        var img = ctx.mod('right')?
            'https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png'
            : 'https://s3.amazonaws.com/github/ribbons/forkme_left_orange_ff7600.png';

        ctx.param('image', img);
    });

};
