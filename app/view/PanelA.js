Ext.define('Layouts.view.PanelA', {
	extend: 'Ext.Panel',
	xtype: 'panelA',

	config: {
		title: 'Panel-A',
		iconCls: 'star',
		html: 'Welcome to my App - Resistance is futile!',
		// fullscreen: true,
	}
	
});

Ext.create('Layouts.view.PanelA', {
	styleHtmlContent: true
});