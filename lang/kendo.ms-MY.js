/*
* Kendo UI Localization Project for v2012.3.1114 
* Copyright 2012 Telerik AD. All rights reserved.
* 
* Malaysian Malay (ms-MY) Language Pack
* Pek untuk Bahasa Melayu Malaysia (ms-MY)
*
* Project home  : https://github.com/loudenvier/kendo-global
* Kendo UI home : http://kendoui.com
* Author        : Ikhwan Hayat 
*                 https://github.com/ikhwanhayat
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

kendo.ui.Locale = "Malaysian Malay (ms-MY)";
kendo.ui.ColumnMenu.prototype.options.messages = 
    $.extend(kendo.ui.ColumnMenu.prototype.options.messages, {

/* COLUMN MENU MESSAGES 
 ****************************************************************************/   
    sortAscending: "Susun menaik",
    sortDescending: "Susun menurun",
    filter: "Tapis",
    columns: "Lajur",
    done: "Selesai",
    settings: "Tetapan Lajur"
 /***************************************************************************/   
});

kendo.ui.Groupable.prototype.options.messages = 
    $.extend(kendo.ui.Groupable.prototype.options.messages, {

/* GRID GROUP PANEL MESSAGES 
 ****************************************************************************/   
    empty: "Tarik tajuk lajur dan lepaskan di sini untuk grup mengikut lajur tersebut"
 /***************************************************************************/   
});

kendo.ui.FilterMenu.prototype.options.messages = 
    $.extend(kendo.ui.FilterMenu.prototype.options.messages, {
    
/* FILTER MENU MESSAGES 
 ***************************************************************************/   
    info: "Paparkan item yang nilainya:",  // sets the text on top of the filter menu
    filter: "Tapis",                    // sets the text for the "Filter" button
    clear: "Buang",                     // sets the text for the "Clear" button
    // when filtering boolean numbers
    isTrue: "adalah ya",                // sets the text for "isTrue" radio button
    isFalse: "adalah tidak",            // sets the text for "isFalse" radio button
    //changes the text of the "And" and "Or" of the filter menu
    and: "dan",
    or: "atau",
    selectValue: "-Pilih nilai-",
    operator: "Operator",
    value: "Nilai",
    cancel: "Batal"
 /***************************************************************************/   
});
                 
kendo.ui.FilterMenu.prototype.options.operators =           
    $.extend(kendo.ui.FilterMenu.prototype.options.operators, {

/* FILTER MENU OPERATORS (for each supported data type) 
 ****************************************************************************/   
    string: {
            eq: "sama dengan",
            neq: "tidak sama dengan",
            startswith: "dimulakan dengan",
            contains: "mengandungi",
            doesnotcontain: "tidak mengandungi",
            endswith: "diakhiri dengan"
    },
    number: {
            eq: "sama dengan",
            neq: "tidak sama dengan",
            gte: "lebih atau sama dengan",
            gt: "lebih dari",
            lte: "kurang atau sama dengan",
            lt: "kurang dari"
    },
    date: {
            eq: "sama dengan",
            neq: "tidak sama dengan",
            gte: "selepas atau sama dengan",
            gt: "selepas",
            lte: "sebelum atau sama dengan",
            lt: "sebelum"
    },
    enums: {
            eq: "sama dengan",
            neq: "tidak sama dengan",
    }
 /***************************************************************************/   
});

kendo.ui.Pager.prototype.options.messages = 
    $.extend(kendo.ui.Pager.prototype.options.messages, {
    
/* PAGER MESSAGES 
 ****************************************************************************/   
    display: "{0} - {1} dari {2} item",
    empty: "Tiada item untuk dipaparkan",
    page: "Muka",
    of: "dari {0}",
    itemsPerPage: "item setiap muka",
    first: "Pergi ke muka pertama",
    previous: "Pergi ke muka sebelumnya",
    next: "Pergi ke muka seterusnya",
    last: "Pergi ke muka terakhir",
    refresh: "Muat semula"
 /***************************************************************************/   
});

kendo.ui.Validator.prototype.options.messages = 
    $.extend(kendo.ui.Validator.prototype.options.messages, {

/* VALIDATOR MESSAGES 
 ****************************************************************************/   
    required: "{0} diperlukan",
    pattern: "{0} adalah tidak sah",
    min: "{0} perlu lebih atau sama dengan {1}",
    max: "{0} perlu kurang atau sama dengan {1}",
    step: "{0} adalah tidak sah",
    email: "{0} bukan alamat email yang sah",
    url: "{0} bukan URL yang sah",
    date: "{0} bukan tarikh yang sah"
 /***************************************************************************/   
});

