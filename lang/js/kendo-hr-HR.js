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
    "Locale": "hr-HR",
    "Description": "Croation HR",
    "Components": {
        "ColumnMenu": {
            "messages": {
                "sortAscending": "Poredaj Uzlazno",
                "sortDescending": "Poredaj silazno",
                "filter": "Filtriraj",
                "columns": "Stupci"
            }
        },
        "Groupable": {
            "messages": {
                "empty": "Dovucite zaglavlje kolone i ispustite ga ovdje kako biste grupirali po toj koloni"
            }
        },
        "FilterMenu": {
            "messages": {
                "info": "Prikaži objekte èija vrijednost:",
                "isTrue": "istinita",
                "isFalse": "lažna",
                "filter": "Filtriraj",
                "clear": "Poništi",
                "and": "I",
                "or": "Ili",
                "selectValue": "-Odaberite vrijednost-"
            },
            "operators": {
                "string": {
                    "eq": "Je jednaka",
                    "neq": "Nije jednaka",
                    "startswith": "Poèinje s",
                    "contains": "Sadrži",
                    "doesnotcontain": "Ne sadrži",
                    "endswith": "Završava s"
                },
                "number": {
                    "eq": "Je jednaka",
                    "neq": "Nije jednaka",
                    "gte": "Je veæa ili jednaka",
                    "gt": "Je veæa",
                    "lte": "Je manja ili jednaka",
                    "lt": "Je manja"
                },
                "date": {
                    "eq": "Je jednaka",
                    "neq": "Nije jednaka",
                    "gte": "Je nakon ili jednaka",
                    "gt": "Je nakon",
                    "lte": "Je prije ili jednaka",
                    "lt": "Je prije"
                },
                "enums": {
                    "eq": "Je jednaka",
                    "neq": "Nije jednaka"
                }
            }
        },
        "Pager": {
            "messages": {
                "display": "{0} - {1} od {2} zapisa",
                "empty": "Nema zapisa za prikaz",
                "page": "Stranica",
                "of": "od {0}",
                "itemsPerPage": "zapisa po stranici",
                "first": "Idi na prvu stranicu",
                "previous": "Idi na prethodnu stranicu",
                "next": "Idi na sljedeæu stranicu",
                "last": "Idi na posljednju stranicu",
                "refresh": "Osvježi"
            }
        },
        "Validator": {
            "messages": {
                "required": "{0} je obavezno",
                "pattern": "{0} nije valjano",
                "min": "{0} treba biti veæi ili jednak {1}",
                "max": "{0} treba biti manji ili jednak {1}",
                "step": "{0} nije valjano",
                "email": "{0} nije valjana e-mail adresa",
                "url": "{0} nije valjani URL",
                "date": "{0} nije valjani datum"
            }
        },
        "ImageBrowser": {
            "messages": {
                "uploadFile": "Uèitaj",
                "orderBy": "Poredaj po",
                "orderByName": "Ime",
                "orderBySize": "Velièina",
                "directoryNotFound": "Mapa s ovim imenom nije pronaðena.",
                "emptyFolder": "Prazna Mapa",
                "deleteFile": "Jeste li sigurni da želite obrisati \"{0}\"?",
                "invalidFileType": "Odabrana datoteka \"{0}\" nije valjana. Podržani tipovi datoteka su {1}.",
                "overwriteFile": "Datoteka s imenom \"{0}\" veæ postoji u trenutnoj mapi. Želite li ju prebrisati?",
                "dropFilesHere": "ispustite datoteke za uèitavanje"
            }
        },
        "Editor": {
            "messages": {
                "bold": "Podebljano",
                "italic": "Nakošeno",
                "underline": "Podcrtano",
                "strikethrough": "Crta kroz",
                "superscript": "Natpis",
                "subscript": "Potpis",
                "justifyCenter": "Centriraj tekst",
                "justifyLeft": "Poravnaj tekst lijevo",
                "justifyRight": "Poravnaj tekst desno",
                "justifyFull": "Prilagodi",
                "insertUnorderedList": "Umetni neporedanu listu ",
                "insertOrderedList": "Umetni poredanu listu",
                "indent": "Uvuci",
                "outdent": "Izvuci",
                "createLink": "Umetni vezu",
                "unlink": "Ukloni vezu",
                "insertImage": "Umetni sliku",
                "insertHtml": "Umetni HTML",
                "fontName": "Odaberite font",
                "fontNameInherit": "(nasljeðeni font)",
                "fontSize": "Odaberite velièinu slova",
                "fontSizeInherit": "(nasljeðena velièina)",
                "formatBlock": "Format",
                "foreColor": "Boja",
                "backColor": "Pozadinska boja",
                "style": "Stilovi",
                "emptyFolder": "Prazna Mapa",
                "uploadFile": "Uèitaj",
                "orderBy": "poredaj po:",
                "orderBySize": "Velièina",
                "orderByName": "ime",
                "invalidFileType": "Odabrana datoteka \"{0}\" nije valjana. Podržani tipovi datoteka su {1}.",
                "deleteFile": "Jeste li sigurni da želite izbrisati \"{0}\"?",
                "overwriteFile": "Datoteka s imenom \"{0}\" veæ postoji u trenutnoj mapi. Želite li ju prebrisati?",
                "directoryNotFound": "Mapa s ovim imenom nije pronaðena.",
                "imageWebAddress": "Web adresa",
                "imageAltText": "Alternativni tekst",
                "dialogInsert": "Umetni",
                "dialogButtonSeparator": "ili",
                "dialogCancel": "Odustani"
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