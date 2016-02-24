({
    block : 'page',
    title : 'BEM Social Library Page',
    head : [
        { elem : 'meta', attrs : { name : 'description', content : 'Библиотека социальных виджетов' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=1000' } },
        {
            block : 'og',
            title : 'BEM Social',
            description : 'Библиотека социальных виджетов',
            type : 'site',
            keywords : 'bem social widget',
            url : 'https://github.com/bem-incubator/bem-social',
            image : ['https://raw.githubusercontent.com/voischev/bem-social/',
                    'master/desktop.bundles/index/blocks/page/image/bem.png']
        },
        { elem : 'css', url : '_index.css' }
    ],
    scripts : [{ elem : 'js', url : '_index.js' }],
    content : [
        {
            block : 'github-ribbon',
            mods : { theme : 'darkblue', right : true },
            url : 'https://github.com/bem-incubator/bem-social'
        },
        {
            tag : 'h1',
            content : 'BEM Social'
        },
        {
            tag : 'p',
            content : 'Библиотека социальных виджетов'
        },
        {
            elem : 'content',
            content : [
                {
                    tag : 'h3',
                    content : 'Share: Theme Normal [Size: m]'
                },
                {
                    block : 'share',
                    mods : { service : 'vkontakte', theme : 'normal', size : 'm' },
                    params : {
                        url : 'http://bem-incubator.github.io/bem-social/',
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
                    params : {
                        url : 'http://bem-incubator.github.io/bem-social/',
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
                    params : {
                        url : 'http://bem-incubaror.github.io/bem-social/',
                        title : 'BEM Social Components Library #b_',
                        description : 'Fork me on GitHub'
                    },
                    text : 'Twitter',
                    icon : { block : 'icon', mods : { service : 'twitter' } }
                },
                {
                    block : 'share',
                    mods : { service : 'gplus', theme : 'normal', size : 'm' },
                    params : {
                        url : 'http://bem-incubator.github.io/bem-social/'
                    },
                    text : 'Google',
                    icon : { block : 'icon', mods : { service : 'gplus' } }
                },
                {
                    block : 'share',
                    mods : { service : 'blogger', theme : 'normal', size : 'm' },
                    params : {
                        url : 'http://bem-incubator.github.io/bem-social/',
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
                    params : {
                        url : 'http://bem-incubator.github.io/bem-social/',
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
                    params : {
                        url : 'http://bem-incubator.github.io/bem-social/',
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
                    params : {
                        url : 'http://bem-incubator.github.io/bem-social/',
                        title : 'BEM Social Components Library #b_',
                        description : 'Fork me on GitHub'
                    },
                    icon : { block : 'icon', mods : { service : 'twitter' } }
                },
                {
                    block : 'share',
                    mods : { service : 'gplus', theme : 'normal', size : 'm' },
                    params : {
                        url : 'http://bem-incubator.github.io/bem-social/'
                    },
                    icon : { block : 'icon', mods : { service : 'gplus' } }
                },
                {
                    block : 'share',
                    mods : { service : 'blogger', theme : 'normal', size : 'm' },
                    params : {
                        url : 'http://bem-incubator.github.io/bem-social/',
                        title : 'BEM Social Components Library',
                        description : 'Fork me on GitHub',
                        image : 'https://raw.githubusercontent.com/voischev/bem-social/' +
                                'master/desktop.bundles/index/blocks/page/image/bem.png'
                    },
                    icon : { block : 'icon', mods : { service : 'blogger' } }
                },
                {
                    tag : 'h3',
                    content : 'Share: Theme Simple [Size: m]'
                },
                {
                    block : 'share',
                    mods : { service : 'vkontakte', theme : 'simple', size : 'm' },
                    params : {
                        url : 'http://bem-incubator.github.io/bem-social/',
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
                    params : {
                        url : 'http://bem-incubator.github.io/bem-social/',
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
                    params : {
                        url : 'http://bem-incubator.github.io/bem-social/',
                        title : 'BEM Social Components Library #b_',
                        description : 'Fork me on GitHub'
                    },
                    text : 'Twitter'
                },
                {
                    block : 'share',
                    mods : { service : 'gplus', theme : 'simple', size : 'm' },
                    params : {
                        url : 'http://bem-incubator.github.io/bem-social/'
                    },
                    text : 'Google'
                },
                {
                    block : 'share',
                    mods : { service : 'blogger', theme : 'simple', size : 'm' },
                    params : {
                        url : 'http://bem-incubator.github.io/bem-social/',
                        title : 'BEM Social Components Library',
                        description : 'Fork me on GitHub',
                        image : 'https://raw.githubusercontent.com/voischev/bem-social/' +
                                'master/desktop.bundles/index/blocks/page/image/bem.png'
                    },
                    text : 'Blogger'
                },
                {
                    tag : 'h3',
                    content : 'GitHub Buttons'
                },
                {
                    block : 'github-button',
                    mods : { type : 'star', large : true, count : true },
                    user : 'voischev',
                    repo : 'bem-social'
                },
                {
                    block : 'github-button',
                    mods : { type : 'follow', large : true, count : true },
                    user : 'voischev'
                },
                {
                    block : 'github-button',
                    mods : { type : 'watch', large : true, count : true },
                    user : 'voischev',
                    repo : 'bem-social'
                },
                {
                    block : 'github-button',
                    mods : { type : 'issue', large : true, count : true },
                    user : 'voischev',
                    repo : 'bem-social'
                },
                {
                    block : 'github-button',
                    mods : { type : 'fork', large : true, count : true },
                    user : 'voischev',
                    repo : 'bem-social'
                },
                {
                    block : 'github-button',
                    mods : { type : 'download', large : true },
                    user : 'voischev',
                    repo : 'bem-social'
                },
                {
                    tag : 'h3',
                    content : 'GitHub Ribbon'
                },
                {
                    tag : 'p',
                    content : [
                        'Реализованы все темы с ',
                        {
                            block : 'link',
                            mods : { theme : 'islands' },
                            url : 'https://github.com/blog/273-github-ribbons',
                            content : 'этой страницы'
                        }
                    ]
                },
                {
                    elem : 'ribbon',
                    content : [
                        {
                            block : 'github-ribbon',
                            mods : { theme : 'red', left : true },
                            url : 'https://github.com/bem-incubator/bem-social'
                        },
                        {
                            block : 'github-ribbon',
                            mods : { theme : 'orange', left : true },
                            url : 'https://github.com/bem-incubator/bem-social'
                        },
                        {
                            block : 'github-ribbon',
                            mods : { theme : 'green', left : true },
                            url : 'https://github.com/bem-incubator/bem-social'
                        },
                        {
                            block : 'github-ribbon',
                            mods : { theme : 'gray', left : true },
                            url : 'https://github.com/bem-incubator/bem-social'
                        }
                    ]
                },
                {
                    tag : 'h3',
                    content : 'Twitter'
                },
                {
                    block : 'twitter',
                    mods : { widget : 'tweet' },
                    content : [
                        '<p>Сделал кнопку Твиттера в либу. Социальные кнопки на БЭМ ',
                        '<a href="https://t.co/9hclJfMtba">https://t.co/9hclJfMtba</a> ',
                        '<a href="https://twitter.com/hashtag/bem?src=hash">#bem</a> ',
                        '<a href="https://twitter.com/hashtag/b_?src=hash">#b_</a> ',
                        'с помощью <a href="https://twitter.com/bem_ru">@bem_ru</a></p>',
                        '&mdash; Ваня Воищев (@voischev) <a href="https://twitter.com/voischev/status/511972758528344064">16 сентября 2014</a>']
                },
                {
                    block : 'twitter',
                    mods : { widget : 'share' },
                    url : 'https://github.com/bem-incubator/bem-social',
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
                    url : 'https://github.com/bem-incubator/bem-social',
                    text : 'Социальные кнопки на БЭМ',
                    via : 'voischev',
                    related : 'bem_ru',
                    count : 'vertical',
                    hashtags : 'bem,b_',
                    lang : 'ru'
                },
                {
                    block : 'twitter',
                    mods : { widget : 'share' },
                    count : 'none'
                },
                {
                    tag : 'h3',
                    content : 'VK'
                },
                {
                    block : 'vk',
                    mods : { widget : 'like' },
                    type : 'button',
                    title : 'BEM Social Components Library',
                    description : 'Fork me on GitHub',
                    url : 'http://bem-incubator.github.io/bem-social/',
                    image : 'https://raw.githubusercontent.com/voischev/bem-social/' +
                                'master/desktop.bundles/index/blocks/page/image/bem.png',
                    text : 'Fork me on GitHub',
                    id : 'vk_like',
                    pageId : 1
                },
                {
                    block : 'vk',
                    mods : { widget : 'like' },
                    type : 'mini',
                    title : 'BEM Social Components Library',
                    description : 'Fork me on GitHub',
                    url : 'http://bem-incubator.github.io/bem-social/',
                    image : 'https://raw.githubusercontent.com/voischev/bem-social/' +
                                'master/desktop.bundles/index/blocks/page/image/bem.png',
                    text : 'Fork me on GitHub',
                    id : 'vk_like_mini',
                    pageId : 2
                },
                {
                    tag : 'h3',
                    content : 'API Yandex.Share'
                },
                {
                    block : 'yashare',
                    quickServices : [
                        'vkontakte',
                        'facebook',
                        'twitter',
                        'odnoklassniki',
                        'moimir',
                        'gplus'
                    ],
                    theme : 'counter',
                    l10n : 'ru',
                    url : 'http://bem-incubator.github.io/bem-social/',
                    title : 'BEM Social Components Library',
                    description : 'Fork me on GitHub',
                    image : 'https://raw.githubusercontent.com/voischev/bem-social/' +
                            'master/desktop.bundles/index/blocks/page/image/bem.png'
                },
                {
                    tag : 'br'
                },
                {
                    block : 'yashare',
                    quickServices : [
                        'vkontakte',
                        'facebook',
                        'twitter',
                        'odnoklassniki',
                        'moimir',
                        'lj',
                        'friendfeed',
                        'gplus'
                    ],
                    theme : 'default',
                    l10n : 'ru',
                    url : 'http://bem-incubator.github.io/bem-social/',
                    title : 'BEM Social Components Library',
                    description : 'Fork me on GitHub',
                    image : 'https://raw.githubusercontent.com/voischev/bem-social/' +
                            'master/desktop.bundles/index/blocks/page/image/bem.png'
                },
                {
                    tag : 'br'
                },
                {
                    attrs : { style : 'background: #212121' },
                    content : [
                        {
                            block : 'yashare',
                            quickServices : [
                                'vkontakte',
                                'facebook',
                                'twitter',
                                'odnoklassniki',
                                'lj'
                            ],
                            theme : 'dark',
                            url : 'http://bem-incubator.github.io/bem-social/',
                            title : 'BEM Social Components Library',
                            description : 'Fork me on GitHub',
                            image : 'https://raw.githubusercontent.com/voischev/bem-social/' +
                                    'master/desktop.bundles/index/blocks/page/image/bem.png'
                        }
                    ]
                },
                {
                    tag : 'br'
                },
                {
                    tag : 'h3',
                    content : 'API Yandex.Share2'
                },
                {
                    block : 'ya-share2',
                    services : [
                        'vkontakte',
                        'facebook',
                        'twitter',
                        'odnoklassniki',
                        'moimir',
                        'gplus'
                    ],
                    url : 'http://bem-incubator.github.io/bem-social/',
                    title : 'BEM Social Components Library',
                    description : 'Fork me on GitHub',
                    image : 'https://raw.githubusercontent.com/voischev/bem-social/' +
                            'master/desktop.bundles/index/blocks/page/image/bem.png'
                },

            ]
        },
        {
            block : 'disqus',
            shortname : 'bemsocial'
        },
        {
            elem : 'footer',
            content : [
                {
                    tag : 'p',
                    content : [
                        {
                            block : 'link',
                            mods : { theme : 'islands' },
                            content : 'bem-social'
                        }
                    ]
                }
            ]
        }
    ]
})
