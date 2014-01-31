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
    "Locale": "nl-NL",
    "Description": "Nederlands",
    "Components": {
        "ColumnMenu": {
            "messages": {
                "sortAscending": "Sorteer Oplopend",
                "sortDescending": "Sorteer Aflopend",
                "filter": "Filteren",
                "columns": "Kolommen"
            }
        },
        "Groupable": {
            "messages": {
                "empty": "Sleep een kolomkop hierheen om te groeperen op die kolom"
            }
        },
        "FilterMenu": {
            "messages": {
                "info": "Toon items met een waarde die:",
                "isTrue": "is waar",
                "isFalse": "is niet waar",
                "filter": "Filteren",
                "clear": "Leegmaken",
                "and": "En",
                "or": "Of",
                "selectValue": "-Selecteer waarde-"
            },
            "operators": {
                "string": {
                    "eq": "Is gelijk aan",
                    "neq": "Is niet gelijk aan",
                    "startswith": "Begint met",
                    "contains": "Bevat",
                    "doesnotcontain": "Bevat niet",
                    "endswith": "Eindigt met"
                },
                "number": {
                    "eq": "Is gelijk aan",
                    "neq": "Is niet gelijk aan",
                    "gte": "Is groter dan of gelijk aan",
                    "gt": "Is groter dan",
                    "lte": "Is kleiner dan of gelijk aan",
                    "lt": "Is kleiner dan"
                },
                "date": {
                    "eq": "Is gelijk aan",
                    "neq": "Is niet gelijk aan",
                    "gte": "Is na of op",
                    "gt": "Is na",
                    "lte": "Is voor of op",
                    "lt": "Is voor"
                },
                "enums": {
                    "eq": "Is gelijk aan",
                    "neq": "Is niet gelijk aan"
                }
            }
        },
        "Pager": {
            "messages": {
                "display": "{0} - {1} van {2} items",
                "empty": "Geen items om weer te geven",
                "page": "Pagina",
                "of": "van {0}",
                "itemsPerPage": "items per pagina",
                "first": "Ga naar de eerste pagina",
                "previous": "Ga naar de vorige pagina",
                "next": "Ga naar de volgende pagina",
                "last": "Ga naar de laatste pagina",
                "refresh": "Verversen"
            }
        },
        "Validator": {
            "messages": {
                "required": "{0} is verplicht",
                "pattern": "{0} is niet geldig",
                "min": "{0} moet groter zijn dan of gelijk aan {1}",
                "max": "{0} moet kleiner zijn dan of gelijk aan {1}",
                "step": "{0} is niet geldig",
                "email": "{0} is geen geldig emailadres",
                "url": "{0} is geen geldige URL",
                "date": "{0} is geen geldige datum"
            }
        },
        "ImageBrowser": {
            "messages": {
                "uploadFile": "Uploaden",
                "orderBy": "Sorteren op",
                "orderByName": "Naam",
                "orderBySize": "Grootte",
                "directoryNotFound": "Er is geen map met deze naam gevonden.",
                "emptyFolder": "Lege map",
                "deleteFile": "Weet u zeker dat u \"{0}\" wilt verwijderen?",
                "invalidFileType": "Het geselecteerde bestand \"{0}\" is ongeldig. De volgende bestandstypes worden ondersteund {1}.",
                "overwriteFile": "Er bestaat al een bestand met de naam \"{0}\" in de huidige map. Wilt u dit bestand overschrijven?",
                "dropFilesHere": "sleep bestanden hierheen om te uploaden"
            }
        },
        "Editor": {
            "messages": {
                "bold": "Vet",
                "italic": "Cursief",
                "underline": "Onderstrepen",
                "strikethrough": "Doorstrepen",
                "superscript": "Superscript",
                "subscript": "Subscript",
                "justifyCenter": "Tekst centreren",
                "justifyLeft": "Tekst links uitlijnen",
                "justifyRight": "Tekst rechts uitlijnen",
                "justifyFull": "Uitvullen",
                "insertUnorderedList": "Opsommingstekens invoegen",
                "insertOrderedList": "Nummering invoegen",
                "indent": "Inspringen",
                "outdent": "Uitspringen",
                "createLink": "Hyperlink invoegen",
                "unlink": "Hyperlink verwijderen",
                "insertImage": "Afbeelding invoegen",
                "insertHtml": "HTML invoegen",
                "fontName": "Selecteer lettertype",
                "fontNameInherit": "(lettertype overerven)",
                "fontSize": "Selecteer lettergrootte",
                "fontSizeInherit": "(lettergrootte overerven)",
                "formatBlock": "Format",
                "foreColor": "Tekstkleur",
                "backColor": "Achtergrondkleur",
                "style": "Stijlen",
                "emptyFolder": "Lege Map",
                "uploadFile": "Uploaden",
                "orderBy": "Sorteer op:",
                "orderBySize": "Grootte",
                "orderByName": "Naam",
                "invalidFileType": "Het geselecteerde bestand \"{0}\" is ongeldig. De volgende bestandstypes worden ondersteund {1}.",
                "deleteFile": "Weet u zeker dat u \"{0}\" wilt verwijderen?",
                "overwriteFile": "Er bestaat al een bestand met de naam \"{0}\" in de huidige map. Wilt u dit bestand overschrijven?",
                "directoryNotFound": "Er is geen map met deze naam gevonden.",
                "imageWebAddress": "Web adres",
                "imageAltText": "Alternatieve tekst",
                "dialogInsert": "Invoegen",
                "dialogButtonSeparator": "of",
                "dialogCancel": "Annuleren"
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