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
    "Locale": "sk-SK",
    "Description": "Slovak SK",
    "Components": {
        "ColumnMenu": {
            "messages": {
                "sortAscending": "Zoradiť vzostupne",
                "sortDescending": "Zoradiť zostupne",
                "filter": "Filter",
                "columns": "Stĺpce"
            }
        },
        "Groupable": {
            "messages": {
                "empty": "Chyťte hlavičku stĺpca a presuňte ho sem pre zoskupenie podľa tohoto stĺpca"
            }
        },
        "FilterMenu": {
            "messages": {
                "info": "Zobraziť položky s hodnotou, ktoré:",
                "isTrue": "je pravda",
                "isFalse": "nie je pravda",
                "filter": "Filtruj",
                "clear": "Vymazať",
                "and": "A",
                "or": "Alebo",
                "selectValue": "-Vyber hodnotu-"
            },
            "operators": {
                "string": {
                    "eq": "Je rovné",
                    "neq": "Nie je rovné",
                    "startswith": "Začína s",
                    "contains": "Obsahuje",
                    "doesnotcontain": "Neobsahuje",
                    "endswith": "Končí s"
                },
                "number": {
                    "eq": "Je rovné",
                    "neq": "Nie je rovné",
                    "gte": "Je väčšie alebo rovné",
                    "gt": "Je väčšie",
                    "lte": "Je menšie alebo rovné",
                    "lt": "Je menšie"
                },
                "date": {
                    "eq": "Je rovný",
                    "neq": "Nie je rovný",
                    "gte": "Je väčší alebo rovný",
                    "gt": "Je väčší",
                    "lte": "Je menší alebo rovný",
                    "lt": "Je menší"
                },
                "enums": {
                    "eq": "Je rovný",
                    "neq": "Nie je rovný"
                }
            }
        },
        "Pager": {
            "messages": {
                "display": "{0} - {1} z {2} položiek",
                "empty": "Žiadne položky na zobrazenie",
                "page": "Strana",
                "of": "z {0}",
                "itemsPerPage": "položiek na stránku",
                "first": "Choď na prvú stránku",
                "previous": "Choď na predchádzajúcu stránku",
                "next": "Choď na ďalšiu stránku",
                "last": "Choď na poslednú stránku",
                "refresh": "Obnoviť"
            }
        },
        "Validator": {
            "messages": {
                "required": "{0} je povinný",
                "pattern": "{0} nie je platný",
                "min": "{0} má byť väčší alebo rovný {1}",
                "max": "{0} má byť menší alebo rovný {1}",
                "step": "{0} nie je platný",
                "email": "{0} nie je platný email",
                "url": "{0} nie je platná URL adresa",
                "date": "{0} nie je platný dátum"
            }
        },
        "ImageBrowser": {
            "messages": {
                "uploadFile": "Vlož súbor",
                "orderBy": "Usporiadaj podľa",
                "orderByName": "Meno",
                "orderBySize": "Veľkosť",
                "directoryNotFound": "Adresár s týmto menom nebol nájdený.",
                "emptyFolder": "Prázdny adresár",
                "deleteFile": "Ste si istý, že chcete vymazať \"{0}\"?",
                "invalidFileType": "Vybraný súbor \"{0}\" nie je platný. Podporované typy súborov sú {1}.",
                "overwriteFile": "Súbor s menom \"{0}\" už v adresári existuje. Chcete ho prepísať?",
                "dropFilesHere": "pustite súbory sem pre vloženie"
            }
        },
        "Editor": {
            "messages": {
                "bold": "Tučný",
                "italic": "Kurzíva",
                "underline": "Podčiarknutý",
                "strikethrough": "Prečiarknutý",
                "superscript": "Horný index",
                "subscript": "Dolný index",
                "justifyCenter": "Zarovnať na stred",
                "justifyLeft": "Zarovnať doľava",
                "justifyRight": "Zarovnať doprava",
                "justifyFull": "Zarovnať do bloku",
                "insertUnorderedList": "Vložiť neusporiadaný text",
                "insertOrderedList": "Vložiť usporiadaný text",
                "indent": "Indent",
                "outdent": "Outdent",
                "createLink": "Vložiť hyperlink",
                "unlink": "Odstrániť hyperlink",
                "insertImage": "Vložiť obrázok",
                "insertHtml": "Vložiť HTML",
                "fontName": "Vybrať font family",
                "fontNameInherit": "(zdedený font)",
                "fontSize": "Vyberte veľkosť fontu",
                "fontSizeInherit": "(zdedená veľkosť)",
                "formatBlock": "Formát",
                "foreColor": "Farba",
                "backColor": "Farba pozadia",
                "style": "Štýly",
                "emptyFolder": "Prázdny adresár",
                "uploadFile": "Vložiť",
                "orderBy": "Usporiadať podľa:",
                "orderBySize": "Veľkosť",
                "orderByName": "Meno",
                "invalidFileType": "Vybraný súbor \"{0}\" nie je platný. Podporované typy súborov sú {1}.",
                "deleteFile": "Ste si istý, že chcete vymazať \"{0}\"?",
                "overwriteFile": "Súbor s menom \"{0}\" už v adresári existuje. Chcete ho prepísať?",
                "directoryNotFound": "Adresár s týmto menom nebol nájdený.",
                "imageWebAddress": "Webová adresa",
                "imageAltText": "Alternatívny text",
                "dialogInsert": "Vložiť",
                "dialogButtonSeparator": "alebo",
                "dialogCancel": "Zrušiť"
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