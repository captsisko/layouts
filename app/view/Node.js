Ext.define('Layouts.view.Node', {
    extend: 'Ext.dataview.DataView',
	xtype: 'node',

	config: {
		title: 'Node Data',
		styleHtmlContent: true,
		scrollable: 'vertical',
		hidden: true,
		// padding: 0,

		store: 'Nodes',

        items: [
        	{
        		xtype: 'toolbar',
        		title: 'Node Details',
        	},
        	{

        	}
        ],

		itemTpl: '<h3>{title}</h3>' + 
					'<div>{body}</div>',

	},//config
});