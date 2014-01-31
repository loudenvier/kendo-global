/*
 * Kendo UI Localization Project for v2012.3.1114
 * Copyright 2012 Telerik AD. All rights reserved.
 *
 * Project home  : https://github.com/loudenvier/kendo-global
 * Kendo UI home : http://kendoui.com
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
(function(){
	var labels =
{
    "Locale": "tr-TR",
    "Description": "Türkçe",
    "Components": {
        "ColumnMenu": {
            "messages": {
                "sortAscending": "Artan",
                "sortDescending": "Azalan",
                "filter": "Filtre",
                "columns": "Kolonlar"
            }
        },
        "Groupable": {
            "messages": {
                "empty": "Kolonu gruplamak için kolon başlığından sürükleyip buraya bırakın"
            }
        },
        "FilterMenu": {
            "messages": {
                "info": "Nesneleri şuna göre göster:",
                "filter": "Filtre",
                "clear": "Temizle",
                "isTrue": "Doğru",
                "isFalse": "Yanlış",
                "and": "İle",
                "or": "Ya da",
                "selectValue": "Değer seçiniz"
            },
            "operators": {
                "string": {
                    "eq": "Eşit",
                    "neq": "Eşit olmayan",
                    "startswith": "Bununla başlayan",
                    "contains": "Bunu içeren",
                    "doesnotcontain": "Bunu içermeyen",
                    "endswith": "Bununla biten"
                },
                "number": {
                    "eq": "Eşit",
                    "neq": "Eşit olmayan",
                    "gte": "Eşit veya bundan fazla",
                    "gt": "Bundan fazla",
                    "lte": "Eşit veya bundan az",
                    "lt": "Bundan az"
                },
                "date": {
                    "eq": "Eşit",
                    "neq": "Eşit değil",
                    "gte": "Eşit veya sonrası",
                    "gt": "Sonrası",
                    "lte": "Eşit veya öncesi",
                    "lt": "Öncesi"
                },
                "enums": {
                    "eq": "Eşit",
                    "neq": "Eşit olmayan"
                }
            }
        },
        "Pager": {
            "messages": {
                "display": "{2} öğeden {0} - {1} arası",
                "empty": "Gösterilecek öğe yok",
                "page": "Sayfa",
                "of": "tanesinden {0}",
                "itemsPerPage": "Öğe 1 sayfada",
                "first": "İlk",
                "previous": "Önceki",
                "next": "Sonraki",
                "last": "Son",
                "refresh": "Yenile"
            }
        },
        "Validator": {
            "messages": {
                "required": "{0} zorunlu alandır.",
                "pattern": "{0} geçerli değil",
                "min": "{0} buna eşit veya büyük olmalı: {1}",
                "max": "{0} buna eşit veya küçük olmalı: {1}",
                "step": "{0} geçerli değil",
                "email": "{0} geçerli bir mail adresi değil",
                "url": "{0} geçerli bir URL değil",
                "date": "{0} geçerli bir tarih değil"
            }
        },
        "ImageBrowser": {
            "messages": {
                "uploadFile": "Yükle",
                "orderBy": "Sırala",
                "orderByName": "Ad",
                "orderBySize": "Boyut",
                "directoryNotFound": "Bu isimde bir konum bulunamadı",
                "emptyFolder": "Boş klasör",
                "deleteFile": "\"{0}\" dosyasını silmek istediğinize emin misiniz?",
                "invalidFileType": "Seçilen \"{0}\" dosyası geçerli değil. Desteklenen tipler: {1}.",
                "overwriteFile": "\"{0}\" isimli dosya mevcut. Üzerine yazmak istiyor musunuz?",
                "dropFilesHere": "Dosyayı yüklemek için sürükleyip buraya bırakın"
            }
        },
        "Editor": {
            "messages": {
                "bold": "Kalın",
                "italic": "İtalik",
                "underline": "Alt çizgi",
                "strikethrough": "Çizili",
                "superscript": "Üstsimge",
                "subscript": "Altsimge",
                "justifyCenter": "Ortalı",
                "justifyLeft": "Yazılı sola yasla",
                "justifyRight": "Yazıyı sağa yasla",
                "justifyFull": "Tam genişlik",
                "insertUnorderedList": "Sıralı olmayan liste",
                "insertOrderedList": "Sıralı Liste",
                "indent": "Satırbaşı",
                "outdent": "Satırsonu",
                "createLink": "Link ekle",
                "unlink": "Link kaldır",
                "insertImage": "Resim ekle",
                "insertHtml": "HTML ekle",
                "fontName": "Yazı tipi seçin",
                "fontNameInherit": "(miras yazıtipi)",
                "fontSize": "Yazı boyutu seçin",
                "fontSizeInherit": "(miras yazıboyutu)",
                "formatBlock": "Format",
                "paragraph": "Paragraf",
                "foreColor": "Renk",
                "backColor": "Arkaplan rengi",
                "style": "Stil",
                "emptyFolder": "Boş klasör",
                "uploadFile": "Yükle",
                "orderBy": "Sırala :",
                "orderBySize": "Boyut",
                "orderByName": "Ad",
                "invalidFileType": "Seçilen \"{0}\" dosyası geçerli değil. Desteklenen tipler: {1}.",
                "deleteFile": "\"{0}\" dosyasını silmek istediğinize emin misiniz?",
                "overwriteFile": "\"{0}\" isimli dosya mevcut. Üzerine yazmak istiyor musunuz?",
                "directoryNotFound": "Bu isimde bir konum bulunamadı.",
                "imageWebAddress": "Internet adresi",
                "imageAltText": "Resim yazısı",
                "dialogInsert": "Ekle",
                "dialogButtonSeparator": "Ya da",
                "dialogCancel": "Vazgeç"
            }
        }
    }
};

	//Set the locale
	kendo.ui.Locale = labels.Description + " (" + labels.Locale + ")";

	// Loop through all Components
	for(var componentName in labels.Components){
		var component = labels.Components[componentName];

		// Loop through all options within that component (eg: 'messages' or 'operators)
		for(var optionName in component){
			var optionLabels = component[optionName];

			// Extend the KendoUI labels for the current option
			$.extend(kendo.ui[componentName].prototype.options[optionName], optionLabels);
		}
	}
})();