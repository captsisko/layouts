Ext.define('Layouts.view.Article', {
	extend: 'Ext.Panel',
	xtype: 'article',

	config: {

		padding: 0,

		hidden: true, //hid icon and title on tab-panel

		title: 'Details',
		styleHtmlContent: true,
		scrollable: 'vertical',
		tpl: [
			'Processing !'
		],

		items: [
			/*{
				title: 'Artile...',
				iconCls: 'user',
			},*/
			{
				xtype: 'toolbar',
				title: 'Article ...',
				docked: 'top',
				items: [
					{
						xtype: 'button',
						text: 'my back',
					}
				]
			}
		]

	}//config

});