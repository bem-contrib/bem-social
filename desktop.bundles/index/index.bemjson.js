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
                url : 'http://factory.mn',
                title : 'Привет мир',
                description : 'Описание',
                image : '/sdf/'
            },
            content : 'vkontakte'
        }
    ]
})
