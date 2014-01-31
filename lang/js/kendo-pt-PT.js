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
    "Locale": "pt-PT",
    "Description": "Português",
    "Components": {
        "ColumnMenu": {
            "messages": {
                "sortAscending": "Ascendente",
                "sortDescending": "Descendente",
                "filter": "Filtro",
                "columns": "Colunas"
            }
        },
        "Groupable": {
            "messages": {
                "empty": "Arraste colunas aqui para agrupar pelas mesmas"
            }
        },
        "FilterMenu": {
            "messages": {
                "info": "Título:",
                "filter": "Filtrar",
                "clear": "Limpar",
                "isTrue": "Verdadeiro",
                "isFalse": "Falso",
                "and": "E",
                "or": "Ou",
                "selectValue": "-selecione um valor-"
            },
            "operators": {
                "string": {
                    "eq": "Igual a",
                    "neq": "Diferente de",
                    "startswith": "Começa com",
                    "contains": "Contém",
                    "doesnotcontain": "Não contém",
                    "endswith": "Termina com"
                },
                "number": {
                    "eq": "Igual a",
                    "neq": "Diferente de",
                    "gte": "Maior ou igual a",
                    "gt": "Maior que",
                    "lte": "Menor ou igual a",
                    "lt": "Menor que"
                },
                "date": {
                    "eq": "Igual a",
                    "neq": "Diferente de",
                    "gte": "Igual ou mais recente que",
                    "gt": "Mais recente que",
                    "lte": "Igual ou mais antigo que",
                    "lt": "Mais antigo que"
                },
                "enums": {
                    "eq": "Igual a",
                    "neq": "Diferente de"
                }
            }
        },
        "Pager": {
            "messages": {
                "display": "{0} - {1} de {2} itens",
                "empty": "Nada a exibir",
                "page": "Página",
                "of": "de {0}",
                "itemsPerPage": "itens por página",
                "first": "Ir para a primeira página",
                "previous": "Ir para a página anterior",
                "next": "Ir para a página seguinte",
                "last": "Ir para a última página",
                "refresh": "Atualizar"
            }
        },
        "Validator": {
            "messages": {
                "required": "{0} é obrigatório",
                "pattern": "{0} não é válido",
                "min": "{0} deve ser maior ou igual a {1}",
                "max": "{0} deve ser menor ou igual a {1}",
                "step": "{0} não é válido",
                "email": "{0} não é um email válido",
                "url": "{0} não é uma URL válida",
                "date": "{0} não é uma data válida"
            }
        },
        "ImageBrowser": {
            "messages": {
                "uploadFile": "Enviar",
                "orderBy": "Ordenar por",
                "orderByName": "Nome",
                "orderBySize": "Tamanho",
                "directoryNotFound": "Uma pasta com este nome não foi encontrada.",
                "emptyFolder": "Pasta Vazia",
                "deleteFile": "Tem a certeza que deseja eliminar \"{0}\"?",
                "invalidFileType": "O arquivo selecionado \"{0}\" não é válido. Os tipos de arquivo suportados são {1}.",
                "overwriteFile": "Um arquivo com o nome \"{0}\" já existe na pasta atual. Deseja sobrepor?",
                "dropFilesHere": "coloque aqui os arquivos para enviá-los"
            }
        },
        "Editor": {
            "messages": {
                "bold": "Negrito",
                "italic": "Itálico",
                "underline": "Sublinhado",
                "strikethrough": "Rasurado",
                "superscript": "Sobrescrito",
                "subscript": "Subscrito",
                "justifyCenter": "Centrar texto",
                "justifyLeft": "Alinhar texto à esquerda",
                "justifyRight": "Alinhar texto à direita",
                "justifyFull": "Justificar",
                "insertUnorderedList": "Inserir lista não ordenada",
                "insertOrderedList": "Inserir lista ordenada",
                "indent": "Aumentar recuo",
                "outdent": "Diminuir recuo",
                "createLink": "Inserir link",
                "unlink": "Remover link",
                "insertImage": "Inserir imagem",
                "insertHtml": "Inserir HTML",
                "fontName": "Selecionar família da fonte",
                "fontNameInherit": "(fonte herdada)",
                "fontSize": "Selecionar tamanho da fonte",
                "fontSizeInherit": "(tamanho herdado)",
                "formatBlock": "Formatar",
                "foreColor": "Cor",
                "backColor": "Cor de fundo",
                "style": "Estilos",
                "emptyFolder": "Pasta Vazia",
                "uploadFile": "Enviar",
                "orderBy": "Ordenar por:",
                "orderBySize": "Tamanho",
                "orderByName": "Nome",
                "invalidFileType": "O arquivo selecionado \"{0}\" não é válido. Os arquivos suportados são {1}.",
                "deleteFile": "Tem a certeza que deseja eliminar \"{0}\"?",
                "overwriteFile": "Um arquivo com o nome \"{0}\" já existe na pasta atual. Deseja sobrepor?",
                "directoryNotFound": "Uma pasta com este nome não foi encontrada.",
                "imageWebAddress": "Endereço internet",
                "imageAltText": "Texto alternativo",
                "dialogInsert": "Inserir",
                "dialogButtonSeparator": "ou",
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