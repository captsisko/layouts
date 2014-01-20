Ext.create('Ext.Container', {
/*Ext.define('Layouts.view.Docking', {
	extend: 'Ext.Panel',*/
	xtype: 'docking',
    
	config: {
		title: 'Docking',
	    iconCls: 'user',
    },
        fullscreen: true,
        layout: 'hbox',

    defaults: {
        styleHtmlContent: true,
    },

    items: [
        {
            docked: 'top',
            xtype: 'panel',
            height: '15%',
            html: 'Docked to the top',
            style: 'background-color: red',
            // flex: 2,
        },                        
        {
            xtype: 'panel',
            html: 'message list',
            flex: 1,
            style: 'background-color: white',
            // docked: 'left',
        },
        {
            xtype: 'panel',
            html: 'message preview',
            flex: 2,
            style: 'background-color: blue',
            // docked: 'top',
        }
    ]

    /*fullScreen: true,
	layout: 'hbox',
	xtype: 'docking',

	config: {
		title: 'Docking',
		iconCls: 'star',
	},

	items: [
		{
			docked: 'top',
			xtype: 'panel',
			height: 20,
			html: 'Docked to the top',
			styleHtmlContent: true,
		},
		{
			xtype: 'panel',
			html: 'message list',
			flex: 1
		},
		{
			xtype: 'panel',
			html: 'message preview',
			flex: 2
		}
	]*/

});