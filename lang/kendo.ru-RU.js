/*
 * Kendo UI Localization Project for v2012.3.1114
 * Copyright 2012 Telerik AD. All rights reserved.
 *
 * Standard Russian (ru-RU) Language Pack
 *
 * Project home  : https://github.com/loudenvier/kendo-global
 * Kendo UI home : http://kendoui.com
 * Author        : Pavel Tsarenko
 *
 *
 * This project is released to the public domain, although one must abide to the
 * licensing terms set forth by Telerik to use Kendo UI, as shown bellow.
 *
 * Telerik's original licensing terms:
 * -----------------------------------
 * Kendo UI Web commercial licenses may be obtained at
 * https://www.kendoui.com/purchase/license-agreement/kendo-ui-web-commercial.aspx
 * If you do not own a commercial license, this file shall be governed by the
 * GNU General Public License (GPL) version 3.
 * For GPL requirements, please review: http://www.gnu.org/copyleft/gpl.html
 */

kendo.ui.Locale = "Russian (ru-RU)";
kendo.ui.ColumnMenu.prototype.options.messages =
    $.extend(kendo.ui.ColumnMenu.prototype.options.messages, {

        /* COLUMN MENU MESSAGES
         ****************************************************************************/
        sortAscending: "По возрастанию",
        sortDescending: "По убыванию",
        filter: "Фильтр",
        columns: "Колонки"
        /***************************************************************************/
    });

kendo.ui.Groupable.prototype.options.messages =
    $.extend(kendo.ui.Groupable.prototype.options.messages, {

        /* GRID GROUP PANEL MESSAGES
         ****************************************************************************/
        empty: "Перетащите заголовок столбца для группировке по нему"
        /***************************************************************************/
    });

kendo.ui.FilterMenu.prototype.options.messages =
    $.extend(kendo.ui.FilterMenu.prototype.options.messages, {

        /* FILTER MENU MESSAGES
         ***************************************************************************/
        info: "Фильтр:",        // sets the text on top of the filter menu
        filter: "Применить",      // sets the text for the "Filter" button
        clear: "Отменить",        // sets the text for the "Clear" button
        // when filtering boolean numbers
        isTrue: "Да", // sets the text for "isTrue" radio button
        isFalse: "Нет",     // sets the text for "isFalse" radio button
        //changes the text of the "And" and "Or" of the filter menu
        and: "и",
        or: "или",
        selectValue: "-выберите-"
        /***************************************************************************/
    });

kendo.ui.FilterMenu.prototype.options.operators =
    $.extend(kendo.ui.FilterMenu.prototype.options.operators, {

        /* FILTER MENU OPERATORS (for each supported data type)
         ****************************************************************************/
        string: {
            eq: "Равно",
            neq: "Не равно",
            startswith: "Начинается с",
            contains: "Содержит",
            doesnotcontain: "Не содержит",
            endswith: "Оканчивается на"
        },
        number: {
            eq: "Равно",
            neq: "Не равно",
            gte: "Больше или равно",
            gt: "Больше",
            lte: "Меньше или равно",
            lt: "Меньше"
        },
        date: {
            eq: "Равно",
            neq: "Не равно",
            gte: "Больше или равно",
            gt: "Позже",
            lte: "Меньше или равно",
            lt: "Раньше"
        },
        enums: {
            eq: "Равно",
            neq: "Не равно"
        }
        /***************************************************************************/
    });

kendo.ui.Pager.prototype.options.messages =
    $.extend(kendo.ui.Pager.prototype.options.messages, {

        /* PAGER MESSAGES
         ****************************************************************************/
        display: "{0} - {1} из {2} записей",
        empty: "Нет данных",
        page: "Страница",
        of: "из {0}",
        itemsPerPage: "записей на странице",
        first: "Первая страница",
        previous: "Предыдущая",
        next: "Следующая",
        last: "Последняя страница",
        refresh: "Обновить"
        /***************************************************************************/
    });

kendo.ui.Validator.prototype.options.messages =
    $.extend(kendo.ui.Validator.prototype.options.messages, {

        /* VALIDATOR MESSAGES
         ****************************************************************************/
        required: "{0} обазателен",
        pattern: "{0} не верен",
        min: "{0} должен быть больше или равен {1}",
        max: "{0} должен быть меньше или равен {1}",
        step: "{0} не верен",
        email: "{0} не корректный email",
        url: "{0} не корректный URL",
        date: "{0} не корректная дата"
        /***************************************************************************/
    });

kendo.ui.ImageBrowser.prototype.options.messages =
    $.extend(kendo.ui.ImageBrowser.prototype.options.messages, {

        /* IMAGE BROWSER MESSAGES
         ****************************************************************************/
        uploadFile: "Загрузить",
        orderBy: "Сортировать по",
        orderByName: "Имя",
        orderBySize: "Размер",
        directoryNotFound: "Каталог с указанным именем не существует",
        emptyFolder: "Каталог пуст",
        deleteFile: 'Вы действительно хотите удалить "{0}"?',
        invalidFileType: "Выбранный файл \"{0}\" не поддерживается. Доступные типы {1}.",
        overwriteFile: "Файл \"{0}\" уже существует. Заменить?",
        dropFilesHere: "Перетащите сюда файлы для загрузки"
        /***************************************************************************/
    });

kendo.ui.Editor.prototype.options.messages =
    $.extend(kendo.ui.Editor.prototype.options.messages, {

        /* EDITOR MESSAGES
         ****************************************************************************/
        bold: "Жирный",
        italic: "Курсив",
        underline: "Подчеркнутый",
        strikethrough: "Зачеркнутый",
        superscript: "Верхний индекс",
        subscript: "Нижний индекс",
        justifyCenter: "По центру",
        justifyLeft: "По левому краю",
        justifyRight: "По правому краю",
        justifyFull: "По середине",
        insertUnorderedList: "Вставить маркированный список",
        insertOrderedList: "Вставить нумерованный список",
        indent: "Уменьшить отступ",
        outdent: "Увеличить отступ",
        createLink: "Втсавить ссылку",
        unlink: "Убрать ссылку",
        insertImage: "Вставить изображение",
        insertHtml: "Вставить HTML",
        fontName: "Шрифт",
        fontNameInherit: "(наследовать шрифт)",
        fontSize: "Размер шрифта",
        fontSizeInherit: "(наследовать размер)",
        formatBlock: "Форматирование",
        foreColor: "Цвет шрифта",
        backColor: "Цвет фона",
        style: "Стиль",
        emptyFolder: "Пустой каталог",
        uploadFile: "Загрузить файл",
        orderBy: "Сортировать по:",
        orderBySize: "Размер",
        orderByName: "Имя",
        invalidFileType: "Выбранный файл \"{0}\" не поддерживается. Доступные типы {1}.",
        overwriteFile: "Файл \"{0}\" уже существует. Заменить?",
        deleteFile: 'Вы уверены что хотите удалить "{0}"?',
        directoryNotFound: "Каталог не найден.",
        imageWebAddress: "Web адрес",
        imageAltText: "Альтернативный текст",
        dialogInsert: "Вставить",
        dialogButtonSeparator: "или",
        dialogCancel: "Отменить"
        /***************************************************************************/
    });
