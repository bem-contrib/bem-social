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
            tag : 'h2',
            content : 'Theme Simple [Size: m]'
        },
        {
            block : 'share',
            mods : { service : 'vkontakte', theme : 'simple', size : 'm' },
            js : {
                url : 'http://voischev.github.io/bem-social/',
                title : 'BEM Social Components Library',
                description : 'Fork me on GitHub',
                image : 'https://raw.githubusercontent.com/voischev/bem-social/' +
                        'master/desktop.bundles/index/blocks/page/image/bem.png'
            },
            text : 'Вконтакте'
        },
        {
            block : 'share',
            mods : { service : 'facebook', theme : 'simple', size : 'm' },
            js : {
                url : 'http://voischev.github.io/bem-social/',
                title : 'BEM Social Components Library',
                description : 'Fork me on GitHub',
                image : 'https://raw.githubusercontent.com/voischev/bem-social/' +
                        'master/desktop.bundles/index/blocks/page/image/bem.png'
            },
            text : 'Facebook'
        },
        {
            block : 'share',
            mods : { service : 'twitter', theme : 'simple', size : 'm' },
            js : {
                url : 'http://voischev.github.io/bem-social/',
                title : 'BEM Social Components Library #b_',
                description : 'Fork me on GitHub'
            },
            text : 'Twitter'
        },
        {
            block : 'share',
            mods : { service : 'google', theme : 'simple', size : 'm' },
            js : {
                url : 'http://voischev.github.io/bem-social/'
            },
            text : 'Google'
        },
        {
            block : 'share',
            mods : { service : 'blogger', theme : 'simple', size : 'm' },
            js : {
                url : 'http://voischev.github.io/bem-social/',
                title : 'BEM Social Components Library',
                description : 'Fork me on GitHub',
                image : 'https://raw.githubusercontent.com/voischev/bem-social/' +
                        'master/desktop.bundles/index/blocks/page/image/bem.png'
            },
            text : 'Blogger'
        },
        {
            tag : 'h2',
            content : 'Theme Normal [Size: m]'
        },
        {
            block : 'share',
            mods : { service : 'vkontakte', theme : 'normal', size : 'm' },
            js : {
                url : 'http://voischev.github.io/bem-social/',
                title : 'BEM Social Components Library',
                description : 'Fork me on GitHub',
                image : 'https://raw.githubusercontent.com/voischev/bem-social/' +
                        'master/desktop.bundles/index/blocks/page/image/bem.png'
            },
            text : 'Вконтакте',
            icon : { block : 'icon', mods : { service : 'vkontakte' } }
        },
        {
            block : 'share',
            mods : { service : 'facebook', theme : 'normal', size : 'm' },
            js : {
                url : 'http://voischev.github.io/bem-social/',
                title : 'BEM Social Components Library',
                description : 'Fork me on GitHub',
                image : 'https://raw.githubusercontent.com/voischev/bem-social/' +
                        'master/desktop.bundles/index/blocks/page/image/bem.png'
            },
            text : 'Facebook',
            icon : { block : 'icon', mods : { service : 'facebook' } }
        },
        {
            block : 'share',
            mods : { service : 'twitter', theme : 'normal', size : 'm' },
            js : {
                url : 'http://voischev.github.io/bem-social/',
                title : 'BEM Social Components Library #b_',
                description : 'Fork me on GitHub'
            },
            text : 'Twitter',
            icon : { block : 'icon', mods : { service : 'twitter' } }
        },
        {
            block : 'share',
            mods : { service : 'google', theme : 'normal', size : 'm' },
            js : {
                url : 'http://voischev.github.io/bem-social/'
            },
            text : 'Google',
            icon : { block : 'icon', mods : { service : 'google' } }
        },
        {
            block : 'share',
            mods : { service : 'blogger', theme : 'normal', size : 'm' },
            js : {
                url : 'http://voischev.github.io/bem-social/',
                title : 'BEM Social Components Library',
                description : 'Fork me on GitHub',
                image : 'https://raw.githubusercontent.com/voischev/bem-social/' +
                        'master/desktop.bundles/index/blocks/page/image/bem.png'
            },
            text : 'Blogger',
            icon : { block : 'icon', mods : { service : 'blogger' } }
        },
        {
            tag : 'br'
        },
        {
            block : 'share',
            mods : { service : 'vkontakte', theme : 'normal', size : 'm' },
            js : {
                url : 'http://voischev.github.io/bem-social/',
                title : 'BEM Social Components Library',
                description : 'Fork me on GitHub',
                image : 'https://raw.githubusercontent.com/voischev/bem-social/' +
                        'master/desktop.bundles/index/blocks/page/image/bem.png'
            },
            icon : { block : 'icon', mods : { service : 'vkontakte' } }
        },
        {
            block : 'share',
            mods : { service : 'facebook', theme : 'normal', size : 'm' },
            js : {
                url : 'http://voischev.github.io/bem-social/',
                title : 'BEM Social Components Library',
                description : 'Fork me on GitHub',
                image : 'https://raw.githubusercontent.com/voischev/bem-social/' +
                        'master/desktop.bundles/index/blocks/page/image/bem.png'
            },
            icon : { block : 'icon', mods : { service : 'facebook' } }
        },
        {
            block : 'share',
            mods : { service : 'twitter', theme : 'normal', size : 'm' },
            js : {
                url : 'http://voischev.github.io/bem-social/',
                title : 'BEM Social Components Library #b_',
                description : 'Fork me on GitHub'
            },
            icon : { block : 'icon', mods : { service : 'twitter' } }
        },
        {
            block : 'share',
            mods : { service : 'google', theme : 'normal', size : 'm' },
            js : {
                url : 'http://voischev.github.io/bem-social/'
            },
            icon : { block : 'icon', mods : { service : 'google' } }
        },
        {
            block : 'share',
            mods : { service : 'blogger', theme : 'normal', size : 'm' },
            js : {
                url : 'http://voischev.github.io/bem-social/',
                title : 'BEM Social Components Library',
                description : 'Fork me on GitHub',
                image : 'https://raw.githubusercontent.com/voischev/bem-social/' +
                        'master/desktop.bundles/index/blocks/page/image/bem.png'
            },
            icon : { block : 'icon', mods : { service : 'blogger' } }
        }
    ]
})
