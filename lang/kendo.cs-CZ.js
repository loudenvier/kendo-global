/*
* Kendo UI Localization Project for v2013.3.1119 
* Copyright 2013 Telerik AD. All rights reserved.
* 
* Czech  (cs-CZ) Language Pack
*
* Project home  : https://github.com/loudenvier/kendo-global
* Kendo UI home : http://kendoui.com
* Author        : Venca "SinKien" Beca (sinkien@gmail.com)
*                 
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

kendo.ui.Locale = "Česky (cs-CZ)";
kendo.ui.ColumnMenu.prototype.options.messages =
  $.extend(kendo.ui.ColumnMenu.prototype.options.messages, {

	  /* COLUMN MENU MESSAGES 
	   ****************************************************************************/
	  sortAscending: "Řadit vzestupně",
	  sortDescending: "Řadit sestupně",
	  filter: "Filtr",
	  columns: "Sloupce",
	  done: "Dokončeno",
	  settings: "Nastavení sloupce"
	  /***************************************************************************/
  });

kendo.ui.Groupable.prototype.options.messages =
  $.extend(kendo.ui.Groupable.prototype.options.messages, {

	  /* GRID GROUP PANEL MESSAGES 
	   ****************************************************************************/
	  empty: "Přetáhněte sem záhlaví sloupce, pro seskupení podle tohoto sloupce"
	  /***************************************************************************/
  });

kendo.ui.FilterMenu.prototype.options.messages =
  $.extend(kendo.ui.FilterMenu.prototype.options.messages, {

	  /* FILTER MENU MESSAGES 
	   ***************************************************************************/
	  info: "Zobrazit položky s hodnotami:",        // sets the text on top of the filter menu
	  filter: "Filtr",                              // sets the text for the "Filter" button
	  clear: "Zrušit",                              // sets the text for the "Clear" button
	  // when filtering boolean numbers
	  isTrue: "je pravda",                          // sets the text for "isTrue" radio button
	  isFalse: "není pravda",                       // sets the text for "isFalse" radio button
	  //changes the text of the "And" and "Or" of the filter menu
	  and: "A",
	  or: "Nebo",
	  selectValue: "-Vyberte hodnotu-",
	  operator: "Operátor",
	  value: "Hodnota",
	  cancel: "Zrušit"
	  /***************************************************************************/
  });

kendo.ui.FilterMenu.prototype.options.operators =
  $.extend(kendo.ui.FilterMenu.prototype.options.operators, {

	  /* FILTER MENU OPERATORS (for each supported data type) 
	   ****************************************************************************/
	  string: {
		  eq: "Je rovno",
		  neq: "Není rovno",
		  startswith: "Začíná na",
		  contains: "Obsahuje",
		  doesnotcontain: "Neobsahuje",
		  endswith: "Končí na"
	  },
	  number: {
		  eq: "Je rovno",
		  neq: "Není rovno",
		  gte: "Je větší nebo rovno",
		  gt: "Je větší než",
		  lte: "Je menší nebo rovno",
		  lt: "Je menší než"
	  },
	  date: {
		  eq: "Je stejné jako",
		  neq: "Není stejné jako",
		  gte: "Je stejné nebo později než",
		  gt: "Je později",
		  lte: "Je stejné nebo dříve než",
		  lt: "Je dříve než"
	  },
	  enums: {
		  eq: "je rovno",
		  neq: "není rovno"
	  }
	  /***************************************************************************/
  });

kendo.ui.Pager.prototype.options.messages =
  $.extend(kendo.ui.Pager.prototype.options.messages, {

	  /* PAGER MESSAGES 
	   ****************************************************************************/
	  display: "{0} - {1} z {2} položek",
	  empty: "Žádé položky k zobrazení",
	  page: "Stránka",
	  of: "z {0}",
	  itemsPerPage: "Položek na stránku",
	  first: "Přejít na první stránku",
	  previous: "Přejít na předchozí stránku",
	  next: "Přejít na další stránku",
	  last: "Přejít na poslední stránku",
	  refresh: "Obnovit"
	  /***************************************************************************/
  });

kendo.ui.Validator.prototype.options.messages =
  $.extend(kendo.ui.Validator.prototype.options.messages, {

	  /* VALIDATOR MESSAGES 
	   ****************************************************************************/
	  required: "{0} je povinné",
	  pattern: "{0} není správně vyplněno",
	  min: "{0} by mělo být větší nebo stejné než {1}",
	  max: "{0} by mělo být měnší nebo stejné než {1}",
	  step: "{0} není správně",
	  email: "{0} není správná emailová adresa",
	  url: "{0} není platná adresa URL",
	  date: "{0} není platné datum"
	  /***************************************************************************/
  });

