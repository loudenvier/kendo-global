/*
* Kendo UI Localization Project for v2013.3.1119 
* Copyright 2012 Telerik AD. All rights reserved.
* 
* English US (en-US) Language Pack
*
* Project home  : https://github.com/loudenvier/kendo-global
* Kendo UI home : http://kendoui.com
* Author        : pikkukoo 
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

kendo.ui.Locale = "Finnish (fi-FI)";
kendo.ui.ColumnMenu.prototype.options.messages = 
  $.extend(kendo.ui.ColumnMenu.prototype.options.messages, {

/* COLUMN MENU MESSAGES 
 ****************************************************************************/   
  sortAscending: "Järjestä nousevasti",
  sortDescending: "Järjestä laskevasti",
  filter: "Suodata",
  columns: "Sarakkeet"
 /***************************************************************************/   
});

kendo.ui.Groupable.prototype.options.messages = 
  $.extend(kendo.ui.Groupable.prototype.options.messages, {

/* GRID GROUP PANEL MESSAGES 
 ****************************************************************************/   
  empty: "Vedä otsikko tähän ryhmitelläksesi sarakkeen mukaan"
 /***************************************************************************/   
});

kendo.ui.FilterMenu.prototype.options.messages = 
  $.extend(kendo.ui.FilterMenu.prototype.options.messages, {
  
/* FILTER MENU MESSAGES 
 ***************************************************************************/   
  info: "Näytä tulokset, jotka:", // sets the text on top of the filter menu
  isTrue: "Valittu",                   // sets the text for "isTrue" radio button
  isFalse: "Ei valittu",                 // sets the text for "isFalse" radio button
  filter: "Suodata",                    // sets the text for the "Filter" button
  clear: "Tyhjennä",                      // sets the text for the "Clear" button
  and: "Ja ",
  or: "Tai",
  selectValue: "-valitse-",
  operator: "Operaattori",
  value: "Arvo",
  cancel: "Peruuta"

 /***************************************************************************/   
});
         
kendo.ui.FilterMenu.prototype.options.operators =           
  $.extend(kendo.ui.FilterMenu.prototype.options.operators, {

/* FILTER MENU OPERATORS (for each supported data type) 
 ****************************************************************************/   
  string: {
      eq: "On sama kuin",
      neq: "On eri kuin",
      startswith: "Alkaa",
      contains: "Sisältää",
      doesnotcontain: "Ei sisällä",
      endswith: "Päättyy"
  },
  number: {
      eq: "On yhtäsuuri kuin",
      neq: "On erisuuri kuin",
      gte: "On suurempi tai yhtäsuuri kuin",
      gt: "On suurempi kuin",
      lte: "On pienempi tai yhtäsuuri kuin",
      lt: "On pienempi kuin"
  },
  date: {
      eq: "On sama kuin",
      neq: "On eri kuin",
      gte: "On sama tai myöhemmin kuin",
      gt: "On myöhemmin kuin",
      lte: "On sama tai aikaisempi kuin",
      lt: "On aikaisempi kuin"
  },
  enums: {
      eq: "On sama kuin",
      neq: "On eri kuin"
  }
 /***************************************************************************/   
});

kendo.ui.Pager.prototype.options.messages = 
  $.extend(kendo.ui.Pager.prototype.options.messages, {
  
/* PAGER MESSAGES 
 ****************************************************************************/   
  display: "{0} - {1} / {2}",
  empty: "Ei tuloksia",
  page: "Sivu",
  of: "/ {0}",
  itemsPerPage: "tulosta per sivu",
  first: "Siirry ensimmäiselle sivulle",
  previous: "Siirry edelliselle sivulle",
  next: "Siirry seuraavalle sivulle",
  last: "Siirry viimeiselle sivulle",
  refresh: "Päivitä"
 /***************************************************************************/   
});

kendo.ui.Validator.prototype.options.messages = 
  $.extend(kendo.ui.Validator.prototype.options.messages, {

/* VALIDATOR MESSAGES 
 ****************************************************************************/   
  required: "{0} on pakollinen",
  pattern: "{0} on virheellinen",
  min: "{0} tulee olla suurempi tai yhtäsuuri kuin {1}",
  max: "{0} tulee olla pienempi tai yhtäsuuri kuin {1}",
  step: "{0} on virheellinen",
  email: "{0} on virheellinen sähköpostiosoite",
  url: "{0} on virheellinen URL",
  date: "{0} on virheellinen päivämäärä"
 /***************************************************************************/   
});

