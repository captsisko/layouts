Ext.define('Layouts.view.ModalComponents', {
	extend: 'Ext.Panel',
	xtype: 'modalcomponents',

	config: {
		title: 'Modal Components',
		iconCls: 'add',

		items: [
			{
				xtype: 'toolbar',
				title: 'Modal-Components'
			},
			{
				html: 'testing ... testing'
			},
			{
				xtype: 'panel',
				html: 'Centered and Modal panel',
				centered: true,
				width: '25%',
				height: '25%',
				modal: true,
				hideOnMaskTap: true,
				/*handler: function(){
					if( this.isCentered() ){
						Ext.Viewport.setStyleHtmlContent(false);
						this.setCentered(false);
						this.setModal(false);
					}else{
						Ext.Viewport.setStyleHtmlContent(true);
						this.setCentered(true);
						this.setModal(true);
					}
				}*/
			}
		]
	}//config

});