Ext.create('Ext.Container', {
	layout: 'vbox',
	fullscreen: true,

	items: [
		{
			xtype: 'panel',
			html: 'upper panel',
			flex: 2,
			styleHtmlContent: true,
			style: 'background-color: red'
		},
		{
			xtype: 'panel',
			html: 'lower panel',
			flex: 2,
			style: 'background-color: green'
		}
	]

});