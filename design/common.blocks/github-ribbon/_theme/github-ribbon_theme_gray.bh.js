module.exports = function(bh) {

    bh.match('github-ribbon_theme_gray', function(ctx) {
        var img = ctx.mod('right')?
            'https://s3.amazonaws.com/github/ribbons/forkme_right_gray_6d6d6d.png'
            : 'https://s3.amazonaws.com/github/ribbons/forkme_left_gray_6d6d6d.png';

        ctx.param('image', img);
    });

};
