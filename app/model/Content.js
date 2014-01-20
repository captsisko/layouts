Ext.define('Layouts.model.Content', {
	extend: 'Ext.data.Model',

	config: {
		fields: [
			'nid', 'title', 'icon1', 'icon2',
		]
	},

	/*sectionData: function(){
		var d = this.data,
		taxonomy = [
			d.tid, d.term
		];
		return taxonomy.join(" ");
	}*/

});