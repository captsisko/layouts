/*Ext.define('Layouts.view.Hbox', {
	extend: 'Ext.Container',*/

Ext.create('Ext.Container', {
	// extend: 'Ext.Panel',
	fullscreen: true,
	layout: 'hbox',
	// xtype: 'hbox',

	// iconCls: 'user',
	// title: 'testing',

	items: [
		{
			// title: 'Box#1',
			xtype: 'panel',
			html: 'First Box',
			flex: 1,
			style: 'background-color: #999'
		},
		{
			// title: 'Box#2',
			xtype: 'panel',
			html: 'Second Box',
			flex: 2
		}
	]

});

// Ext.create('Layouts.view.Hbox');