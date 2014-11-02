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
            block : 'heading',
            content : 'BEM Social'
        },
        {
            block : 'paragraph',
            mods : { lead : true },
            content : 'Библиотека социальных виджетов'
        },
        {
            block : 'row',
            content : [
                {
                    elem : 'col',
                    elemMods : { s : true },
                    content : [
                        {
                            block : 'heading',
                            lvl : 3,
                            content : 'Twitter'
                        },
                        {
                            block : 'section',
                            content : [
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
                                    count : 'none'
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
                        },
                        {
                            block : 'heading',
                            lvl : 3,
                            content : 'VK'
                        },
                        {
                            block : 'section',
                            content : [
                                {
                                    block : 'vk',
                                    mods : { widget : 'like' },
                                    type : 'button',
                                    title : 'BEM Social Components Library',
                                    description : 'Fork me on GitHub',
                                    url : 'http://voischev.github.io/bem-social/',
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
                                    url : 'http://voischev.github.io/bem-social/',
                                    image : 'https://raw.githubusercontent.com/voischev/bem-social/' +
                                                'master/desktop.bundles/index/blocks/page/image/bem.png',
                                    text : 'Fork me on GitHub',
                                    id : 'vk_like_mini',
                                    pageId : 2
                                }
                            ]
                        },
                        {
                            block : 'heading',
                            lvl : 3,
                            content : 'API Yandex.Share'
                        },
                        {
                            block : 'section',
                            content : [
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
                                    url : 'http://voischev.github.io/bem-social/',
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
                                    url : 'http://voischev.github.io/bem-social/',
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
                                            url : 'http://voischev.github.io/bem-social/',
                                            title : 'BEM Social Components Library',
                                            description : 'Fork me on GitHub',
                                            image : 'https://raw.githubusercontent.com/voischev/bem-social/' +
                                                    'master/desktop.bundles/index/blocks/page/image/bem.png'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    elem : 'col',
                    elemMods : { s : true },
                    content : [
                        {
                            block : 'heading',
                            lvl : 3,
                            content : 'Share: Theme Normal [Size: m]'
                        },
                        {
                            block : 'section',
                            content : [
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
                                    mods : { service : 'gplus', theme : 'normal', size : 'm' },
                                    js : {
                                        url : 'http://voischev.github.io/bem-social/'
                                    },
                                    text : 'Google',
                                    icon : { block : 'icon', mods : { service : 'gplus' } }
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
                                    mods : { service : 'gplus', theme : 'normal', size : 'm' },
                                    js : {
                                        url : 'http://voischev.github.io/bem-social/'
                                    },
                                    icon : { block : 'icon', mods : { service : 'gplus' } }
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
                        },
                        {
                            block : 'heading',
                            lvl : 3,
                            content : 'Share: Theme Simple [Size: m]'
                        },
                        {
                            block : 'section',
                            content : [
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
                                    mods : { service : 'gplus', theme : 'simple', size : 'm' },
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
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            elem : 'footer',
            content : [
                {
                    block : 'paragraph',
                    mods : { lead : true },
                    content : [
                        {
                            block : 'link',
                            mods : { theme : 'islands' },
                            url : 'https://github.com/voischev/bem-social',
                            content : 'bem-social'
                        }
                    ]
                },
                {
                    block : 'paragraph',
                    mods : { lead : true },
                    content : [
                        'На этой странице использованы библиотеки: ',
                        {
                            block : 'link',
                            mods : { theme : 'islands' },
                            url : 'https://github.com/bem/bem-components',
                            content : 'bem-components'
                        },
                        ', ',
                        {
                            block : 'link',
                            mods : { theme : 'islands' },
                            url : 'http://verybigman.github.io/bem-grid/promo.pages/index/index.html',
                            content : 'bem-grid'
                        },
                        ', ',
                        {
                            block : 'link',
                            mods : { theme : 'islands' },
                            url : 'http://verybigman.github.io/bem-content/promo.pages/index/index.html',
                            content : 'bem-content'
                        },
                        ', ',
                        {
                            block : 'link',
                            mods : { theme : 'islands' },
                            url : 'https://github.com/voischev/bem-font',
                            content : 'bem-font'
                        }
                    ]
                }
            ]
        }
    ]
})
