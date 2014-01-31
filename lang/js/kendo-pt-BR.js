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
    "Locale": "pt-BR",
    "Description": "Português Brasileiro",
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
                "isTrue": "É verdadeiro",
                "isFalse": "É falso",
                "and": "E",
                "or": "Ou",
                "selectValue": "-selecione um valor-"
            },
            "operators": {
                "string": {
                    "eq": "É igual",
                    "neq": "É diferente",
                    "startswith": "Começa com",
                    "contains": "Comtém",
                    "doesnotcontain": "Não contém",
                    "endswith": "Termina com"
                },
                "number": {
                    "eq": "É igual",
                    "neq": "É diferente",
                    "gte": "É maior que ou igual a",
                    "gt": "É maior que",
                    "lte": "É menor que ou igual a",
                    "lt": "É menor que"
                },
                "date": {
                    "eq": "É igual",
                    "neq": "É diferente",
                    "gte": "É igual ou mais recente que",
                    "gt": "É mais recente que",
                    "lte": "É igual ou mais antigo que",
                    "lt": "É mais antigo que"
                },
                "enums": {
                    "eq": "É igual",
                    "neq": "É diferente"
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
                "first": "Vai para primeira página",
                "previous": "Vai para página anterior",
                "next": "Vai para página seguinte",
                "last": "Vai para última página",
                "refresh": "Atualiza"
            }
        },
        "Validator": {
            "messages": {
                "required": "{0} é obrigatório",
                "pattern": "{0} não é válido",
                "min": "{0} deve ser maior que ou igual a {1}",
                "max": "{0} deve ser menor que ou igual a {1}",
                "step": "{0} não é válido",
                "email": "{0} não é um email válido",
                "url": "{0} não é uma URL válida",
                "date": "{0} não é uma data válida"
            }
        },
        "ImageBrowser": {
            "messages": {
                "uploadFile": "Enviar",
                "orderBy": "Classificar por",
                "orderByName": "Nome",
                "orderBySize": "Tamanho",
                "directoryNotFound": "Uma pasta com este nome não foi encontrada.",
                "emptyFolder": "Pasta Vazia",
                "deleteFile": "Tem certeza que deseja excluir \"{0}\"?",
                "invalidFileType": "O arquivo selecionado \"{0}\" não é válido. Os tipos de arquivo suportados são {1}.",
                "overwriteFile": "Um arquivo com o nome \"{0}\" já existe na pasta atual. Você quer sobrescrevê-lo?",
                "dropFilesHere": "solte arquivos aqui para enviá-los"
            }
        },
        "Editor": {
            "messages": {
                "bold": "Negrito",
                "italic": "Itálico",
                "underline": "Sublinhado",
                "strikethrough": "Tachado",
                "superscript": "Sobrescrito",
                "subscript": "Subscrito",
                "justifyCenter": "Centralizar texto",
                "justifyLeft": "Alinhar texto à esquerda",
                "justifyRight": "Alinhar texto à direita",
                "justifyFull": "Justificar",
                "insertUnorderedList": "Inserir list não ordenada",
                "insertOrderedList": "Iserir lista ordenada",
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
                "orderBy": "Classificar por:",
                "orderBySize": "Tamanho",
                "orderByName": "Nome",
                "invalidFileType": "O arquivo selecionado \"{0}\" não é válido. Os arquivos suportados são {1}.",
                "deleteFile": "Tem certeza que deseja excluir \"{0}\"?",
                "overwriteFile": "Um arquivo com o nome \"{0}\" já existe na pasta atual. Você quer sobrescrevê-lo?",
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