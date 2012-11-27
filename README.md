Kendo Global
============

Complements Telerik's Kendo UI with language packs for the localization of all 
Kendo UI widgets. It works with both open source and commercial versions of Kendo UI.

Kendo UI
========

Kendo UI is a fantastic HTML 5 framework and component suite for developing 
cross-browser/device applications. It's based on the JavaScript language and has
helpers for ASP.NET MVC to make the life easier for .NET developers used to the
award winning offerings from Telerik for .NET.

Unfortunately Kendo UI widgets are provided without any form of localization,
except for culture-based number and date formats, so all widgets are rendered 
in plain, good, old English.

Enter Kendo Global...

How
===

Simply add a reference to the desired language file after including the Kendo UI
JavaScript files and all widgets will assume that file's language. Something
like this: 

    <script src="http://cdn.kendostatic.com/2012.3.1114/js/kendo.all.min.js"></script>
    <script src="\js\lang\kendo.ptBR.js"></script>

Why
===

Kendo UI widgets use "enclosured" options inside the source code to define the 
many text messages and labels that will be used to render their parts. These 
options aren't available in a global context for easy overriding. These options
can be passes on a per-widget manner as to change the texts for that specific 
widget. This soon becomes bothersome as every and each widget will require 
a whole set of textual options to show them in a specific language (not to 
mention when you have to show them in multiple languages!) 

The solution employed by Kendo Global is to capitalize on JavaScript nature and 
override these options at the prototype level, without breaking any 
functionality and still allowing individual overrides for specific messages or
labels with the standard mechanism of passing individual options.      

Contributions are welcome
=========================

Currently only Brazilian Portuguese (pt-BR) is supported because that's my 
home language. I'll accept any and all pull requests for corrections and new
languages. I'll give full credits to everyone that contributes!

Credits
=======

pt-BR by Felipe Rocha Machado (http://feliperochamachado.com.br)
