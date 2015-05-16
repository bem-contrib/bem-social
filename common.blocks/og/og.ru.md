Блок для удобной вставки Open Graph meta атрибутов. 
Блок зависит от блока `page` и нужен для вставки в `head` моду блока.
Блок вместо себя возвращает элемент `meta` блока `page` по каждому переданному полю с правильно задданными атребутами 

Пример:

```
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
            url : 'http//example.com/url',
            image : 'http//example.com/image.png'
        }
    ]
})
```
