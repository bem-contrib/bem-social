({
    block : 'page',
    title : 'github',
    head : [
        { elem : 'css', url : '_github.css' }
    ],
    scripts : [{ elem : 'js', url : '_github.js' }],
    content : [
        {
            block : 'github',
            mods : { button : 'follow' },
            user : 'voischev'
        },
        {
            block : 'github',
            mods : { button : 'follow', large : true, count : true },
            user : 'voischev'
        },
        {
            block : 'github',
            mods : { button : 'watch' },
            user : 'voischev',
            repo : 'bem-social'
        },
        {
            block : 'github',
            mods : { button : 'watch', large : true, count : true },
            user : 'voischev',
            repo : 'bem-social'
        },
        {
            block : 'github',
            mods : { button : 'star' },
            user : 'voischev',
            repo : 'bem-social'
        },
        {
            block : 'github',
            mods : { button : 'star', large : true, count : true },
            user : 'voischev',
            repo : 'bem-social'
        },
        {
            block : 'github',
            mods : { button : 'fork', large : true, count : true },
            user : 'voischev',
            repo : 'bem-social'
        },
        {
            block : 'github',
            mods : { button : 'issue', large : true, count : true },
            user : 'voischev',
            repo : 'bem-social'
        },
        {
            block : 'github',
            mods : { button : 'download', large : true },
            user : 'voischev',
            repo : 'bem-social'
        }
    ]
})
