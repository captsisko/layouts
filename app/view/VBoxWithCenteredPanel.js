Ext.define('Layouts.view.VBoxWithCenteredPanel', {
	extend: 'Ext.Panel',
	xtype: 'vboxcenteredpanel',

		// fullscreen: true,
	
	config: {
		title: 'V-Box',
		iconCls: 'info',
		layout: 'vbox',


		items: [
			{
				title: 'V-Box and centered Panel',
				xtype: 'titlebar',			
			},
			{
				/*defaults: {
					width: '100%',
					height: '100%',
				},*/
				items: [
			        {
			            html: 'Menu Area',
			            styleHtmlContent: true,
			            flex: 1,
			            style: 'background-color: green',
			            docked: 'left',
			            height: '100%',
			            xtype: 'panel',
			            items: [ //absolute positioning example
			            	{
			            		xtype: 'button',
			            		text: 'icon',
			            		bottom: 0,
			            		right: 0,
			            	}
			            ]
			        },
			        {
			            html: 'Bottom Area',
			            styleHtmlContent: true,
			            flex: 2,
			            style: 'background-color: yellow',
			            height: '100%',
			            width: '70%',
			        },
			        {
			            html: 'Top Area',
			            styleHtmlContent: true,
			            flex: 1,
			            style: 'background-color: pink',
			            height: '100%',
			            /*items: [
			                {
			                    xtype: 'panel',
			                    html: 'This is a centered panel',
			                    centered: true,
			                    scrollable: true,
			                    width: '50%',
			                    height: '50%'
			                }
			            ]*/
			        }
		    	],
		    }
		]
	},


});