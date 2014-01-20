Ext.define('Layouts.store.Content', {
    extend: 'Ext.data.Store',

    config: {

        storeId: 'ContentList',
        
        autoLoad: true,
        model: 'Layouts.model.Content',

        proxy: {
            type: 'ajax',
            url: 'http://178.79.128.76/revivaltimes/app/sections/contentlist/0',

            reader: {
                type: 'json',
                rootProperty: 'JSON',
            }
        },

    },//config

});
