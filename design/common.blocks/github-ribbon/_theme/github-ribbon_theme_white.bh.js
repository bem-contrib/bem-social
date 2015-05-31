module.exports = function(bh) {

    bh.match('github-ribbon_theme_white', function(ctx) {
        var img = ctx.mod('right')?
            'https://s3.amazonaws.com/github/ribbons/forkme_right_white_ffffff.png'
            : 'https://s3.amazonaws.com/github/ribbons/forkme_left_white_ffffff.png';

        ctx.param('image', img);
    });

};
