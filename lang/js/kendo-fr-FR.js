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
    "Locale": "fr-FR",
    "Description": "French FR",
    "Components": {
        "ColumnMenu": {
            "messages": {
                "sortAscending": "Trier a-z",
                "sortDescending": "Trier z-a",
                "filter": "Filtre",
                "columns": "Colonnes"
            }
        },
        "Groupable": {
            "messages": {
                "empty": "Glissez ici l'entête d'une colonne pour grouper les données"
            }
        },
        "FilterMenu": {
            "messages": {
                "info": "Montrer les éléments dont la valeur:",
                "isTrue": "est vrai",
                "isFalse": "n'est pas vrai",
                "filter": "Filtre",
                "clear": "Effacer",
                "and": "Et",
                "or": "Ou",
                "selectValue": "-Choisissez une valeur-"
            },
            "operators": {
                "string": {
                    "eq": "Est égal à",
                    "neq": "N'est pas égal à",
                    "startswith": "Commence par",
                    "contains": "Contient",
                    "doesnotcontain": "Ne contient pas",
                    "endswith": "Fini par"
                },
                "number": {
                    "eq": "Est égal à",
                    "neq": "N'est pas égal à",
                    "gte": "Est plus grand ou égal à",
                    "gt": "Est plus grand que",
                    "lte": "Est inférieur ou égal à",
                    "lt": "Est inférieur que"
                },
                "date": {
                    "eq": "Est le ",
                    "neq": "N'est pas le",
                    "gte": "Est après ou le",
                    "gt": "Est après le",
                    "lte": "Est avant ou le",
                    "lt": "Est avant le"
                },
                "enums": {
                    "eq": "Est égal à",
                    "neq": "N'est pas égal à"
                }
            }
        },
        "Pager": {
            "messages": {
                "display": "{0} - {1} de {2} éléments",
                "empty": "Aucun élément à afficher",
                "page": "Page",
                "of": "de {0}",
                "itemsPerPage": "éléments par page",
                "first": "Vers la première page",
                "previous": "Vers la page précédente",
                "next": "Vers la page suivante",
                "last": "Vers la dernière page",
                "refresh": "Rafraichir"
            }
        },
        "Validator": {
            "messages": {
                "required": "{0} est obligatoire",
                "pattern": "{0} n'est pas valide",
                "min": "{0} doit être plus grand ou égal à {1}",
                "max": "{0} doit être plus petit ou égal à {1}",
                "step": "{0} n'est pas valide",
                "email": "{0} n'est pas une adresse mail valide",
                "url": "{0} n'est pas un lien (URL) valide",
                "date": "{0} n'est pas une date valide"
            }
        },
        "ImageBrowser": {
            "messages": {
                "uploadFile": "Charger",
                "orderBy": "Trier par",
                "orderByName": "Nom",
                "orderBySize": "Taille",
                "directoryNotFound": "Aucun répértoire de ce nom.",
                "emptyFolder": "Répertoire vide",
                "deleteFile": "Etes-vous sûr de vouloir supprimer \"{0}\"?",
                "invalidFileType": "Le fichier sélectionné \"{0}\" n'est pas valide. Les type fichiers supportés sont {1}.",
                "overwriteFile": "Un fichier du nom \"{0}\" existe déjà dans ce répertoire. Voulez-vous le remplacer?",
                "dropFilesHere": "glissez les fichiers ici pour les charger"
            }
        },
        "Editor": {
            "messages": {
                "bold": "Gras",
                "italic": "Italique",
                "underline": "Sousligner",
                "strikethrough": "Barrer",
                "superscript": "Superscript",
                "subscript": "Subscript",
                "justifyCenter": "Centrer text",
                "justifyLeft": "Aligner text gauche",
                "justifyRight": "Aligner text droite",
                "justifyFull": "Alligner gauche et droite",
                "insertUnorderedList": "Inserer la liste dans le désordre",
                "insertOrderedList": "Inserer la liste dans l'ordre",
                "indent": "Indenter",
                "outdent": "Désindenter",
                "createLink": "Inserer hyperlien",
                "unlink": "Supprimer hyperlien",
                "insertImage": "Inserer image",
                "insertHtml": "Inserer HTML",
                "fontName": "Sélectionner police",
                "fontNameInherit": "(hériter police)",
                "fontSize": "Selectionner taille police",
                "fontSizeInherit": "(hériter taille)",
                "formatBlock": "Format",
                "foreColor": "Couleur",
                "backColor": "Couleur de fond",
                "style": "Styles",
                "emptyFolder": "Répertoire vide",
                "uploadFile": "Charger",
                "orderBy": "Trier par:",
                "orderBySize": "Taille",
                "orderByName": "Nom",
                "invalidFileType": "Le fichier sélectionné \"{0}\" n'est pas valide. Les types de fichiers supportés sont {1}.",
                "deleteFile": "Etes-vous sûr de vouloir supprimer le fichier \"{0}\"?",
                "overwriteFile": "Un fichier du nom \"{0}\" existe déjà dans ce répertoire. Voulez-vous le remplacer?",
                "directoryNotFound": "Aucun répertoire de ce nom.",
                "imageWebAddress": "Adress web",
                "imageAltText": "Texte alternatif",
                "dialogInsert": "Insérer",
                "dialogButtonSeparator": "ou",
                "dialogCancel": "Abandonner"
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