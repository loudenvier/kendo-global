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
    "Locale": "nb-NO",
    "Description": "Norway",
    "Components": {
        "ColumnMenu": {
            "messages": {
                "sortAscending": "Stigende",
                "sortDescending": "Synkende",
                "filter": "Filter",
                "columns": "Kolonner"
            }
        },
        "Groupable": {
            "messages": {
                "empty": "Trekk en kollonneoverskrift og slipp den her for å gruppere etter denne kolonnen"
            }
        },
        "FilterMenu": {
            "messages": {
                "info": "Vis poster med",
                "filter": "Filtrer",
                "clear": "Fjern",
                "isTrue": "Er sann",
                "isFalse": "Er falsk",
                "and": "Og",
                "or": "Eller",
                "selectValue": "-Velg en verdi-"
            },
            "operators": {
                "string": {
                    "eq": "Er lik",
                    "neq": "Er ikke lik",
                    "startswith": "Starter med",
                    "contains": "Inneholder",
                    "doesnotcontain": "Inneholder ikke",
                    "endswith": "Ender med"
                },
                "number": {
                    "eq": "Lik med",
                    "neq": "Ikke lik med",
                    "gte": "Større enn eller lik med",
                    "gt": "Større enn",
                    "lte": "Mindre enn eller lik med",
                    "lt": "Mindre enn"
                },
                "date": {
                    "eq": "lik med",
                    "neq": "Ikke lik med",
                    "gte": "Større enn eller lik med",
                    "gt": "Større enn",
                    "lte": "Mindre enn eller lik med",
                    "lt": "Er mindre"
                },
                "enums": {
                    "eq": "lik med",
                    "neq": "Ikke lik med"
                }
            }
        },
        "Pager": {
            "messages": {
                "display": "{0} - {1} av {2} poster",
                "empty": "Ingen poster",
                "page": "Side",
                "of": "av {0}",
                "itemsPerPage": "Poster pr side",
                "first": "Første side",
                "previous": "Forrige side",
                "next": "Neste side",
                "last": "Sidste side",
                "refresh": "Oppdater"
            }
        },
        "Validator": {
            "messages": {
                "required": "{0} er obligatorisk",
                "pattern": "{0} er ugyldig",
                "min": "{0} skal være større enn eller lik med {1}",
                "max": "{0} skal være mindre enn eller lik med {1}",
                "step": "{0} er ugyldig",
                "email": "{0} er ikke en gyldig e-mail adresse",
                "url": "{0} er ikke en gyldig URL",
                "date": "{0} er ikke en gyldig dato"
            }
        },
        "ImageBrowser": {
            "messages": {
                "uploadFile": "Sender",
                "orderBy": "Sorter etter",
                "orderByName": "Navn",
                "orderBySize": "Størrelse",
                "directoryNotFound": "Biblioteket ble ikke funnet.",
                "emptyFolder": "Tom mappe",
                "deleteFile": "Er du sikker på du vil slette filen: \"{0}\"?",
                "invalidFileType": "Det valgte filformatet: \"{0}\" er ugyldig. Støttede filformater er {1}.",
                "overwriteFile": "En fil med samme navn \"{0}\" eksisterer fra før, vil du overskrive?",
                "dropFilesHere": "Slip filer her"
            }
        },
        "Editor": {
            "messages": {
                "bold": "Fet",
                "italic": "Kursiv",
                "underline": "Understreket",
                "strikethrough": "Gjennomstreket",
                "superscript": "Fremhevet",
                "subscript": "Senket",
                "justifyCenter": "Sentrert",
                "justifyLeft": "Venstrejuster",
                "justifyRight": "Høyrejuster",
                "justifyFull": "like marger",
                "insertUnorderedList": "Sett inn uordnet liste",
                "insertOrderedList": "Sett inn ordnet liste",
                "indent": "Øk innrykk",
                "outdent": "Reduser innrykk",
                "createLink": "Opprett link",
                "unlink": "Fjern link",
                "insertImage": "Sett inn bilde",
                "insertHtml": "Sett inn HTML",
                "fontName": "Skrifttype",
                "fontNameInherit": "(Arv skrifttype)",
                "fontSize": "Skriftstørrelse",
                "fontSizeInherit": "(Arv skriftstørrelse)",
                "formatBlock": "Format",
                "foreColor": "Farge",
                "backColor": "Bakgrunns farge",
                "style": "Stil",
                "emptyFolder": "Tom mappe",
                "uploadFile": "Sender",
                "orderBy": "Sorter etter:",
                "orderBySize": "Størrelse",
                "orderByName": "Navn",
                "invalidFileType": "Det valgte filformatet: \"{0}\" er ugyldig. Støttede filformater er {1}.",
                "deleteFile": "Er du sikker på du vil slette filen: \"{0}\"?",
                "overwriteFile": "En fil med samme navn \"{0}\" eksisterer fra før, vil du overskrive?",
                "directoryNotFound": "Biblioteket ble ikke funnet.",
                "imageWebAddress": "Internett adresse",
                "imageAltText": "Alternativ Tekst",
                "dialogInsert": "Sett inn",
                "dialogButtonSeparator": "eller",
                "dialogCancel": "Annuller"
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