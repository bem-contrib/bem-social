({
    block : 'page',
    title : 'BEM Social Library Page',
    head : [
        { elem : 'css', url : '_twitter.css' }
    ],
    scripts : [{ elem : 'js', url : '_twitter.js' }],
    content : [
        {
            block : 'twitter',
            mods : { widget : 'share' }
        },
        {
            block : 'twitter',
            mods : { widget : 'share' },
            url : 'https://github.com/voischev/bem-social',
            text : 'Социальные кнопки на БЭМ',
            via : 'voischev',
            related : 'bem_ru',
            hashtags : 'bem,b_',
            size : 'large',
            lang : 'ru'
        },
        {
            block : 'twitter',
            mods : { widget : 'share' },
            url : 'https://github.com/voischev/bem-social',
            text : 'Социальные кнопки на БЭМ',
            via : 'voischev',
            related : 'bem_ru',
            count : 'vertical',
            hashtags : 'bem,b_',
            lang : 'ru'
        }
    ]
})
