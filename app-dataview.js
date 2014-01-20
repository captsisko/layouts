/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

Ext.application({
    name: 'Layouts',

    requires: [
        'Ext.MessageBox',
        'Ext.data.proxy.JsonP',
    ],
   
    views: [
        'Main',
        'PanelA',
        // 'SearchBar',
        // 'Images',
        'GetStarted',
        // 'Hbox',
        // 'Vbox',
        // 'Cards'
        // 'Fit',
        // 'Docking'
        // 'HBoxPackAlign',
        // 'VBoxWithCenteredPanel',
        // 'CenterToggleButton',
        // 'ModalComponents'
        // 'Forms',
        // 'DataView',
        'NavigationView'
    ],

    controllers: [
        // 'Forms'
    ],

    models: [
        'User'
    ],

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('Layouts.view.Main'));
        // Ext.Viewport.add(Ext.create('Layouts.view.DataView'));
        /*var team = Ext.Viewport.add(Ext.create('Ext.DataView', {
            // fullscreen: true,

            // store: {
            //     fields: ['name', 'age'],
            //     data: [
            //         {name: 'Jamie Avins',  age: 100},
            //         {name: 'Rob Dougan',   age: 21},
            //         {name: 'Tommy Maintz', age: 24},
            //         {name: 'Jacky Nguyen', age: 24},
            //         {name: 'Ed Spencer',   age: 26},
            //         {name: 'Ivan Jouikov', age: 26}
            //     ]
            // },

            store: {
                autoLoad: true,
                // fields: ['author', 'media', 'title'],
                fields: ['tid', 'term'],
                // fields: ['name', 'age'],

                proxy: {
                    type: 'jsonp',
                    url: 'http://178.79.128.76/revivaltimes/app/sections',

                    reader: {
                        type: 'json',
                        rootProperty: 'results',
                    }
                },
            },

            // itemTpl: '{name} is {age} years old'
            // itemTpl: 'Data: <img src="{media}"/><h2>{author}</h2> <p>{title}</p>'
            itemTpl: 'TEST'

        }));

        // team.getStore().add({
        //     name: 'Chandler Bing',
        //     age: 32,
        // });
        // team.getStore().getAt(0).set('age', 41);
        */
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