kendo.ui.ImageBrowser.prototype.options.messages =
  $.extend(kendo.ui.ImageBrowser.prototype.options.messages, {

	  /* IMAGE BROWSER MESSAGES 
	   ****************************************************************************/
	  uploadFile: "Nahrát",
	  orderBy: "Uspořádat podle",
	  orderByName: "Jméno",
	  orderBySize: "Velikost",
	  directoryNotFound: "Složka s tímto názvem nebyla nalezena.",
	  emptyFolder: "Prázdná složka",
	  deleteFile: 'Opravdu chcete smazat soubor "{0}"?',
	  invalidFileType: "Vybraný soubor \"{0}\" není platný. Podporované typy jsou {1}.",
	  overwriteFile: "Soubor s názvem \"{0}\" v této složce již existuje. Přejete si jej nahradit ?",
	  dropFilesHere: "Soubory pro nahrání přetáhněte sem.",
	  search: "Hledat"
	  /***************************************************************************/
  });

kendo.ui.Editor.prototype.options.messages =
  $.extend(kendo.ui.Editor.prototype.options.messages, {

	  /* EDITOR MESSAGES 
	   ****************************************************************************/
	  bold: "Tučný",
	  italic: "Kurziva",
	  underline: "Podtržený",
	  strikethrough: "Přeškrtnutý",
	  superscript: "Horní index",
	  subscript: "Dolní index",
	  justifyCenter: "Zarovnat na střed",
	  justifyLeft: "Zarovnat vlevo",
	  justifyRight: "Zarovnat vpravo",
	  justifyFull: "Zarovnat",
	  insertUnorderedList: "Vložit neřazený seznam",
	  insertOrderedList: "Vložit řazený seznam",
	  indent: "Zvětšit odsazení",
	  outdent: "Zmenšit odsazení",
	  createLink: "Vložit odkaz",
	  unlink: "Odstranit odkaz",
	  insertImage: "Vložit obrázek",
	  insertHtml: "Vložit HTML",
	  viewHtml: "Zobrazit HTML",
	  fontName: "Vybrat písmo",
	  fontNameInherit: "(zděděný font)",
	  fontSize: "Vybrat veliost písma",
	  fontSizeInherit: "(zděděná velikost)",
	  formatBlock: "Formát",
	  formatting: "Formát",
	  foreColor: "Barva popředí",
	  backColor: "Barva pozadí",
	  style: "Styly",
	  emptyFolder: "Prázdná složka",
	  uploadFile: "Nahrát",
	  orderBy: "Řadit podle:",
	  orderBySize: "Velikost",
	  orderByName: "Název",
	  invalidFileType: "Vybraný soubor \"{0}\" není platný. Podporované typy jsou {1}.",
	  deleteFile: 'Opravdu chcete smazat soubor "{0}"?',
	  overwriteFile: 'Soubor s názvem "{0}" v této složce již existuje. Přejete si jej nahradit ?',
	  directoryNotFound: "Složka s tímto názvem nebyla nalezena",
	  imageWebAddress: "Webová adresa",
	  imageAltText: "Alternativní text",
	  linkWebAddress: "Webová adresa",
	  linkText: "Text",
	  linkToolTip: "Tooltip",
	  linkOpenInNewWindow: "Otevřít odkaz v novém okně",
	  dialogUpdate: "Aktualizovat",
	  dialogInsert: "Vložit",
	  dialogButtonSeparator: "nebo",
	  dialogCancel: "Zrušit",
	  createTable: "Vytvořit tabulku",
	  addColumnLeft: "Přidat sloupce nalevo",
	  addColumnRight: "Přidat sloupce napravo",
	  addRowAbove: "Přidat řádek nad",
	  addRowBelow: "Přidat řádek pod",
	  deleteRow: "Odstranit řádek",
	  deleteColumn: "Odstranit sloupec"
	  /***************************************************************************/
  });

kendo.ui.NumericTextBox.prototype.options =
	$.extend(kendo.ui.NumericTextBox.prototype.options, {

		/* NUMERIC TEXT BOX OR INTEGER TEXT BOX MESSAGES
		****************************************************************************/
		upArrowText: "Zvětšit hodnotu",
		downArrowText: "Snížit hodnotu"
		/***************************************************************************/
	});

kendo.ui.Upload.prototype.options.localization =
	$.extend(kendo.ui.Upload.prototype.options.localization, {

		/* UPLOAD LOCALIZATION
		 ****************************************************************************/
		select: "Vybrat soubory...",
		cancel: "Zrušit",
		retry: "Opakovat",
		remove: "Odstranit",
		uploadSelectedFiles: "nahrát soubory",
		dropFilesHere: "Soubory pro nahrání přetáhněte sem.",
		statusUploading: "Nahrávání",
		statusUploaded: "Nahráno",
		statusWarning: "Varování",
		statusFailed: "Chyba",
		headerStatusUploading: "Nahrávání...",
		headerStatusUploaded: "Dokončeno"
		/***************************************************************************/
	});