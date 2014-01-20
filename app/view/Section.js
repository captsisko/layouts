Ext.define('Layouts.view.Section', {
	// extend: 'Ext.DataView',
	extend: 'Ext.List',
	xtype: 'sectionview',

	/*requires: [
		'Layouts.store.Section',
	],*/

	config: {
		// tid: ''+'{tid}',
		// itemId: 'sectionview',

		listeners: {
			element: 'element',
			tap: function(eventName, fn, scope, options, order) {
				// this.setItemId(7);
    //     		tid = this.getTid();
        		tid = '{tid}';
				// console.log('Setting Section#' + this.getTid());
				console.log('Setting Section#' + this.getSelection() );
			}
		},

		iconCls: 'arrow_up',
		title: 'Sections',

		onItemDisclosure: true,
		emptyText: 'Error! Please try later',
        loadingText: 'LOADING ...',
        striped: true,

		store: 'Sections',
		itemTpl: '{term} - {tid}',
        sorters: 'term',


		items: [
			{
				xtype: 'toolbar',
				title: 'Taxonomy Terms',
				docked: 'top',
			},
			{
				xtype: 'button',
				text: 'testing ...',
				docked: 'bottom',
	    	}
		]
	},//config

});