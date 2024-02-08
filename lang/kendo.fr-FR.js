/*
* Kendo UI Localization Project for v2012.3.1114 
* Copyright 2012 Telerik AD. All rights reserved.
* 
* French FR (fr-FR) Language Pack
*
* Project home  : https://github.com/loudenvier/kendo-global
* Kendo UI home : http://kendoui.com
* Author        : Felipe Machado (Loudenvier) 
*                 http://feliperochamachado.com.br/index_en.html
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

kendo.ui.Locale = "French FR (fr-FR)";
kendo.ui.ColumnMenu.prototype.options.messages = 
  $.extend(kendo.ui.ColumnMenu.prototype.options.messages, {

/* COLUMN MENU MESSAGES 
 ****************************************************************************/   
  sortAscending: "Trier a-z",
  sortDescending: "Trier z-a",
  filter: "Filtre",
  columns: "Colonnes"
 /***************************************************************************/   
});

kendo.ui.Groupable.prototype.options.messages = 
  $.extend(kendo.ui.Groupable.prototype.options.messages, {

/* GRID GROUP PANEL MESSAGES 
 ****************************************************************************/   
  empty: "Glissez ici l'entête d'une colonne pour grouper les données"
 /***************************************************************************/   
});

kendo.ui.FilterMenu.prototype.options.messages = 
  $.extend(kendo.ui.FilterMenu.prototype.options.messages, {
  
/* FILTER MENU MESSAGES 
 ***************************************************************************/   
  info: "Montrer les éléments dont la valeur:", // sets the text on top of the filter menu
  isTrue: "est vrai",                   // sets the text for "isTrue" radio button
  isFalse: "n'est pas vrai",                 // sets the text for "isFalse" radio button
  filter: "Filtre",                    // sets the text for the "Filter" button
  clear: "Effacer",                      // sets the text for the "Clear" button
  and: "Et",
  or: "Ou",
  selectValue: "-Choisissez une valeur-"
 /***************************************************************************/   
});
         
kendo.ui.FilterMenu.prototype.options.operators =           
  $.extend(kendo.ui.FilterMenu.prototype.options.operators, {

/* FILTER MENU OPERATORS (for each supported data type) 
 ****************************************************************************/   
  string: {
      eq: "Est égal à",
      neq: "N'est pas égal à",
      startswith: "Commence par",
      contains: "Contient",
      doesnotcontain: "Ne contient pas",
      endswith: "Fini par"
  },
  number: {
      eq: "Est égal à",
      neq: "N'est pas égal à",
      gte: "Est plus grand ou égal à",
      gt: "Est plus grand que",
      lte: "Est inférieur ou égal à",
      lt: "Est inférieur que"
  },
  date: {
      eq: "Est le ",
      neq: "N'est pas le",
      gte: "Est après ou le",
      gt: "Est après le",
      lte: "Est avant ou le",
      lt: "Est avant le"
  },
  enums: {
      eq: "Est égal à",
      neq: "N'est pas égal à",
  }
 /***************************************************************************/   
});

kendo.ui.FilterCell.prototype.options.operators =           
  $.extend(kendo.ui.FilterCell.prototype.options.operators, {

/* FILTER CELLS OPERATORS (for each supported data type) 
 ****************************************************************************/   
  string: {
      eq: "Est égal à",
      neq: "N'est pas égal à",
      startswith: "Commence par",
      contains: "Contient",
      doesnotcontain: "Ne contient pas",
      endswith: "Fini par"
  },
  number: {
      eq: "Est égal à",
      neq: "N'est pas égal à",
      gte: "Est plus grand ou égal à",
      gt: "Est plus grand que",
      lte: "Est inférieur ou égal à",
      lt: "Est inférieur que"
  },
  date: {
      eq: "Est le ",
      neq: "N'est pas le",
      gte: "Est après ou le",
      gt: "Est après le",
      lte: "Est avant ou le",
      lt: "Est avant le"
  },
  enums: {
      eq: "Est égal à",
      neq: "N'est pas égal à",
  }
 /***************************************************************************/   
});

kendo.ui.Pager.prototype.options.messages = 
  $.extend(kendo.ui.Pager.prototype.options.messages, {
  
/* PAGER MESSAGES 
 ****************************************************************************/   
  display: "{0} - {1} de {2} éléments",
  empty: "Aucun élément à afficher",
  page: "Page",
  of: "de {0}",
  itemsPerPage: "éléments par page",
  first: "Vers la première page",
  previous: "Vers la page précédente",
  next: "Vers la page suivante",
  last: "Vers la dernière page",
  refresh: "Rafraichir"
 /***************************************************************************/   
});

