# Kendo Global
Complements Telerik's Kendo UI with language packs for the localization of all 
Kendo UI widgets. It works with both open source and commercial versions of Kendo UI.

## Why
Kendo UI is a fantastic HTML 5 framework and component suite for developing 
cross-browser/device applications. It's based on the JavaScript language and has
helpers for ASP.NET MVC to make the life easier for .NET developers used to the
award winning offerings from Telerik for .NET.

Unfortunately Kendo UI widgets are provided without any form of localization,
except for culture-based number and date formats, so all widgets are rendered 
in plain, good, old English.

Enter Kendo Global...

## Installation
1. `bower install kendo-global --save`
2. Add a script reference after the Kendo UI JavaScript files.
   ``` html
   <!DOCTYPE html>
   <html>
   <head>
   		<!-- Important otherwise special characters won't work -->
   		<meta charset="utf-8">

   		<!-- First include KendoUI -->
   		<script src="http://cdn.kendostatic.com/2012.3.1114/js/kendo.all.min.js"></script>

        <!-- Then include the language file you want -->
        <script src="lang/js/kendo-pt-PT.js"></script>
   </head>
   </html>
   ```

## Building
This repository uses [Gulp](https://github.com/gulpjs/gulp/) for building the `js` files and `demo` files.
To build these yourself, follow the following steps.

1. Make sure you have [NodeJS](http://nodejs.org/download/) installed.
2. `npm install` at the root of the repository.
3. `gulp build`

## Contributing
Currently there are 17 language packs (and growing). I'll accept any and
all pull requests for corrections and new languages (and also email submissions)

Follow the following steps.

1. Go to the `lang/json` folder and copy an existing language file, and give it the right name,
of the format `kendo-<languagecode-COUNTRYCODE>.json`
2. Translate all the values.
3. Commit and create a pull request.


Full credits to each and everyone that contributes will be given individually
bellow! 

## Credits
| Language | Name                       | Author                                                    |
| -------- | -------------------------- | --------------------------------------------------------- |
| ar-JO    | Arabic                     | Wael Mahameed                                             |
| da-DK    | Standard Danish            | Klaus Nielsen                                             |
| de-DE    | Standard German            | Claudio Mertz                                             |
| en-GB    | British English            | Simba-Mupfunya                                            |
| es-EC    | Ecuadorian Spanish         | Andrés Checa                                              |
| es-ES    | Spanish Standard           | i0i0,Joe Bordes(JPL TSolucio)                             |
| es-MX    | Mexican Spanish            | Salvador Parra,Joe Bordes(JPL TSolucio)                   |
| es-PA    | Panamanian Spanish         | Bolívar Muñoz                                             |
| fa-IR    | Persian/Farsi (Iran)       | Bahman Nikkhahan                                          |
| fr-CA    | French (Canadian)          | Martin Auclair                                            |
| fr-FR    | French Standard            | Jonas Van der Biest                                       |
| hr-HR    | Croatian                   | nixa333                                                   |
| hu-HU    | Hungarian                  | Janos Meszaros (Janez)                                    |
| it-IT    | Italian                    | Paolo Ascari                                              |
| nb-NO    | Standard Norwegian         | Mikael Gyth                                               |
| nl-BE    | Dutch (Belgium)            | Jonas Van der Biest                                       |
| nl-NL    | Dutch Standard           	| Mark Lagendijk		                                    |
| pl-PL    | Polski Poland (pl-PL)      | Miroslaw Szajner                                          |
| pt-BR    | Brazilian Portuguese       | [Felipe Rocha Machado](http://feliperochamachado.com.br)  |
| pt-PT    | Portuguese (Portugal)      | Pedro Carvalho                                            |
| ru-RU    | Standard Russian           | Pavel Tsarenko                                            |
| sk-SK    | Slovak                     | majsterka                                                 |
| sv-SE    | Swedish                    | Johan Karlsson                                            |
| tr-TR    | Standard Turkish           | burdem                                                    |
| zh-CN    | Simplified Chinese         | IKKI Phoenix (Fenikkusu no Ikki :-)                       |

## Contributors
The following people contributed with corrections, updates and suggestions:
Alexander Pyatakov, Thiago H. Oliveira, DonKarlssonSan, Jesper Kamstrup Linnet, Mark Lagendijk.
