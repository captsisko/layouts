var formeg = Ext.define('Layouts.view.Forms', {
	extend: 'Ext.form.Panel',
	xtype: 'form',

	requires: [
		'Ext.field.Email',
		'Ext.form.FieldSet',
		'Ext.field.Password',
		'Layouts.store.Taxonomy',
	],

	config: {
		title: 'Form',
		iconCls: 'user',

		padding: 0,

		refs: {
			// start: 'getstarted',
			main: 'main',
		},

		control: {
			'button[action=button_get]': {
				tap: 'response_get'
			},
			'button[action=button_clear]': {
				tap: 'response_clear'
			},
			'button[action=button_set]': {
				tap: 'response_set'
			},
			'button[action=button_change]': {
				tap: 'change_view'
			}
		},

		items: [
			{
				xtype: 'toolbar',
				title: 'Form Example'
			},
			{
				xtype: 'fieldset',
				title: 'A Form Example ...',

				items: [
					{
						xtype: 'textfield',
						label: 'Name:',
						name: 'name',
						// value: 'Dr Fraiser Crane'
					},
					{
						xtype: 'emailfield',
						label: 'Email:',
						name: 'email',
						// value: 'fcrane@kacl.org'
					},
					{
						xtype: 'passwordfield',
						label: 'Password:',
						name: 'password',
						// value: 'imlistening'
					},
					{
						items: [
							{
								xtype: 'toolbar',
								items: [
									{
										xtype: 'button',
										text: 'Set Data',
										action: 'button_set',
									},
									{
										xtype: 'button',
										text: 'Get Data',
										action: 'button_get',
									},
									{
										xtype: 'button',
										text: 'Clear Data',
										action: 'button_clear',
									},
									{
										xtype: 'button',
										text: 'Change View',
										action: 'button_change',
									}
								]
							}
						]
					}//buttons
				]
			}//fieldset
		]

	},//config

	response_get: function(event){
		// var values = formeg.getValues();
		var values = this.getValues();
		Ext.Msg.alert('Name: ' + values.name + '<br>' +
						'Email: ' + values.email +  '<br>' +
							'Password: ' + values.password +  '<br>');
		// console.log('Testing GET button response: ' + values.name);
	},

	response_clear: function(){
		console.log('Clear button responding');
		this.reset();
	},

	response_set: function(){
		var cp = Ext.create('Layouts.model.User', {
			name: 'Jean-Luc Picard',
			email: 'picard@enterprise@starfleet',
			password: 'picard-alpha-delta-aplha',
		});

		this.setRecord(cp);
	},

	change_view: function(event){
		// Ext.Viewport.push({
		// 	xtype: 'getstarted'
		// });

		/*this.getMain().push({
			xtype: 'getstarted'
		});*/
        Ext.Viewport.add(Ext.create('Layouts.store.Taxonomy'));

		console.log('Change-View button responding!');
	}

});