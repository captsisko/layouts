Ext.define('Layouts.view.Images', {
	extend: 'Ext.Img',
	xtype: 'images',

	config: {
		title: 'Images',
		description: 'clickable background images',

		// iconCls: 'user',
	},

	//event tap listener
	initialize: function(){
		this.callParent(arguments);
		this.element.on('tap', this.onTap, this);
	},

	//called when image is tapped
	onTap: function(){
		Ext.Msg.alert(this.getTitle(), this.getDescription());
	}
});

//creates a full screen tappable image
Ext.create('Layouts.view.Images', {
	title: 'Orion Nebula',
	description: 'The Origin Nebula is rather pretty',
	src: 'http://apod.nasa.gov/apod/image/1202/oriondeep_andreo_960.jpg',
	// fullscreen: true,
});