kendo.ui.ImageBrowser.prototype.options.messages = 
    $.extend(kendo.ui.ImageBrowser.prototype.options.messages, {

/* IMAGE BROWSER MESSAGES 
 ****************************************************************************/   
    uploadFile: "Muat Naik",
    orderBy: "Susun mengikut",
    orderByName: "Nama",
    orderBySize: "Saiz",
    directoryNotFound: "Direktori dengan nama ini tidak ditemui.",
    emptyFolder: "Folder kosong",
    deleteFile: 'Ada yakin untuk hapuskan "{0}"?',
    invalidFileType: "Fail \"{0}\" yang dipilih adalah tidak sah. Jenis fail yang disokong adalah {1}.",
    overwriteFile: "Fail bernama \"{0}\" sudah wujud dalam direktori semasa. Anda ingin gantikan ia?",
    dropFilesHere: "tarik fail ke sini untuk memuat naik",
    search: "Cari"
 /***************************************************************************/   
});

kendo.ui.Editor.prototype.options.messages = 
    $.extend(kendo.ui.Editor.prototype.options.messages, {

/* EDITOR MESSAGES 
 ****************************************************************************/   
    bold: "Tebal",
    italic: "Condong",
    underline: "Bergaris",
    strikethrough: "Potong",
    superscript: "Superskrip",
    subscript: "Subskrip",
    justifyCenter: "Tengahkan teks",
    justifyLeft: "Rapatkan teks ke kiri",
    justifyRight: "Rapatkan teks ke kanan",
    justifyFull: "Justikasikan teks",
    insertUnorderedList: "Masukkan senarai tidak bernombor",
    insertOrderedList: "Masukkan senarai bernombor",
    indent: "Inden",
    outdent: "Outden",
    createLink: "Masukkan pautan",
    unlink: "Buang pautan",
    insertImage: "Masukkan imej",
    insertHtml: "Masukkan HTML",
    viewHtml: "Lihat HTML",
    fontName: "Pilih famili font",
    fontNameInherit: "(font diwarisi)",
    fontSize: "Pilih saiz font",
    fontSizeInherit: "(saiz diwarisi)",
    formatBlock: "Format",
    foreColor: "Warna",
    backColor: "Warna latar",
    style: "Gaya",
    emptyFolder: "Folder kosong",
    uploadFile: "Muat naik",
    orderBy: "Susun mengikut:",
    orderBySize: "Saiz",
    orderByName: "Nama",
    invalidFileType: "Fail \"{0}\" yang dipilih adalah tidak sah. Jenis fail yang disokong adalah {1}.",
    deleteFile: 'Ada yakin untuk hapuskan "{0}"?',
    overwriteFile: 'Fail bernama "{0}" sudah wujud dalam direktori semasa. Anda ingin gantikan ia?',
    directoryNotFound: "Direktori dengan nama ini tidak ditemui.",
    imageWebAddress: "Alamat web",
    imageAltText: "Teks alternatif",
    linkWebAddress: "Alamat web",
    linkText: "Teks",
    linkToolTip: "Tooltip",
    linkOpenInNewWindow: "Buka pautan di tetingkap baru",
    dialogInsert: "Masukkan",
    dialogButtonSeparator: "atau",
    dialogCancel: "Batal",
    createTable: "Buat jadual",
    addColumnLeft: "Tambah lajur di kiri",
    addColumnRight: "Tambah lajur di kanan",
    addRowAbove: "Tambah baris di atas",
    addRowBelow: "Tambah baris di bawah",
    deleteRow: "Padam baris",
    deleteColumn: "Padam lajur"
 /***************************************************************************/   
});

kendo.ui.NumericTextBox.prototype.options =
    $.extend(kendo.ui.NumericTextBox.prototype.options, {
    /* NUMERIC TEXT BOX OR INTEGER TEXT BOX MESSAGES
    ****************************************************************************/
    upArrowText: "Tambahkan nilai",
    downArrowText: "Kurangkan nilai"
    /***************************************************************************/
});

kendo.ui.Upload.prototype.options.localization =
    $.extend(kendo.ui.Upload.prototype.options.localization, {

    /* UPLOAD LOCALIZATION
         ****************************************************************************/
    select: "Pilih fail...",
    cancel: "Batal",
    retry: "Cuba semula",
    remove: "Buang",
    uploadSelectedFiles: "Muat naik fail",
    dropFilesHere: "tarik fail ke sini untuk memuat naik",
    statusUploading: "memuat naik",
    statusUploaded: "telah dimuat naik",
    statusWarning: "amaran",
    statusFailed: "gagal",
    headerStatusUploading: "Sedang memuat naik...",
    headerStatusUploaded: "Selesai"
    /***************************************************************************/
});