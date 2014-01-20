Ext.define('Layouts.controller.Content', {
	extend: 'Ext.app.Controller',

	requires: [
		'Layouts.view.Node',
		// 'Layouts.view.Node',
	],

	config: {
		refs: {
			main: 'main',
			contentView: 'content',
		},

		control: {
			/*'listContent': {
				itemtap: 'showContentList'
			},*/
			'contentView': {
				PrintNode: 'print_node',
			}
		},
	},

	print_node: function(nid){
		console.log('Confirmed printing Node!: ' + nid);
		
		var nodestore = Ext.getStore('Nodes');
		nodestore.getProxy().setUrl('http://178.79.128.76/revivaltimes/app/content/' + nid);
		nodestore.load();

		var node = new Layouts.view.Node();
		this.getMain().setActiveItem(node);//, animationOptions);
	}

});