Ext.define('Layouts.view.Taxonomy', {
	// extend: 'Ext.DataView',
	extend: 'Ext.List',
	xtype: 'taxonomyview',

	/*requires: [
		'Layouts.store.Section',
	],*/

	config: {

		listeners: {
			itemtap: function(data, index){
				var record = data.getStore().getAt(index);
				console.log('Taxonomy.js-VIEW: itemtap responding!');

				var store = Ext.getStore('Sections');

				// localStorage.setItem('tid', store.getData().all[index].data.tid);
				// localStorage.setItem('term', store.getData().all[index].data.term);
				
				console.log('Taxonomy.js[View] - tid: ' + store.getData().all[index].data.tid);
				// console.log('Local-Storage TEST: ' + localStorage['tid']);				
				
				this.fireEvent('ListContent', store.getData().all[index].data.tid);//, this);
			},
		},

		control: {
			'button[action=testing_tap]': {
				tap: 'testing_tap_response'
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
				action: 'testing_tap'
	    	}
		]
	},//config

	testing_tap_response: function(){
		console.log('Testing-Tap responding');
		var store = Ext.getStore('Sections');

		console.log(store.getData().all[0]); //record
		console.log(store.getData().all[2].data); //data object

		console.log(store.getData().all[3].data.tid); //id property
		console.log(store.getData().all[4].data.term); //term property
	}
});