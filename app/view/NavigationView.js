var view = Ext.define('Layouts.view.NavigationView', {
	extend: 'Ext.Panel',
	xtype: 'navigationview',


	config: {
		
		refs: {
			getStarted: 'getstarted'
		},

		title: 'Navigation View',
		iconCls: 'arrow_down',

		items: [
			{
				xtype: 'toolbar',
				title: 'Navigation View',
				padding: 10,
				// },
				items: [
					{
						xtype: 'button',
						text: 'Push another view',
						handler: function(){
							console.log('View button responding');
							
						
							Ext.Viewport.add({
								// title: 'Second View',
								// xtype: 'getstarted',								
							});
							//Ext.Viewport.add(Ext.create('Ext.Panel'));
							
							// Ext.Viewport.setActiveItem(Ext.create('Layouts.view.GetStarted'));

							Ext.Viewport.add({
								xtype: 'getstarted',								
							});
						}
					}
				]
			}
		]

	},//config

});