Ext.define('Layouts.store.Section', {
    extend: 'Ext.data.Store',
    // title: 'RevivalTimes Section Terms',

    /*requires: {
    },*/

    config: {
        model: 'Layouts.model.Section',
        storeId: 'Sections',
        
        autoLoad: true,
        // fields: ['tid', 'term'],

        proxy: {
            type: 'ajax',
            url: 'http://178.79.128.76/revivaltimes/app/sections',

            reader: {
                type: 'json',
                rootProperty: 'JSON',
            }
        },

    },//config
});