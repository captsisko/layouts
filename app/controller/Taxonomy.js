Ext.define('Layouts.controller.Taxonomy', {
	extend: 'Ext.app.Controller',
	xtype: 'taxonomycontroller',

	requires: [
		'Layouts.view.Content',
		// 'Layouts.controller.Content'
	],

	config: {
		refs: {
			main: 'main',
			taxonomyView: 'taxonomyview',
		},
		
		control: {
			'taxonomyView': {
				ListContent: 'list_content',
			}
		},
	},

	list_content: function(tid){
		// console.log('Taxonomy.js-Controller: ListContent function responding! ARG1: '+arg1);
		// console.log('Taxonomy.js-Controller: Local-Storage TEST -> ' + localStorage.getItem('tid'));

		/*Ext.getStore('Content').load({
			params: {param: localStorage.getItem('tid')}
		});*/

		var contentstore = Ext.getStore('ContentList');
		// contentstore.getProxy().setUrl('http://178.79.128.76/revivaltimes/app/sections/content/' + localStorage.getItem('tid'));
		contentstore.getProxy().setUrl('http://178.79.128.76/revivaltimes/app/sections/contentlist/' + tid);
		contentstore.load();

		var articlesList = new Layouts.view.Content();
		// articlesList.setTid(arg1);
		this.getMain().setActiveItem(articlesList);//, animationOptions);
	}

});