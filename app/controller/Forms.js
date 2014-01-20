Ext.define('Layouts.controller.Forms', {
	extend: 'Ext.app.Controller',

	requires: [

	],

	config: {
		refs: {
			formPage: 'form'
		},
		control: {
			'button[action=button_get]': {
				tap: 'response_get'
			}
		}
	},//config

	response_get: function(event){
		var values = this.getFormPage().getValues();
		console.log('GET function responding: ' + values.name);
		// Ext.Msg.alert('Teting: ' + values);
	}

});