kendo.ui.ImageBrowser.prototype.options.messages = 
  $.extend(kendo.ui.ImageBrowser.prototype.options.messages, {

/* IMAGE BROWSER MESSAGES 
 ****************************************************************************/   
  uploadFile: "Lähetä",
  orderBy: "Järjestä",
  orderByName: "Nimi",
  orderBySize: "Koko",
  directoryNotFound: "Hakemistoa ei löytynyt.",
  emptyFolder: "Tyhjä hakemisto",
  deleteFile: 'Haluatko varmasti poistaa tiedoston "{0}"?',
  invalidFileType: "Tiedosto \"{0}\" on virheellinen. Tuetut tiedostotyypit ovat {1}.",
  overwriteFile: "Tiedosto \"{0}\" on jo olemassa. Haluatko ylikirjoittaa tiedoston?",
  dropFilesHere: "Lähetä vetämällä tiedostot tähän",
  search: "Selaa"
 /***************************************************************************/   
});

kendo.ui.Editor.prototype.options.messages = 
  $.extend(kendo.ui.Editor.prototype.options.messages, {

/* EDITOR MESSAGES 
 ****************************************************************************/   
  bold: "Lihavointi",
  italic: "Kursiivi",
  underline: "Alleviivaus",
  strikethrough: "Yliviivaus",
  superscript: "Yläindeksi",
  subscript: "Alaindeksi",
  justifyCenter: "Keskitä",
  justifyLeft: "Tasaa vasemmalle",
  justifyRight: "Tasaa oikealle",
  justifyFull: "Tasaa molemmat reunat",
  insertUnorderedList: "Lisää luettelo",
  insertOrderedList: "Lisää numeroitu luettelo",
  indent: "Suurenna sisennystä",
  outdent: "Pienennä sisennystä",
  createLink: "Lisää hyperlinkki",
  unlink: "Poista hyperlinkki",
  insertImage: "Lisää kuva",
  insertHtml: "Lisää HTML",
  fontName: "Fontti",
  fontNameInherit: "(peritty fontti)",
  fontSize: "Fonttikoko",
  fontSizeInherit: "(peritty koko)",
  formatBlock: "Muotoilu",
  foreColor: "Väri",
  backColor: "Taustaväri",
  style: "Tyylit",
  emptyFolder: "Tyhjä hakemisto",
  uploadFile: "Lähetä",
  orderBy: "Järjestä:",
  orderBySize: "Koko",
  orderByName: "Nimi",
  invalidFileType: "Tiedosto \"{0}\" on virheellinen. Tuetut tiedostotyypit ovat {1}.",
  deleteFile: 'Haluatko varmasti poistaa tiedoston "{0}"?',
  overwriteFile: 'Tiedosto "{0}" on jo olemassa. Haluatko ylikirjoittaa tiedoston?',
  directoryNotFound: "Hakemistoa ei löytynyt.",
  imageWebAddress: "Web-osoite",
  imageAltText: "Vaihtoehtoinen teksti",
  linkWebAddress: "Web-osoite",
  linkText: "Teksti",
  linkToolTip: "Tooltip",
  linkOpenInNewWindow: "Avaa linkki uuteen ikkunaan",
  dialogUpdate: "Päivitä",
  dialogInsert: "Lisää",
  dialogButtonSeparator: "tai",
  dialogCancel: "Peruuta",
  createTable: "Luo taulukko",
  addColumnLeft: "Lisää sarake vasemmalle",
  addColumnRight: "Lisää sarake oikealle",
  addRowAbove: "Lisää rivi yläpuolelle",
  addRowBelow: "Lisää rivi alapuolelle",
  deleteRow: "Poista rivi",
  deleteColumn: "Poista sarake"  
 /***************************************************************************/   
});

kendo.ui.NumericTextBox.prototype.options =
	$.extend(kendo.ui.NumericTextBox.prototype.options, {

		/* NUMERIC TEXT BOX OR INTEGER TEXT BOX MESSAGES
		****************************************************************************/
		upArrowText: "Suurenna arvoa",
		downArrowText: "Pienennä arvoa"
		/***************************************************************************/
});

kendo.ui.Upload.prototype.options.localization =
	$.extend(kendo.ui.Upload.prototype.options.localization, {

	    /* UPLOAD LOCALIZATION
         ****************************************************************************/
	    select: "Valitse tiedostoja...",
	    cancel: "Peruuta",
	    retry: "Yritä uudelleen",
	    remove: "Poista",
	    uploadSelectedFiles: "Lähetä tiedostot",
	    dropFilesHere: "lähetä tiedostot vetämällä ne tähän",
	    statusUploading: "lähetetään",
	    statusUploaded: "lähetetty",
	    statusWarning: "varoitus",
	    statusFailed: "epäonnistui",
	    headerStatusUploading: "Lähetetään...",
	    headerStatusUploaded: "Valmis"
	    /***************************************************************************/
	});
