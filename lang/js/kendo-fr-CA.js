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
    "Locale": "fr-CA",
    "Description": "Français Canada",
    "Components": {
        "ColumnMenu": {
            "messages": {
                "sortAscending": "Tri croissant",
                "sortDescending": "Tri décroissant",
                "filter": "Filtrer",
                "columns": "Colonnes"
            }
        },
        "Groupable": {
            "messages": {
                "empty": "Faites glisser un en-tête de colonne et déposez ici pour grouper par cette colonne"
            }
        },
        "FilterMenu": {
            "messages": {
                "info": "Afficher les éléments avec la valeur qui:",
                "isTrue": "est vrai", 
                "isFalse": "est faux", 
                "filter": "Filtrer", 
                "clear": "Effacer", 
                "and": "Et",
                "or": "Ou",
                "selectValue": "-Sélectionner une valeur-"
            },
            "operators": {
                "string": {
                    "eq": "Est égal à",
                    "neq": "N'est pas égal à",
                    "startswith": "Commence par",
                    "contains": "Contient",
                    "doesnotcontain": "Ne contient pas",
                    "endswith": "Se termine par"
                },
                "number": {
                    "eq": "Est égal à",
                    "neq": "N'est pas égal à",
                    "gte": "Est supérieur ou égal à",
                    "gt": "Est supérieur à",
                    "lte": "Est inférieur ou égal à",
                    "lt": "Est inférieur à"
                },
                "date": {
                    "eq": "Est égale à",
                    "neq": "N'est pas égale à",
                    "gte": "Est après ou égale à",
                    "gt": "Est après",
                    "lte": "Est avant ou égale à",
                    "lt": "Est avant"
                },
                "enums": {
                    "eq": "Est égal à",
                    "neq": "N'est pas égal à"
                }
            }
        },
        "Pager": {
            "messages": {
                "display": "{0} - {1} de {2} items",
                "empty": "Aucun élément à afficher",
                "page": "Page",
                "first": "Aller à la première page",
                "previous": "Aller à la page précédente",
                "next": "Aller à la page suivante",
                "last": "Aller à la dernière page",
                "itemsPerPage": "items par page",
                "refresh": "Actualiser"
            }
        },
        "Validator": {
            "messages": {
                "required": "{0} is obligatoire",
                "pattern": "{0} n'est pas valide",
                "min": "{0} doit être supérieur ou égal à {1}",
                "max": "{0} doit être inférieur ou égal à {1}",
                "step": "{0} n'est pas valide",
                "email": "{0} n'est pas un courriel valide",
                "url": "{0} n'est pas une adresse URL valide",
                "date": "{0} n'est pas une date valide"
            }
        },
        "ImageBrowser": {
            "messages": {
                "uploadFile": "Télécharger vers le serveur",
                "orderBy": "Arranger par",
                "orderByName": "Nom",
                "orderBySize": "Taille",
                "directoryNotFound": "Un répertoire avec ce nom n'a pas été trouvé.",
                "emptyFolder": "Répertoire vide",
                "deleteFile": "Êtes-vous sûr de vouloir supprimer \"{0}\"?",
                "invalidFileType": "Le fichier sélectionné \"{0}\" n'est pas valide. Les types de fichiers valides sont {1}.",
                "overwriteFile": "Un fichier portant le nom \"{0}\" est déjà présent dans le répertoire courant. Voulez-vous le remplacer?",
                "dropFilesHere": "déposer des fichiers à télécharger vers le serveur ici"
            }
        },
        "Editor": {
            "messages": {
                "bold": "Gras",
                "italic": "Italique",
                "underline": "Souligné",
                "strikethrough": "Barré",
                "superscript": "Exposant",
                "subscript": "Indice",
                "justifyCenter": "Centrer",
                "justifyLeft": "Aligner le texte à gauche",
                "justifyRight": "Aligner le texte à droite",
                "justifyFull": "Justifier",
                "insertUnorderedList": "Insérer une liste non ordonnée",
                "insertOrderedList": "Insérer une liste ordonnée",
                "indent": "Augmenter le retrait",
                "outdent": "Diminuer le retrait",
                "createLink": "Insérer un lien hypertexte",
                "unlink": "Supprimer un lien hypertexte",
                "insertImage": "Insérer une image",
                "insertHtml": "Insérer du HTML",
                "fontName": "Sélectionner la famille de police",
                "fontNameInherit": "(police héritée)",
                "fontSize": "Sélectionner la taille de police",
                "fontSizeInherit": "(taille héritée)",
                "formatBlock": "Formatter",
                "foreColor": "Couleur",
                "backColor": "Couleur de fond",
                "style": "Styles",
                "emptyFolder": "Répertoire vide",
                "uploadFile": "Télécharger vers le serveur",
                "orderBy": "Arranger par:",
                "orderBySize": "Taille",
                "orderByName": "Nom",
                "invalidFileType": "Le fichier sélectionné \"{0}\" n'est pas valide. Les types de fichiers valides sont {1}.",
                "deleteFile": "Êtes-vous sûr de vouloir supprimer \"{0}\"?",
                "overwriteFile": "Un fichier portant le nom \"{0}\" est déjà présent dans le répertoire courant. Voulez-vous le remplacer?",
                "directoryNotFound": "Un répertoire avec ce nom n'a pas été trouvé.",
                "imageWebAddress": "Adresse Web",
                "imageAltText": "Texte alternatif",
                "dialogInsert": "Insérer",
                "dialogButtonSeparator": "ou",
                "dialogCancel": "Annuler"
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