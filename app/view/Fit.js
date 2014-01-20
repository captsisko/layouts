Ext.Viewport.add(
	Ext.create('Ext.Panel', {
		width: '50%',
		height: '50%',
		// layout: 'fit',

		items: [
			{
				xtype: 'panel',
				html: 'Fits exact coordinates',
				styleHtmlContent: true,
			}
		]

	})
);