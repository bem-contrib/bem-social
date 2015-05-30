module.exports = function(bh) {

    bh.match('github-ribbon_theme_green', function(ctx) {
        var img = ctx.mod('right')?
            'https://s3.amazonaws.com/github/ribbons/forkme_right_green_007200.png'
            : 'https://s3.amazonaws.com/github/ribbons/forkme_left_green_007200.png';

        ctx.param('image', img);
    });

};
