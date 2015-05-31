# BEM Social Components Library
[![Build Status](https://travis-ci.org/bem-incubator/bem-social.svg?branch=master)](https://travis-ci.org/bem-incubator/bem-social)
[![Bower version](https://badge.fury.io/bo/bem-social.svg)](http://badge.fury.io/bo/bem-social)

Библиотека блоков социальных виджетов для бэм проектов. Share, Like, Follow,
Yandex.Share API и другие. Содержит SVG иконки социальных сетей, и несколько
тем оформления. Библиотека использует некоторые блоки [bem-components](http://github.com/bem/bem-components).

## Установка

Установка похожа на установку `bem-core` и `bem-components` библиотек. Используйте `bower install` для 
установки `bem-social` для установки из GitHub или из Bower.

Нужно добавить нужные уровни в ваш `make.js` файл.

```
[
    'libs/bem-social/common.blocks',
    'libs/bem-social/desktop.blocks',
    'libs/bem-social/design/common.blocks'
]
```

Добавьте нужные блоки на ваши страницы. Примеры можно посмотреть в папках с блоками.

## История изменений

### 0.3.1

- Теперь для сборки используется `enb`
- Обновлены зависимости

### 0.3.0

- Добавился блок коментариев `disqus`

### 0.2.0

- Переименован блок `github` в `github-button`
- Добавлен блок `github-ribbon`

### 0.1.0

##### Блоки на основе апи сервисов

- Блок `github` Github Buttons
- Блок `twitter` кнопки "твитнуть", виджет "твит"
- Блок `vk` Лайк
- Блок `yashare` "Поделиться" от Яндекса

##### Кастомизируемые блоки

- Блок `share` поддерживаемые сервисы Blogger, Facebook, Google Plus, Twitter, Вконтакте

##### Темы оформления

- Блок `share` Темы `simple` и `normal`

## В планах

+ Blocks `*-groups`
+ Авторизации
+ и другие интерфейсные решения использования социальных кнопок

### [MIT](http://en.wikipedia.org/wiki/MIT_License) Лицензия
