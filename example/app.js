(function () {
    'use strict';
    // Module Test
    var AltJSON = require('net.imthinker.ti.alternatejson');
    Ti.API.info('module is => ' + AltJSON);

    var win = Ti.UI.createWindow({
        backgroundColor: 'white',
        layout: 'vertical'
    });

    var start_detection = Ti.UI.createButton({
        title: 'Start detection',
        top: 10
    });
    start_detection.addEventListener('click', function () {
        detection();
    });
    win.add(start_detection);

    var label1, label2, label3, label4, label5, label6, label7, label8, opts;
    opts = {
        top: 5
    };
    label1 = Ti.UI.createLabel(opts);
    label2 = Ti.UI.createLabel(opts);
    label3 = Ti.UI.createLabel(opts);
    label4 = Ti.UI.createLabel(opts);
    label5 = Ti.UI.createLabel(opts);
    label6 = Ti.UI.createLabel(opts);
    label7 = Ti.UI.createLabel(opts);
    label8 = Ti.UI.createLabel(opts);
    win.add(label1);
    win.add(label2);
    win.add(label3);
    win.add(label4);
    win.add(label5);
    win.add(label6);
    win.add(label7);
    win.add(label8);

    // Example object (http://json.org/example.html)
    var example = {
        glossary: {
            title: 'example glossary',
            GlossDiv: {
                title: 'S',
                GlossList: {
                    GlossEntry: {
                        ID: 'SGML',
                        SortAs: 'SGML',
                        GlossTerm: 'Standard Generalized Markup Language',
                        Acronym: 'SGML',
                        Abbrev: 'ISO 8879:1986',
                        GlossDef: {
                            para: 'A meta-markup language, used to create markup languages such as DocBook.',
                            GlossSeeAlso: ['GML', 'XML']
                        },
                        GlossSee: 'markup'
                    }
                }
            }
        }
    };

    var serialized = '{"glossary":{"title":"example glossary","GlossDiv":{"title":"S","GlossList":{"GlossEntry":{"ID":"SGML","SortAs":"SGML","GlossTerm":"Standard Generalized Markup Language","Acronym":"SGML","Abbrev":"ISO 8879:1986","GlossDef":{"para":"A meta-markup language, used to create markup languages such as DocBook.","GlossSeeAlso":["GML","XML"]},"GlossSee":"markup"}}}}}';

    var LOOP_LIMIT = 1000;
    function detection() {
        var i, str, obj, start, end;

        start = Date.now();
        for (i = 0; i < LOOP_LIMIT; i++) {
            str = JSON.stringify(example);
        }
        end = Date.now();
        label1.applyProperties({
            text: 'Titanium stringify ' + (end - start) + ' [ms]'
        });

        console.debug('===== Titanium stringify result =====');
        console.debug(str);

        start = Date.now();
        for (i = 0; i < LOOP_LIMIT; i++) {
            obj = JSON.parse(serialized);
        }
        end = Date.now();
        label2.applyProperties({
            text: 'Titanium parse ' + (end - start) + ' [ms]'
        });

        console.debug('===== Titanium parse result =====');
        console.debug(obj);

        start = Date.now();
        for (i = 0; i < LOOP_LIMIT; i++) {
            str = AltJSON.stringify(example);
        }
        end = Date.now();
        label3.applyProperties({
            text: 'NSJSONSerialization stringify ' + (end - start) + ' [ms]'
        });

        console.debug('===== NSJSONSerialization stringify result =====');
        console.debug(str);

        start = Date.now();
        for (i = 0; i < LOOP_LIMIT; i++) {
            obj = AltJSON.parse(serialized);
        }
        end = Date.now();
        label4.applyProperties({
            text: 'NSJSONSerialization parse ' + (end - start) + ' [ms]'
        });

        console.debug('===== NSJSONSerialization parse result =====');
        console.debug(obj);

        start = Date.now();
        for (i = 0; i < LOOP_LIMIT; i++) {
            str = AltJSON.stringify2(example);
        }
        end = Date.now();
        label5.applyProperties({
            text: 'JSONKit stringify ' + (end - start) + ' [ms]'
        });

        console.debug('===== JSONKit stringify result =====');
        console.debug(str);

        start = Date.now();
        for (i = 0; i < LOOP_LIMIT; i++) {
            obj = AltJSON.parse2(serialized);
        }
        end = Date.now();
        label6.applyProperties({
            text: 'JSONKit parse ' + (end - start) + ' [ms]'
        });

        console.debug('===== JSONKit parse result =====');
        console.debug(obj);

        start = Date.now();
        for (i = 0; i < LOOP_LIMIT; i++) {
            str = AltJSON.stringify3(example);
        }
        end = Date.now();
        label7.applyProperties({
            text: 'SBJson stringify ' + (end - start) + ' [ms]'
        });

        console.debug('===== SBJson stringify result =====');
        console.debug(str);

        start = Date.now();
        for (i = 0; i < LOOP_LIMIT; i++) {
            obj = AltJSON.parse3(serialized);
        }
        end = Date.now();
        label8.applyProperties({
            text: 'SBJson parse ' + (end - start) + ' [ms]'
        });

        console.debug('===== SBJson parse result =====');
        console.debug(obj);
    }

    win.addEventListener('open', detection);
    win.open();
}());