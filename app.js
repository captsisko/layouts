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
        // 'Ext.DataView',
        'Ext.MessageBox',
        'Ext.data.proxy.JsonP',
    ],
   
    views: [
        'Main',
        // 'PanelA',
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
        'Forms',
        'DataView',
        'NavigationView',
        'Taxonomy',
        // 'Content',
        // 'Node',
    ],

    controllers: [
        // 'Forms',
        'Taxonomy',
        'Content',
    ],

    models: [
        // 'User',
        'Content',
        'Taxonomy',
        'Node',
    ],

    stores: [
        'Taxonomy',
        'Content',
        'Node',
    ],

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('Layouts.view.Main'));
        // var TID = 7;
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