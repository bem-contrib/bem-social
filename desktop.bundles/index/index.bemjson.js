({
    block : 'page',
    title : 'BEM Social Library Page',
    head : [
        { elem : 'meta', attrs : { name : 'description', content : '' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
        { elem : 'css', url : '_index.css' }
    ],
    scripts : [{ elem : 'js', url : '_index.js' }],
    content : [
        {   // tmp block TODO refactor
            block : 'link',
            mods : { github : 'ribbon' },
            url : 'https://github.com/voischev/bem-social',
            content : 'Fork me on GitHub'
        },
        {
            elem : 'title',
            tag : 'h1',
            content : [
                {
                    block : 'link',
                    url : 'https://github.com/voischev/bem-social',
                    content : 'BEM Social Components Library'
                }
            ]
        },
        {
            block : 'share',
            mods : { service : 'vkontakte', theme : 'simple', size : 'm' },
            js : {
                url : 'http://voischev.github.io/bem-social/',
                title : 'BEM Social Components Library',
                description : 'Fork me on GitHub',
                image : 'blocks/page/image/bem.png'
            },
            text : 'vkontakte'
        },
        {
            block : 'share',
            mods : { service : 'facebook', theme : 'simple', size : 'm' },
            js : {
                url : 'http://voischev.github.io/bem-social/',
                title : 'BEM Social Components Library',
                description : 'Fork me on GitHub',
                image : 'blocks/page/image/bem.png'
            },
            text : 'facebook'
        },
        {
            block : 'share',
            mods : { service : 'twitter', theme : 'simple', size : 'm' },
            js : {
                url : 'http://voischev.github.io/bem-social/',
                title : 'BEM Social Components Library #b_',
                description : 'Fork me on GitHub',
                image : 'blocks/page/image/bem.png'
            },
            text : 'twitter'
        },
        {
            block : 'share',
            mods : { service : 'odnoklassniki', theme : 'simple', size : 'm' },
            js : {
                url : 'http://voischev.github.io/bem-social/',
                title : 'BEM Social Components Library',
                description : 'Fork me on GitHub',
                image : 'blocks/page/image/bem.png'
            },
            text : 'odnoklassniki'
        },
        {
            block : 'share',
            mods : { service : 'blogger', theme : 'simple', size : 'm' },
            js : {
                url : 'http://voischev.github.io/bem-social/',
                title : 'BEM Social Components Library',
                description : 'Fork me on GitHub',
                image : 'blocks/page/image/bem.png'
            },
            text : 'blogger'
        }
    ]
})
