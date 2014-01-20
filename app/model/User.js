Ext.define('Layouts.model.User', {
	extend: 'Ext.data.Model',

	config: {
		refs: {
			formPage: 'form',
		},
		fields: [
			'name',
			'email',
			'password'
		]
	},//config
});

/*var cp = Ext.create('Layouts.model.User', {
	name: 'Jean-Luc Picard',
	email: 'picard@enterprise@ncc',
	password: 'picard-alpha-delta-aplha',
});

this.getFormPage().setRecord(cp);*/