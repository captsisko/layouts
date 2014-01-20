Ext.define('Layouts.view.SearchBar', {
	extend: 'Ext.Toolbar',
	xtype: 'searchbar',

	requires: [
		'Ext.field.Search',
	],

	config: {
		title: 'Search',
		iconCls: 'search',

		ui: 'searchbar',
		layout: 'vbox',
		cls: 'big',

		// docked: 'bottom',

		items: [
			/*{
				xtype: 'title',
				title: 'Twitter Search'
			},*/
			{
				xtype: 'searchfield',
				placeHolder: ' Search ...'
			}
		]

	}//config

});