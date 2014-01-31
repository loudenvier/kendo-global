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
    "Locale": "ro-RO",
    "Description": "Romanian",
    "Components": {
        "ColumnMenu": {
            "messages": {
                "sortAscending": "Sortează crescător",
                "sortDescending": "Sortează descrescător",
                "filter": "Filtru",
                "columns": "Coloane"
            }
        },
        "Groupable": {
            "messages": {
                "empty": "Adăugați, prin tragere, numele coloanei după care doriți să grupați datele"
            }
        },
        "FilterMenu": {
            "messages": {
                "info": "Filtre aplicate:",
                "isTrue": "este adevărat",
                "isFalse": "este fals",
                "filter": "Filtrează",
                "clear": "Renunță",
                "and": "Și",
                "or": "Sau",
                "selectValue": "-Selectați o valoare-"
            },
            "operators": {
                "string": {
                    "eq": "Este egal cu",
                    "neq": "Nu este egal cu",
                    "startswith": "Începe cu",
                    "contains": "Conține",
                    "doesnotcontain": "Nu conține",
                    "endswith": "Se termină cu"
                },
                "number": {
                    "eq": "Este egal cu",
                    "neq": "Nu este egal cu",
                    "gte": "Este mai mare sau egal cu",
                    "gt": "Este mai mare decât",
                    "lte": "Este mai mic sau egal cu",
                    "lt": "Este mai mic decât"
                },
                "date": {
                    "eq": "Este egală cu",
                    "neq": "Nu este egală cu",
                    "gte": "Este după sau egală cu",
                    "gt": "Este după",
                    "lte": "Este înainte sau egală cu",
                    "lt": "Este inainte"
                },
                "enums": {
                    "eq": "Este egal cu",
                    "neq": "Nu este egal cu"
                }
            }
        },
        "Pager": {
            "messages": {
                "display": "{0} - {1} din {2} înregistrări",
                "empty": "Nu sunt înregistrări",
                "page": "Pagină",
                "of": "din {0}",
                "itemsPerPage": "înregistrări pe pagină",
                "first": "Mergi la prima pagină",
                "previous": "Mergi la pagina anterioară",
                "next": "Mergi la următoarea pagină",
                "last": "Mergi la ultima pagină",
                "refresh": "Reîncarcă"
            }
        },
        "Validator": {
            "messages": {
                "required": "{0} este obligatoriu",
                "pattern": "{0} formă incorectă",
                "min": "{0} trebuie să fie mai mare sau egal cu {1}",
                "max": "{0} trebuie să fie mai mic sau egal cu {1}",
                "step": "{0} nu este valid",
                "email": "{0} email incorect",
                "url": "{0} URL incorect",
                "date": "{0} dată incorectă"
            }
        },
        "ImageBrowser": {
            "messages": {
                "uploadFile": "Încarcă",
                "orderBy": "Sortează dupa",
                "orderByName": "Nume",
                "orderBySize": "Dimensiune",
                "directoryNotFound": "Nu a fost găsit nici un director.",
                "emptyFolder": "Director gol",
                "deleteFile": "'Sunteți sigur că doriți să ștergeți \"{0}\"?",
                "invalidFileType": "Fișierul selectat \"{0}\" nu este valid. Tipurile de fișier suportate sunt {1}.",
                "overwriteFile": "Deja există un fișier cu numele \"{0}\" în directorul curent. Doriți să-l suprascrieți?",
                "dropFilesHere": "Trageți fișierele peste această zonă pentru a fi încărcate"
            }
        },
        "Editor": {
            "messages": {
                "bold": "Bold",
                "italic": "Italic",
                "underline": "Subliniază",
                "strikethrough": "Taie",
                "superscript": "Putere",
                "subscript": "Indice",
                "justifyCenter": "Aliniază centru",
                "justifyLeft": "Aliniază stânga",
                "justifyRight": "Aliniază dreapta",
                "justifyFull": "Aliniază stânga-dreapta",
                "insertUnorderedList": "Inserează listă neordonată",
                "insertOrderedList": "Inserează listă ordonată",
                "indent": "Mută spre dreapta",
                "outdent": "Mută spre stanga",
                "createLink": "Inserează link",
                "unlink": "Șterge link",
                "insertImage": "Inserează poză",
                "insertHtml": "Inserează HTML",
                "fontName": "Alege fontul",
                "fontNameInherit": "(font moștenit)",
                "fontSize": "Alege dimensiunea fontului",
                "fontSizeInherit": "(dimensiune moștenită)",
                "formatBlock": "Format",
                "foreColor": "Culoare font",
                "backColor": "Culoare fundal",
                "style": "Stiluri",
                "emptyFolder": "Director gol",
                "uploadFile": "Încarcă",
                "orderBy": "Sortează după:",
                "orderBySize": "Dimensiune",
                "orderByName": "Nume",
                "invalidFileType": "Fișierul \"{0}\" selectat nu este valid. Tipurile de fișier suportate sunt {1}.",
                "deleteFile": "Sunteți sigur că doriți să ștergetți \"{0}\"?",
                "overwriteFile": "Există deja un fișier cu numele \"{0}\" în directorul curent. Doriți să-l suprascrieți?",
                "directoryNotFound": "Nu a fost găsit nici un director cu acest nume.",
                "imageWebAddress": "Adresă web",
                "imageAltText": "Text alternativ",
                "dialogInsert": "Inserează",
                "dialogButtonSeparator": "sau",
                "dialogCancel": "Renunță"
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