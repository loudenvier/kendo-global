/*
* Kendo UI Localization Project for v2012.3.1114 
* Copyright 2012 Telerik AD. All rights reserved.
* 
* Hebrew US (he-IL) Language Pack
*
* Project home  : https://github.com/loudenvier/kendo-global
* Kendo UI home : http://kendoui.com
* Author        : Adiel Sharabi 
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

kendo.ui.Locale = "עברית (he-IL)";
kendo.ui.ColumnMenu.prototype.options.messages =
  $.extend(kendo.ui.ColumnMenu.prototype.options.messages, {

      /* COLUMN MENU MESSAGES 
       ****************************************************************************/
      sortAscending: "מיון עולה",
      sortDescending: "מיון יורד",
      filter: "סינון",
      columns: "עמודות"
      /***************************************************************************/
  });

kendo.ui.Groupable.prototype.options.messages =
  $.extend(kendo.ui.Groupable.prototype.options.messages, {

      /* GRID GROUP PANEL MESSAGES 
       ****************************************************************************/
      empty: "כדי לקבץ לפי העמודה גרור כותרת העמודה לכאן"
      /***************************************************************************/
  });

kendo.ui.FilterMenu.prototype.options.messages =
  $.extend(kendo.ui.FilterMenu.prototype.options.messages, {

      /* FILTER MENU MESSAGES 
       ***************************************************************************/
      info: "הראה פריטים עם ערך ש", // sets the text on top of the filter menu
      isTrue: "כן",                   // sets the text for "isTrue" radio button
      isFalse: "לא",                 // sets the text for "isFalse" radio button
      filter: "סנן",                    // sets the text for the "Filter" button
      clear: "נקה",                      // sets the text for the "Clear" button
      and: "וגם",
      or: "או",
      selectValue: "-בחר ערך-"
      /***************************************************************************/
  });

kendo.ui.FilterMenu.prototype.options.operators =
  $.extend(kendo.ui.FilterMenu.prototype.options.operators, {

      /* FILTER MENU OPERATORS (for each supported data type) 
       ****************************************************************************/
      string: {
          eq: "שווה ל",
          neq: "לא שווה ל",
          startswith: "מתחיל עם",
          contains: "מכיל",
          doesnotcontain: "לא מכיל",
          endswith: "נגמר ב"
      },
      number: {
          eq: "שווה ל",
          neq: "לא שווה ל",
          gte: "גדול או שווה מ",
          gt: "גדול מ",
          lte: "קטן או שווה ל",
          lt: "קטן מ"
      },
      date: {
          eq: "שןןה ל",
          neq: "לא שווה ל",
          gte: "אחרי או שווה ל",
          gt: "אחרי",
          lte: "לפני או שווה ל",
          lt: "לפני"
      },
      enums: {
          eq: "שווה",
          neq: "לא שווה"
      }
      /***************************************************************************/
  });

kendo.ui.Pager.prototype.options.messages =
  $.extend(kendo.ui.Pager.prototype.options.messages, {

      /* PAGER MESSAGES 
       ****************************************************************************/
      display: "{0} - {1} מתוך {2} פריטים",
      empty: "אין פריטים להצגה",
      page: "דף",
      of: "מתוך {0}",
      itemsPerPage: "פריטים לדף",
      first: "לדף הראשון",
      previous: "לדף הקודם",
      next: "לדף הבא",
      last: "לדף האחרון",
      refresh: "רענן"
      /***************************************************************************/
  });

kendo.ui.Validator.prototype.options.messages =
  $.extend(kendo.ui.Validator.prototype.options.messages, {

      /* VALIDATOR MESSAGES 
       ****************************************************************************/
      required: "{0} נדרש",
      pattern: "{0} לא חוקי",
      min: "{0} אמור להיות גדול או שווה ל {1}",
      max: "{0} אמור להיות קטן או שווה ל {1}",
      step: "{0} לא חוקי",
      email: "{0} לא אימייל חוקי",
      url: "{0} לא חוקי URL",
      date: "{0} תאריך לא חוקי"
      /***************************************************************************/
  });

kendo.ui.ImageBrowser.prototype.options.messages =
  $.extend(kendo.ui.ImageBrowser.prototype.options.messages, {

      /* IMAGE BROWSER MESSAGES 
       ****************************************************************************/
      uploadFile: "העלאה",
      orderBy: "סדר לפי",
      orderByName: "שם",
      orderBySize: "גודל",
      directoryNotFound: "תיקייה בשם זה לא נמצאה.",
      emptyFolder: "תיקייה ריקה",
      deleteFile: 'האם למחוק "{0}"?',
      invalidFileType: "הקובץ הנבחר \"{0}\"לא חוקי, הקבצים הנתמכים הם {1}.",
      overwriteFile: "קובץ בשם \"{0}\" כבר קיים בתיקייה. האם לדרוס אותו?",
      dropFilesHere: "גרור קבצים לכאן כדי להעלות"
      /***************************************************************************/
  });

kendo.ui.Editor.prototype.options.messages =
  $.extend(kendo.ui.Editor.prototype.options.messages, {

      /* EDITOR MESSAGES 
       ****************************************************************************/
      bold: "מודגש",
      italic: "נטוי",
      underline: "קו תחתון",
      strikethrough: "קו חוצה",
      superscript: "ציון עילי",
      subscript: "ציון תחתי",
      justifyCenter: "ממורכז",
      justifyLeft: "ישור לשמאל",
      justifyRight: "ישור לימין",
      justifyFull: "מיושר",
      insertUnorderedList: "Insert unordered list",
      insertOrderedList: "Insert ordered list",
      indent: "Indent",
      outdent: "הזחה",
      createLink: "הכנסת קישור",
      unlink: "הסרת קישור",
      insertImage: "הכנסת תמונה",
      insertHtml: "הכנסת HTML",
      fontName: "בחירת משפחת גופנים",
      fontNameInherit: "(גופן בירושה)",
      fontSize: "בחר גודל פונט",
      fontSizeInherit: "(גודל בירושה)",
      formatBlock: "פורמט",
      foreColor: "צבע",
      backColor: "צבע רקע",
      style: "סגנון",
      emptyFolder: "תיקייה ריקה",
      uploadFile: "העלה",
      orderBy: "מיון לפי:",
      orderBySize: "גודל",
      orderByName: "שם",
      invalidFileType: "הקובץ הנחבר \"{0}\" אינו חוקי. סוגי קבצים נתמכים {1}.",
      deleteFile: 'האם בוודאות ברצונך למחוק "{0}"?',
      overwriteFile: 'קובץ עם השם "{0}" כבר קיים במחיצה הנוכחית. האם לדרוס אותו?',
      directoryNotFound: "תיקייה בשם זה כבר קיימת.",
      imageWebAddress: "כתובת אינטרנט",
      imageAltText: "חלופת טקסט",
      dialogInsert: "הכנסה",
      dialogButtonSeparator: "או",
      dialogCancel: "ביטול"
      /***************************************************************************/
  });