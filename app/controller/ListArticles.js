Ext.define('Layouts.controller.ListArticles', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			main: 'main',
		},
		control: {
			'sectionview': {
				disclose: 'showarticles',
			}
		},
	},

	// showarticles: function(list, record){
	showarticles: function(list, record, target, index, e, eOpts){
		// console.log('this: ' + list);
		// console.log('record: ' + record);
		// console.log('target: ' + target);
		// console.log('index: ' + index);
		// console.log('e: ' + e);
		// console.log('eOpts: ' + eOpts);

		console.log('Testing!' + tid);

		var articlesList = new Layouts.view.Content();
		// articlesList.getNavigationBar().setTitle('testing ... testing');

		this.getMain().setActiveItem(articlesList);//, animationOptions);
	}

});