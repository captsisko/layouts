Ext.define('Layouts.view.Content', {
	extend: 'Ext.List',
	xtype: 'content',

	requires: [
		'Layouts.store.Content'
	],

	config: {
		
		refs: {
			main: 'main',
			sectionView: 'sectionview',
		},

		control: {
			/*'button[action=harris_tap]': {
				tap: 'harris_tap_function'
			},*/
			/*init: function() {
				console.log('Initializing!');
			},*/
		},

		listeners: {
			itemtap: function(data, index){
				console.log('Content-View: DATA -> ' + data);
				console.log('Content-View: INDEX -> ' + index);

				var store = Ext.getStore('ContentList');
				console.log('Content.js[View] - store: ' + store.getData().all[index].data.nid); //id property
				console.log('Content.js[View] - store: ' + store.getData().all[index].data.title); //term property
				// console.log('Content.js[View] - store: ' + store);

				// console.log('Content.js[View] - nid: ' + localStorage.getItem('nid'));
				
				this.fireEvent('PrintNode', store.getData().all[index].data.nid);
			}
		},

		store: 'ContentList',
		title: 'Details',

		padding: 0,
		// hidden: true, //hide icon and title on tab-panel
		styleHtmlContent: true,
		onItemDisclosure: true,
		
        // itemTpl: '<img src={icon1}/> {title} - <img src={icon2}/>',
        itemTpl: '{title} - {nid}',
        // tpl: '- {nid}',
        sorters: 'term',

        emptyText: 'No content in this category at present',
        loadingText: 'LOADING ...',
        striped: true,

		items: [
			{
				xtype: 'toolbar',
				// title: 'Content Listing for TID#' + tid,
				docked: 'top',
				items: [
					{
						xtype: 'button',
						text: 'my back',
					}
				]
			},
			/*{
				xtype: 'panel',
				docked: 'bottom',
				items: 
				[
					{
						html: 'TID: ' + this.getTid() + '<br>'// + 
							  // 'TERM: ' + localStorage.getItem('term'),
					}
				],
			},*/
			{
				xtype: 'button',
				text: 'Harris',
				docked: 'bottom',
				// action: 'harris_tap'
			}
		],


	},//config

	/*harris_tap_function: function(){
		console.log('harris button tapped');
		console.log('Received TermID#' + this.getMain());
		console.log('Received TermID#' + this.getSection().getTid());
	},*/

});
