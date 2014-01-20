Ext.define('Layouts.view.GetStarted', {
	extend: 'Ext.Panel',
	xtype: 'getstarted',

	/*requires: [
		'Layouts.view.Images'
	],*/

	config: {

		title: 'Get Started',
        iconCls: 'action',
        // html: 'Getting started page',
        // styleHtmlContent: true

        items: [
            {
                xtype: 'toolbar',
                title: 'Getting Started!',
            },
            {
                xtype: 'panel',
                html: 'This is a centered panel',
                centered: true,
                title: 'testing'
            }
        ]
    },//config


});

/*Ext.create('Layouts.store.Sections', {
    title: 'Orion Nebula',
    description: 'The Origin Nebula is rather pretty',
    src: 'http://apod.nasa.gov/apod/image/1202/oriondeep_andreo_960.jpg',
    fullscreen: true
});*/