kendo.ui.Validator.prototype.options.messages = 
  $.extend(kendo.ui.Validator.prototype.options.messages, {

/* VALIDATOR MESSAGES 
 ****************************************************************************/   
  required: "{0} est obligatoire",
  pattern: "{0} n'est pas valide",
  min: "{0} doit être plus grand ou égal à {1}",
  max: "{0} doit être plus petit ou égal à {1}",
  step: "{0} n'est pas valide",
  email: "{0} n'est pas une adresse mail valide",
  url: "{0} n'est pas un lien (URL) valide",
  date: "{0} n'est pas une date valide"
 /***************************************************************************/   
});

kendo.ui.ImageBrowser.prototype.options.messages = 
  $.extend(kendo.ui.ImageBrowser.prototype.options.messages, {

/* IMAGE BROWSER MESSAGES 
 ****************************************************************************/   
  uploadFile: "Charger",
  orderBy: "Trier par",
  orderByName: "Nom",
  orderBySize: "Taille",
  directoryNotFound: "Aucun répértoire de ce nom.",
  emptyFolder: "Répertoire vide",
  deleteFile: 'Etes-vous sûr de vouloir supprimer "{0}"?',
  invalidFileType: "Le fichier sélectionné \"{0}\" n'est pas valide. Les type fichiers supportés sont {1}.",
  overwriteFile: "Un fichier du nom \"{0}\" existe déjà dans ce répertoire. Voulez-vous le remplacer?",
  dropFilesHere: "glissez les fichiers ici pour les charger"
 /***************************************************************************/   
});

kendo.ui.Editor.prototype.options.messages = 
  $.extend(kendo.ui.Editor.prototype.options.messages, {

/* EDITOR MESSAGES 
 ****************************************************************************/   
  bold: "Gras",
  italic: "Italique",
  underline: "Sousligner",
  strikethrough: "Barrer",
  superscript: "Superscript",
  subscript: "Subscript",
  justifyCenter: "Centrer text",
  justifyLeft: "Aligner text gauche",
  justifyRight: "Aligner text droite",
  justifyFull: "Alligner gauche et droite",
  insertUnorderedList: "Inserer la liste dans le désordre",
  insertOrderedList: "Inserer la liste dans l'ordre",
  indent: "Indenter",
  outdent: "Désindenter",
  createLink: "Inserer hyperlien",
  unlink: "Supprimer hyperlien",
  insertImage: "Inserer image",
  insertHtml: "Inserer HTML",
  fontName: "Sélectionner police",
  fontNameInherit: "(hériter police)",
  fontSize: "Selectionner taille police",
  fontSizeInherit: "(hériter taille)",
  formatBlock: "Format",
  foreColor: "Couleur",
  backColor: "Couleur de fond",
  style: "Styles",
  emptyFolder: "Répertoire vide",
  uploadFile: "Charger",
  orderBy: "Trier par:",
  orderBySize: "Taille",
  orderByName: "Nom",
  invalidFileType: "Le fichier sélectionné \"{0}\" n'est pas valide. Les types de fichiers supportés sont {1}.",
  deleteFile: 'Etes-vous sûr de vouloir supprimer le fichier "{0}"?',
  overwriteFile: 'Un fichier du nom "{0}" existe déjà dans ce répertoire. Voulez-vous le remplacer?',
  directoryNotFound: "Aucun répertoire de ce nom.",
  imageWebAddress: "Adress web",
  imageAltText: "Texte alternatif",
  dialogInsert: "Insérer",
  dialogButtonSeparator: "ou",
  dialogCancel: "Abandonner"
 /***************************************************************************/   
});

/**
 *  PULL REQUEST START : Scheduler french localization
 */

