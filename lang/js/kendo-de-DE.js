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
    "Locale": "de-DE",
    "Description": "Deutschland",
    "Components": {
        "ColumnMenu": {
            "messages": {
                "sortAscending": "Aufsteigend",
                "sortDescending": "Absteigend",
                "filter": "Filter",
                "columns": "Spalten"
            }
        },
        "Groupable": {
            "messages": {
                "empty": "Keine Einträge vorhanden"
            }
        },
        "FilterMenu": {
            "messages": {
                "info": "Zeige Einträge mit",
                "filter": "Filtern",
                "clear": "Löschen",
                "isTrue": "Ist wahr",
                "isFalse": "Ist falsch",
                "and": "UND",
                "or": "ODER",
                "selectValue": "-Wählen Sie einen Wert-"
            },
            "operators": {
                "string": {
                    "eq": "Ist gleich",
                    "neq": "Ist ungleich",
                    "startswith": "Beginnt mit",
                    "contains": "Enthält",
                    "doesnotcontain": "Enthält nicht",
                    "endswith": "Endet mit"
                },
                "number": {
                    "eq": "Ist gleich",
                    "neq": "Ist ungleich",
                    "gte": "Ist größer oder gleich",
                    "gt": "Ist größer",
                    "lte": "Ist kleiner oder gleich",
                    "lt": "Ist kleiner"
                },
                "date": {
                    "eq": "Ist gleich",
                    "neq": "Ist ungleich",
                    "gte": "Ist größer oder gleich",
                    "gt": "Ist größer",
                    "lte": "Ist kleiner oder gleich",
                    "lt": "Ist kleiner"
                },
                "enums": {
                    "eq": "Ist gleich",
                    "neq": "Ist ungleich"
                }
            }
        },
        "Pager": {
            "messages": {
                "display": "{0} - {1} von {2} Einträgen",
                "empty": "Keine Einträge",
                "page": "Seite",
                "of": "von {0}",
                "itemsPerPage": "Einträge pro Seite",
                "first": "Erste Seite",
                "previous": "Vorherige Seite",
                "next": "Nächste Seite",
                "last": "Letzte Seite",
                "refresh": "Aktualisieren"
            }
        },
        "Validator": {
            "messages": {
                "required": "{0} ist notwendig",
                "pattern": "{0} ist ungültig",
                "min": "{0} muss größer oder gleich sein als {1}",
                "max": "{0} muss kleiner oder gleich sein als {1}",
                "step": "{0} ist ungültig",
                "email": "{0} ist keine gültige E-Mail",
                "url": "{0} ist keine gültige URL",
                "date": "{0} ist kein gültiges Datum"
            }
        },
        "ImageBrowser": {
            "messages": {
                "uploadFile": "Senden",
                "orderBy": "Sortieren nach",
                "orderByName": "Name",
                "orderBySize": "Größe",
                "directoryNotFound": "Das Verzeichnis wurde nicht gefunden.",
                "emptyFolder": "Leeres Verzeichnis",
                "deleteFile": "Sind Sie sicher, dass Sie \"{0}\" wirklich löschen wollen?",
                "invalidFileType": "Die ausgewählte Datei \"{0}\" ist ungültig. Unterstützte Dateitypen sind {1}.",
                "overwriteFile": "Eine Datei namens \"{0}\" existiert bereits im aktuellen Ordner. Überschreiben?",
                "dropFilesHere": "Dateien hier verschieben"
            }
        },
        "Editor": {
            "messages": {
                "bold": "Fett",
                "italic": "Kursiv",
                "underline": "Unterstrichen",
                "strikethrough": "Durchgestrichen",
                "superscript": "Hochgestellt",
                "subscript": "Tiefgestellt",
                "justifyCenter": "Zentrieren",
                "justifyLeft": "Linksbündig",
                "justifyRight": "Rechtsbündig",
                "justifyFull": "Blocksatz",
                "insertUnorderedList": "Unsortierte Liste einfügen",
                "insertOrderedList": "Sortierte Liste einfügen",
                "indent": "Einzug vergrößern",
                "outdent": "Einzug verkleinern",
                "createLink": "Link erstellen",
                "unlink": "Link entfernen",
                "insertImage": "Bild einfügen",
                "insertHtml": "HTML einfügen",
                "fontName": "Schriftart",
                "fontNameInherit": "(Schriftart vererben)",
                "fontSize": "Wählen Si die Schrifgröße",
                "fontSizeInherit": "(Schriftgröße vererben)",
                "formatBlock": "Format",
                "foreColor": "Farbe",
                "backColor": "Hintergrundfarbe",
                "style": "Stil",
                "emptyFolder": "Leeres Verzeichnis",
                "uploadFile": "Senden",
                "orderBy": "Sortieren nach:",
                "orderBySize": "Größe",
                "orderByName": "Name",
                "invalidFileType": "Die ausgewählte Datei \"{0}\" ist ungültig. Unterstützte Dateitypen sind {1}.",
                "deleteFile": "Sind Sie sicher, dass Sie \"{0}\" wirklich löschen wollen?",
                "overwriteFile": "Eine Datei namens \"{0}\" existiert bereits im aktuellen Ordner. Überschreiben?",
                "directoryNotFound": "Das Verzeichnis wurde nicht gefunden.",
                "imageWebAddress": "Internet-Adresse",
                "imageAltText": "Alternativer Text",
                "dialogInsert": "Einfügen",
                "dialogButtonSeparator": "oder",
                "dialogCancel": "Abbrechen"
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