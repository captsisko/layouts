Ext.define('Layouts.view.CenterToggleButton', {
	extend: 'Ext.Panel',
	xtype: 'centertogglebutton',

	config: {
		title: 'Centering Toggle',
		iconCls: 'download',

        width: '100%',
        height: '100%',

		items: [
			{
				xtype: 'toolbar',
				title: 'Centering Toggle',
			},
			{
				items: [
                    {
                        xtype: 'button',
                        html: 'toggling center',
                        // centered: true,
                        handler: function(){
                            if(this.isCentered()){
                                this.setCentered(false);
                                this.setWidth(null);
                                this.setHeight(null);
                            }else{
                                this.setCentered(true);
                                this.setWidth(200);
                                this.setHeight(100);
                            }
                        }
                    }
                ]
			}
		]
}
});