/*
* Kendo UI Localization Project for v2012.3.1114 
* Copyright 2012 Telerik AD. All rights reserved.
* 
* Croatian Language Pack (hr-HR)
*
* Project home  : https://github.com/loudenvier/kendo-global
* Kendo UI home : http://kendoui.com
* Author        : nixa333
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

kendo.ui.Locale = "Croatian HR (hr-HR)";
kendo.ui.ColumnMenu.prototype.options.messages = 
  $.extend(kendo.ui.ColumnMenu.prototype.options.messages, {

/* COLUMN MENU MESSAGES 
 ****************************************************************************/   
  sortAscending: "Poredaj Uzlazno",
  sortDescending: "Poredaj silazno",
  filter: "Filtriraj",
  columns: "Stupci"
 /***************************************************************************/   
});

kendo.ui.Groupable.prototype.options.messages = 
  $.extend(kendo.ui.Groupable.prototype.options.messages, {

/* GRID GROUP PANEL MESSAGES 
 ****************************************************************************/   
  empty: "Dovucite zaglavlje kolone i ispustite ga ovdje kako biste grupirali po toj koloni"
 /***************************************************************************/   
});

kendo.ui.FilterMenu.prototype.options.messages = 
  $.extend(kendo.ui.FilterMenu.prototype.options.messages, {
  
/* FILTER MENU MESSAGES 
 ***************************************************************************/   
  info: "Prika�i objekte �ija vrijednost:", // sets the text on top of the filter menu
  isTrue: "istinita",                   // sets the text for "isTrue" radio button
  isFalse: "la�na",                 // sets the text for "isFalse" radio button
  filter: "Filtriraj",                    // sets the text for the "Filter" button
  clear: "Poni�ti",                      // sets the text for the "Clear" button
  and: "I",
  or: "Ili",
  selectValue: "-Odaberite vrijednost-"
 /***************************************************************************/   
});
         
kendo.ui.FilterMenu.prototype.options.operators =           
  $.extend(kendo.ui.FilterMenu.prototype.options.operators, {

/* FILTER MENU OPERATORS (for each supported data type) 
 ****************************************************************************/   
  string: {
      eq: "Je jednaka",
      neq: "Nije jednaka",
      startswith: "Po�inje s",
      contains: "Sadr�i",
      doesnotcontain: "Ne sadr�i",
      endswith: "Zavr�ava s"
  },
  number: {
      eq: "Je jednaka",
      neq: "Nije jednaka",
      gte: "Je ve�a ili jednaka",
      gt: "Je ve�a",
      lte: "Je manja ili jednaka",
      lt: "Je manja"
  },
  date: {
      eq: "Je jednaka",
      neq: "Nije jednaka",
      gte: "Je nakon ili jednaka",
      gt: "Je nakon",
      lte: "Je prije ili jednaka",
      lt: "Je prije"
  },
  enums: {
      eq: "Je jednaka",
      neq: "Nije jednaka"
  }
 /***************************************************************************/   
});

kendo.ui.Pager.prototype.options.messages = 
  $.extend(kendo.ui.Pager.prototype.options.messages, {
  
/* PAGER MESSAGES 
 ****************************************************************************/   
  display: "{0} - {1} od {2} zapisa",
  empty: "Nema zapisa za prikaz",
  page: "Stranica",
  of: "od {0}",
  itemsPerPage: "zapisa po stranici",
  first: "Idi na prvu stranicu",
  previous: "Idi na prethodnu stranicu",
  next: "Idi na sljede�u stranicu",
  last: "Idi na posljednju stranicu",
  refresh: "Osvje�i"
 /***************************************************************************/   
});

kendo.ui.Validator.prototype.options.messages = 
  $.extend(kendo.ui.Validator.prototype.options.messages, {

/* VALIDATOR MESSAGES 
 ****************************************************************************/   
  required: "{0} je obavezno",
  pattern: "{0} nije valjano",
  min: "{0} treba biti ve�i ili jednak {1}",
  max: "{0} treba biti manji ili jednak {1}",
  step: "{0} nije valjano",
  email: "{0} nije valjana e-mail adresa",
  url: "{0} nije valjani URL",
  date: "{0} nije valjani datum"
 /***************************************************************************/   
});

kendo.ui.ImageBrowser.prototype.options.messages = 
  $.extend(kendo.ui.ImageBrowser.prototype.options.messages, {

/* IMAGE BROWSER MESSAGES 
 ****************************************************************************/   
  uploadFile: "U�itaj",
  orderBy: "Poredaj po",
  orderByName: "Ime",
  orderBySize: "Veli�ina",
  directoryNotFound: "Mapa s ovim imenom nije prona�ena.",
  emptyFolder: "Prazna Mapa",
  deleteFile: 'Jeste li sigurni da �elite obrisati "{0}"?',
  invalidFileType: "Odabrana datoteka \"{0}\" nije valjana. Podr�ani tipovi datoteka su {1}.",
  overwriteFile: "Datoteka s imenom \"{0}\" ve� postoji u trenutnoj mapi. �elite li ju prebrisati?",
  dropFilesHere: "ispustite datoteke za u�itavanje"
 /***************************************************************************/   
});

kendo.ui.Editor.prototype.options.messages = 
  $.extend(kendo.ui.Editor.prototype.options.messages, {

/* EDITOR MESSAGES 
 ****************************************************************************/   
  bold: "Podebljano",
  italic: "Nako�eno",
  underline: "Podcrtano",
  strikethrough: "Crta kroz",
  superscript: "Natpis",
  subscript: "Potpis",
  justifyCenter: "Centriraj tekst",
  justifyLeft: "Poravnaj tekst lijevo",
  justifyRight: "Poravnaj tekst desno",
  justifyFull: "Prilagodi",
  insertUnorderedList: "Umetni neporedanu listu ",
  insertOrderedList: "Umetni poredanu listu",
  indent: "Uvuci",
  outdent: "Izvuci",
  createLink: "Umetni vezu",
  unlink: "Ukloni vezu",
  insertImage: "Umetni sliku",
  insertHtml: "Umetni HTML",
  fontName: "Odaberite font",
  fontNameInherit: "(naslje�eni font)",
  fontSize: "Odaberite veli�inu slova",
  fontSizeInherit: "(naslje�ena veli�ina)",
  formatBlock: "Format",
  foreColor: "Boja",
  backColor: "Pozadinska boja",
  style: "Stilovi",
  emptyFolder: "Prazna Mapa",
  uploadFile: "U�itaj",
  orderBy: "poredaj po:",
  orderBySize: "Veli�ina",
  orderByName: "ime",
  invalidFileType: "Odabrana datoteka \"{0}\" nije valjana. Podr�ani tipovi datoteka su {1}.",
  deleteFile: 'Jeste li sigurni da �elite izbrisati "{0}"?',
  overwriteFile: 'Datoteka s imenom \"{0}\" ve� postoji u trenutnoj mapi. �elite li ju prebrisati?',
  directoryNotFound: "Mapa s ovim imenom nije prona�ena.",
  imageWebAddress: "Web adresa",
  imageAltText: "Alternativni tekst",
  dialogInsert: "Umetni",
  dialogButtonSeparator: "ili",
  dialogCancel: "Odustani"
 /***************************************************************************/   
});
