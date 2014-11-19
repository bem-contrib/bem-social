# github-button

Блок `github-button` используется для подключения GitHub:Buttons на страницы.
Не работает без модификаторов. 

## Использование
```js
{
    block : 'github-button',
    mods : { type : 'star', size : 'l', count : true },
    user : 'voischev',
    repo : 'bem-social'
}
```

## Модификаторы `type`

- `download` 
- `follow` 
- `fork` 
- `issue` 
- `star` 
- `watch` 

## Модификатор `size`

-  Большая кнопка со значением 'l'

## Модификатор `count` 

Что бы отобразить счетчик нужно установть в значение `true`.
Доступен для типов кнопоу к кроторых возможен счетчик. 

- `follow` 
- `fork` 
- `issue` 
- `star` 
- `watch`


## Специализированные поля блока

Список зарезервированных полей входного BEMJSON:

<table>
    <tr>
        <th>Поле</th>
        <th>Тип</th>
        <th>Описание</th>
    </tr>
    <tr>
        <td>user</td>
        <td>
            <code>String</code>
        </td>
        <td>Пользователь на GitHub</td>
    </tr>
    <tr>
        <td>repo</td>
        <td>
            <code>String</code>
        </td>
        <td>Репозиторий на GitHub. Для типа `follow` неуказывается</td>
    </tr>
</table>