/** Confirmation message for deletion is not in options.messages object  **/
kendo.ui.Scheduler.prototype.options.editable = $.extend(kendo.ui.Scheduler.prototype.options.editable, {
	confirmation: "Êtes-vous sur de vouloir supprimer l'événement ?"
});
kendo.ui.Scheduler.prototype.options.messages = $.extend(kendo.ui.Scheduler.prototype.options.messages, {

	/*******************************************************************
	 * SCHEDULER MESSAGES
	 ******************************************************************/
	"today": "Aujourd'hui",
	"save": "Sauvegarder",
	"cancel": "Annuler",
	"destroy": "Supprimer",
        "event": "Évenement",
        "date": "Date",
        "time": "Horaire",
        "allDay": "Toute la journée",
	"deleteWindowTitle": "Supprimer l'événement",
	"ariaSlotLabel": "Selectionné depuis {0:t} jusqu'à {1:t}",
	"ariaEventLabel": "{0} le {1:D} à {2:t}",
	"views": {
		"day": "Jour",
		"week": "Semaine",
		"workWeek": "Jours travaillés",
		"agenda": "Agenda",
		"month": "Mois"
	},
	"recurrenceMessages": {
		"deleteWindowTitle": "Supprimer un événement récurrent",
		"deleteWindowOccurrence": "Supprimer l'événement courant",
		"deleteWindowSeries": "Supprimer la série",
		"editWindowTitle": "Supprimer l'événement récurrent",
		"editWindowOccurrence": "Modifier l'événement courant",
		"editWindowSeries": "Modifier la série",
            "editRecurring": "Souhaitez-vous modifier seulement l'événement courant ou la série complète ?",
            "deleteRecurring": "Souhaitez-vous supprimer seulement l'événement courant ou la série complète ?"
	},
	"editor": {
		"title": "Titre",
		"start": "Début",
		"end": "Fin",
		"allDayEvent": "Toute la journée",
		"description": "Description",
		"repeat": "Répéter",
		"timezone": " ",
		"startTimezone": "Fuseau horaire début",
		"endTimezone": "Fuseau horaire fin",
		"separateTimezones": "Utiliser des fuseaux horaires différents pour le début et la fin",
		"timezoneEditorTitle": "Fuseaux horaires",
		"timezoneEditorButton": "Fuseau horaire",
		"timezoneTitle": "Fuseaux horaires",
		"noTimezone": "Pas de fuseau horaire",
		"editorTitle": "Évenement"
	},
	 "recurrenceEditor": {
            "frequencies": {
                "never": "Jamais",
                "daily": "Quotidien",
                "weekly": "Hebdomadaire",
                "monthly": "Mensuel",
                "yearly": "Annuel"
            },
            "daily": {
                "repeatEvery": "Répéter tous les: ",
                "interval": " jour(s)"
            },
            "weekly": {
                "interval": " semaines(s)",
                "repeatEvery": "Répéter tous les: ",
                "repeatOn": "Répéter le:",
            },
            "monthly": {
                "repeatEvery": "Répéter tous les: ",
                "repeatOn": "Répéter le:",
                "interval": " mois",
                "day": "Jour "
            },
            "yearly": {
                "repeatEvery": "Répéter tous les: ",
                "repeatOn": "Répéter le:",
                "interval": " année(s)",
                "of": " de "
            },
            "end": {
                "label": "Fin:",
                "never": "Jamais",
                "after": "Après ",
                "occurrence": " occurence(s)",
                "on": "Le "
            },
            "offsetPositions": {
                "first": "premier",
                "second": "second",
                "third": "troisième",
                "fourth": "quatrième",
                "last": "dernier"
            },
            "weekdays": {
                "day": "jour",
                "weekday": "jour de la semaine",
                "weekend": "jour du weekend"
            }
        }
});
/**
 * From here, I extend the option object because of the dateHeaderTemplate property that does not use loaded culture to format the date.
 */
kendo.ui.MultiDayView.prototype.options = $.extend(kendo.ui.MultiDayView.prototype.options, {
	/*******************************************************************
	 * MULTIDAYVIEW(SCHEDULER) MESSAGES
	 ******************************************************************/
	"messages": {
		"allDay": "Toute la journée",
		"showFullDay": "Voir la journée complète",
		"showWorkDay": "Voir les heures travaillées"
	},
	"dateHeaderTemplate": "<span class='k-link k-nav-day'>#=kendo.toString(date, 'ddd dd/MM')#</span>"
	
});
kendo.ui.DayView.prototype.options = $.extend(kendo.ui.DayView.prototype.options, {
	/*******************************************************************
	 * DAYVIEW(SCHEDULER) MESSAGES
	 ******************************************************************/
	"messages" : {
		"allDay": "Toute la journée",
		"showFullDay": "Voir la journée complète",
		"showWorkDay": "Voir les heures travaillées"
	},
	"dateHeaderTemplate" : "<span class='k-link k-nav-day'>#=kendo.toString(date, 'ddd dd/MM')#</span>"
});
kendo.ui.WeekView.prototype.options = $.extend(kendo.ui.WeekView.prototype.options, {
	/*******************************************************************
	 * WEEKVIEW(SCHEDULER) MESSAGES
	 ******************************************************************/
	"messages" : {
		"allDay": "Toute la journée",
		"showFullDay": "Voir la journée complète",
		"showWorkDay": "Voir les heures travaillées"
	},
	"dateHeaderTemplate" : "<span class='k-link k-nav-day'>#=kendo.toString(date, 'ddd dd/MM')#</span>"
});
kendo.ui.WorkWeekView.prototype.options = $.extend(kendo.ui.WorkWeekView.prototype.options, {
	/*******************************************************************
	 * WORKWEEKVIEW(SCHEDULER) MESSAGES
	 ******************************************************************/
	"messages" : {
		"allDay": "Toute la journée",
		"showFullDay": "Voir la journée complète",
		"showWorkDay": "Voir les heures travaillées"
	},
	"dateHeaderTemplate" : "<span class='k-link k-nav-day'>#=kendo.toString(date, 'ddd dd/MM')#</span>"
});
