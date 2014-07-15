({
    block : 'page',
    title : 'index',
    head : [
        { elem : 'meta', attrs : { name : 'description', content : '' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
        { elem : 'css', url : '_index.css' }
    ],
    scripts : [{ elem : 'js', url : '_index.js' }],
    content : [
        {
            block : 'share',
            mods : { api : 'vkontakte' },
            js : {
                url : 'https://github.com/voischev/bem-social',
                title : 'Привет мир',
                description : 'Share Bem-Social',
                image : 'https://avatars1.githubusercontent.com/u/1510217'
            },
            text : 'vkontakte'
        }
    ]
})
