Ext.define('Layouts.model.Taxonomy', {
	extend: 'Ext.data.Model',

	config: {
		fields: [
			'tid',
			'term',
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