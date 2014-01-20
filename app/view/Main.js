Ext.define('Layouts.view.Main', {
    // extend: 'Ext.Panel',
    extend: 'Ext.tab.Panel',
    // extend: 'Ext.navigation.View',
    xtype: 'main',
    
    requires: [
        'Ext.TitleBar',
        'Ext.Video',
        // 'Ext.MessageBox',
        // 'Layouts.view.Hbox',
        // 'Layouts.view.Article'
        // 'Layouts.view.Section',
        // 'Layouts.view.Content'
    ],

    config: {
        /*refs: {
            sectionView: 'sectionview',
        },*/
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Welcome',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Welcome to Sencha Touch 2'
                    },
                ],

                /*html: [
                    "You've just generated a new Sencha Touch 2 project. What you're looking at right now is the ",
                    "contents of <a target='_blank' href='app/view/Main.js'>app/view/Main.js</a> - edit that file ",
                    "and refresh to change what's rendered here."
                ].join(""),*/

                // html: "Checking: " + this.getSectionView().getTid()
                // html: "Checking: " + this.getSectionView().getTid(),
                // Ext.Msg.prompt('TID'),
            },
            {
                xtype: 'getstarted'
            },
            {
                xtype: 'navigationview'
            },
            {
                xtype: 'form'
            },
            {
                xtype: 'taxonomyview'
            },
            {
                xtype: 'node'
            }
        ]
    },
});
