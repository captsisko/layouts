Ext.define('Layouts.store.Node', {
    extend: 'Ext.data.Store',

    config: {

        storeId: 'Nodes',
        
        autoLoad: true,
        model: 'Layouts.model.Node',

        proxy: {
            type: 'ajax',
            url: 'http://178.79.128.76/revivaltimes/app/content/0',

            reader: {
                type: 'json',
                rootProperty: 'JSON',
            }
        },

    },//config

});
