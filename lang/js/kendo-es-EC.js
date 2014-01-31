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
    "Locale": "es-EC",
    "Description": "Español Ecuatoriano",
    "Components": {
        "ColumnMenu": {
            "messages": {
                "sortAscending": "Ascendente",
                "sortDescending": "Descendente",
                "filter": "Filtro",
                "columns": "Columnas"
            }
        },
        "Groupable": {
            "messages": {
                "empty": "Arrastre el título de una columna aquí para agrupar por esa columna"
            }
        },
        "FilterMenu": {
            "messages": {
                "info": "Título:",
                "filter": "Filtrar",
                "clear": "Limpiar",
                "isTrue": "Es verdadero",
                "isFalse": "Es falso",
                "and": "Y",
                "or": "O",
                "selectValue": "-seleccione un valor-"
            },
            "operators": {
                "string": {
                    "eq": "Es igual",
                    "neq": "Es diferente",
                    "startswith": "Comienza con",
                    "contains": "Contiene",
                    "doesnotcontain": "No contiene",
                    "endswith": "Termina con"
                },
                "number": {
                    "eq": "Es igual",
                    "neq": "Es diferente",
                    "gte": "Es mayor que o igual a",
                    "gt": "Es mayor que",
                    "lte": "Es menor que o igual a",
                    "lt": "Es menor que"
                },
                "date": {
                    "eq": "Es igual",
                    "neq": "Es diferente",
                    "gte": "Es igual o más reciente que",
                    "gt": "Es más reciente que",
                    "lte": "Es igual o más antiguo que",
                    "lt": "Es más antiguo que"
                },
                "enums": {
                    "eq": "Es igual",
                    "neq": "Es diferente"
                }
            }
        },
        "Pager": {
            "messages": {
                "display": "{0} - {1} de {2} ítems",
                "empty": "Nada a mostrar",
                "page": "Página",
                "of": "de {0}",
                "itemsPerPage": "ítems por página",
                "first": "Ir a la primera página",
                "previous": "Ir a la página anterior",
                "next": "Ir a la página seguiente",
                "last": "Ir a la última página",
                "refresh": "Refrescar"
            }
        },
        "Validator": {
            "messages": {
                "required": "{0} es obligatorio",
                "pattern": "{0} no es válido",
                "min": "{0} debe ser mayor o igual a {1}",
                "max": "{0} debe ser menor o igual a {1}",
                "step": "{0} no es válido",
                "email": "{0} no es un correo electrónico válido",
                "url": "{0} no es una URL válida",
                "date": "{0} no es una fecha válida"
            }
        },
        "ImageBrowser": {
            "messages": {
                "uploadFile": "Enviar",
                "orderBy": "Ordenar por",
                "orderByName": "Nombre",
                "orderBySize": "Tamaño",
                "directoryNotFound": "El directorio no fue encontrado.",
                "emptyFolder": "Carpeta vacía",
                "deleteFile": "¿Está seguro que desea eliminar \"{0}\"?",
                "invalidFileType": "El archivo seleccionado \"{0}\" no es válido. Los tipos de archivos soportados son {1}.",
                "overwriteFile": "Un archivo con el nombre \"{0}\" ya existe en la carpeta actual. ¿Desea sobrescribirlo?",
                "dropFilesHere": "coloque los archivos aquí"
            }
        },
        "Editor": {
            "messages": {
                "bold": "Negrita",
                "italic": "Cursiva",
                "underline": "Subrayado",
                "strikethrough": "Tachado",
                "superscript": "Superíndice",
                "subscript": "Subíndice",
                "justifyCenter": "Centrar texto",
                "justifyLeft": "Alinear texto a la izquierda",
                "justifyRight": "Alinear texto a la derecha",
                "justifyFull": "Justificar",
                "insertUnorderedList": "Insertar una lista",
                "insertOrderedList": "Insertar una lista ordenada",
                "indent": "Aumentar sangría",
                "outdent": "Disminuir sangría",
                "createLink": "Crear enlace",
                "unlink": "Remover enlace",
                "insertImage": "Insertar imagen",
                "insertHtml": "Insertar HTML",
                "fontName": "Seleccionar la fuente",
                "fontNameInherit": "(fuente heredada)",
                "fontSize": "Seleccionar tamaño de la fuente",
                "fontSizeInherit": "(tamaño heredado)",
                "formatBlock": "Formatear",
                "foreColor": "Color",
                "backColor": "Color de fondo",
                "style": "Estilos",
                "emptyFolder": "Carpeta vacía",
                "uploadFile": "Enviar",
                "orderBy": "Ordenar por:",
                "orderBySize": "Tamaño",
                "orderByName": "Nombre",
                "invalidFileType": "El archivo seleccionado \"{0}\" no es válido. Los tipos de archivos soportados son {1}.",
                "deleteFile": "¿Está seguro que desea eliminar \"{0}\"?",
                "overwriteFile": "Un archivo con el nombre \"{0}\" ya existe en la carpeta actual. ¿Desea sobrescribirlo?",
                "directoryNotFound": "El directorio no fue encontrado.",
                "imageWebAddress": "Dirección de internet",
                "imageAltText": "Texto alternativo",
                "dialogInsert": "Insertar",
                "dialogButtonSeparator": "o",
                "dialogCancel": "Cancelar"
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