(function () {
    'use strict';
    var win = Ti.UI.createWindow({
        backgroundColor: 'white'
    });
    win.open();

    // Module Test
    var AltJSON = require('net.imthinker.ti.alternatejson');
    Ti.API.info("module is => " + AltJSON);

    // Example object (http://json.org/example.html)
    var example = {
        glossary: {
            title: "example glossary",
            GlossDiv: {
                title: "S",
                GlossList: {
                    GlossEntry: {
                        ID: "SGML",
                        SortAs: "SGML",
                        GlossTerm: "Standard Generalized Markup Language",
                        Acronym: "SGML",
                        Abbrev: "ISO 8879:1986",
                        GlossDef: {
                            para: "A meta-markup language, used to create markup languages such as DocBook.",
                            GlossSeeAlso: ["GML", "XML"]
                        },
                        GlossSee: "markup"
                    }
                }
            }
        }
    };

    var stringify = AltJSON.stringify(example);
    Ti.API.info(stringify);

    var parse = AltJSON.parse(stringify);
    Ti.API.info(parse);
    Ti.API.info(typeof parse);
    Ti.API.info(parse.glossary.title);

    // Example array
    var example2 = [[], {}, "", 1, true];

    var stringify2 = AltJSON.stringify(example2);
    Ti.API.info(stringify2);

    var parse2 = AltJSON.parse(stringify2);
    Ti.API.info(parse2);
    Ti.API.info(typeof parse2);
    Ti.API.info(parse2[3]);
}());