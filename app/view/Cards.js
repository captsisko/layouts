var panel = Ext.define('Layouts.view.Cards', {
	extend: 'Ext.Panel',
// var panel = Ext.create('Ext.Panel', {
	layout: 'card',
	xtype: 'cards',
	fullscreen: true,

	config: {
		title: 'Cards',
		iconCls: 'user'
	},

	items: [
		{
			xtype: 'panel',
			html: '1st Panel',
			// styleHtmlContent: true,
		},
		{
			xtype: 'panel',
			html: '2nd Panel',
			// styleHtmlContent: true
		},
		{
			html: '3rd Panel',
		}
	]

});

Ext.create(panel).setActiveItem(1);