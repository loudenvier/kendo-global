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
    "Locale": "sv-SE",
    "Description": "Sverige",
    "Components": {
        "ColumnMenu": {
            "messages": {
                "sortAscending": "Stigande",
                "sortDescending": "Fallande",
                "filter": "Filter",
                "columns": "Kolumner"
            }
        },
        "Groupable": {
            "messages": {
                "empty": "Dra en kolumnrubrik och släpp den här för att gruppera på den kolumnen"
            }
        },
        "FilterMenu": {
            "messages": {
                "info": "Visa poster med",
                "filter": "Filtrera",
                "clear": "Ta bort",
                "isTrue": "Är sann",
                "isFalse": "Är falsk",
                "and": "Och",
                "or": "Eller",
                "selectValue": "-Välj ett värde-"
            },
            "operators": {
                "string": {
                    "eq": "Lika med",
                    "neq": "Inte lika med",
                    "startswith": "Börjar med",
                    "contains": "Innehåller",
                    "døsnotcontain": "Innehåller inte",
                    "endswith": "Slutar med"
                },
                "number": {
                    "eq": "Lika med",
                    "neq": "Inte lika med",
                    "gte": "Större än eller lika med",
                    "gt": "Större än",
                    "lte": "Mindre än eller lika med",
                    "lt": "Mindre än"
                },
                "date": {
                    "eq": "Lika med",
                    "neq": "Inte lika med",
                    "gte": "Större än eller lika med",
                    "gt": "Större än",
                    "lte": "Mindre än eller lika med",
                    "lt": "Mindre än"

                },
                "enums": {
                    "eq": "Lika med",
                    "neq": "Inte lika med"
                }
            }
        },
        "Pager": {
            "messages": {
                "display": "{0} - {1} av {2} poster",
                "empty": "Inga poster",
                "page": "Sida",
                "of": "av {0}",
                "itemsPerPage": "Poster per sida",
                "first": "Första sidan",
                "previous": "Föregående sida",
                "next": "Nästa sida",
                "last": "Sista sidan",
                "refresh": "Uppdatera"
            }
        },
        "Validator": {
            "messages": {
                "required": "{0} är obligatorisk",
                "pattern": "{0} är ogiltig",
                "min": "{0} ska vara större än eller lika med {1}",
                "max": "{0} ska vara mindre än eller lika med {1}",
                "step": "{0} är ogiltig",
                "email": "{0} är inte en giltig e-mail-adress",
                "url": "{0} är inte en giltig URL",
                "date": "{0} er inte ett giltigt datum"
            }
        },
        "ImageBrowser": {
            "messages": {
                "uploadFile": "Skickar",
                "orderBy": "Sortera efter",
                "orderByName": "Namn",
                "orderBySize": "Storlek",
                "directoryNotFound": "Biblioteket kunde inte hittas.",
                "emptyFolder": "Tom mapp",
                "deleteFile": "Är du säker på du vill radera filen: \"{0}\"?",
                "invalidFileType": "Det valda filformatet: \"{0}\" är ogiltigt. Giltiga filformat är {1}.",
                "overwriteFile": "En fil med samma namn \"{0}\" existerar redan, vill du skriva över?",
                "dropFilesHere": "Släpp filer här"
            }
        },
        "Editor": {
            "messages": {
                "bold": "Fet",
                "italic": "Kursiv",
                "underline": "Understruket",
                "strikethrough": "Genomstruket",
                "superscript": "Framhävd",
                "subscript": "Sänkt",
                "justifyCenter": "Centrerat",
                "justifyLeft": "Vänstrejustera",
                "justifyRight": "Höjrejustera",
                "justifyFull": "Lika marginaler",
                "insertUnorderedList": "Klistra in osorterad lista",
                "insertOrderedList": "Klistra in sorterad lista",
                "indent": "Öka indrag",
                "outdent": "Minska indrag",
                "createLink": "Skapa länk",
                "unlink": "Radera länk",
                "insertImage": "Klistra in bild",
                "insertHtml": "Klistra in HTML",
                "fontName": "Font",
                "fontNameInherit": "(Ärvd font)",
                "fontSize": "Fontstorlek",
                "fontSizeInherit": "(Ärvd fontstorlek)",
                "formatBlock": "Format",
                "foreColor": "Färg",
                "backColor": "Bakgrundsfärg",
                "style": "Stil",
                "emptyFolder": "Tom mapp",
                "uploadFile": "Skickar",
                "orderBy": "Sortera efter:",
                "orderBySize": "Storlek",
                "orderByName": "Namn",
                "invalidFileType": "Det valda filformatet: \"{0}\" är ogiltigt. Giltiga filformat är {1}.",
                "deleteFile": "Är du säker på du vill radera filen: \"{0}\"?",
                "overwriteFile": "En fil med samma namn \"{0}\" existerar redan, vill du skriva över?",
                "directoryNotFound": "Biblioteket kunde inte hittas.",
                "imageWebAddress": "Internet adress",
                "imageAltText": "Alternativ Text",
                "dialogInsert": "Ersätt",
                "dialogButtonSeparator": "eller",
                "dialogCancel": "Avbryt"
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