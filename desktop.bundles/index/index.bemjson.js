({
    block : 'page',
    title : 'index',
    head : [
        { elem : 'meta', attrs : { name : 'description', content : '' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
        { elem : 'css', url : '_index.css' },
        {
            elem : 'css',
            content : '.share + .share{margin-left:10px}'
        }
    ],
    scripts : [{ elem : 'js', url : '_index.js' }],
    content : [
        {
            block : 'share',
            mods : { api : 'vkontakte', theme : 'simple', size : 'm' },
            js : {
                url : 'https://github.com/voischev/bem-social',
                title : 'Привет мир',
                description : 'Share Bem-Social',
                image : 'https://avatars1.githubusercontent.com/u/1510217'
            },
            text : 'vkontakte'
        },
        {
            block : 'share',
            mods : { api : 'facebook', theme : 'simple', size : 'm' },
            js : {
                url : 'https://github.com/voischev/bem-social',
                title : 'Привет мир',
                description : 'Share Bem-Social',
                image : 'https://avatars1.githubusercontent.com/u/1510217'
            },
            text : 'facebook'
        },
        {
            block : 'share',
            mods : { api : 'twitter', theme : 'simple', size : 'm' },
            js : {
                url : 'https://github.com/voischev/bem-social',
                title : 'Привет мир',
                description : 'Share Bem-Social',
                image : 'https://avatars1.githubusercontent.com/u/1510217'
            },
            text : 'twitter'
        },
        {
            block : 'share',
            mods : { api : 'odnoklassniki', theme : 'simple', size : 'm' },
            js : {
                url : 'https://github.com/voischev/bem-social',
                title : 'Привет мир',
                description : 'Share Bem-Social',
                image : 'https://avatars1.githubusercontent.com/u/1510217'
            },
            text : 'odnoklassniki'
        }
    ]
})
