Ext.define('Layouts.store.Section', {
    extend: 'Ext.data.Store',
    // title: 'RevivalTimes Section Terms',

    /*requires: {
        model: 'Layouts.model.Section',
    },*/

    config: {
        storeId: 'Sections',
        
        /*autoLoad: true,
        fields: ['tid', 'term'],

        proxy: {
            type: 'ajax',
            url: 'http://178.79.128.76/revivaltimes/app/sections',

            reader: {
                type: 'json',
                rootProperty: 'JSON',
            }
        },*/

        /*data: [
            {"term":"Classified Advertisements","tid":"16"},
            {"term":"Live at the Coronet","tid":"14"},
            {"term":"All Nations Praise","tid":"10"},
            {"term":"Situations Vacant","tid":"15"},
            {"term":"Youth","tid":"12"}
        ],*/

        data: [
             term: 'Groceries',
             items: [{
                 term: 'Drinks',
                 items: [{
                     term: 'Water',
                     items: [{
                         term: 'Sparkling',
                         leaf: true
                     }, {
                         term: 'Still',
                         leaf: true
                     }]
                 }, {
                     term: 'Coffee',
                     leaf: true
                 }, {
                     term: 'Espresso',
                     leaf: true
                 }, {
                     term: 'Redbull',
                     leaf: true
                 }, {
                     term: 'Coke',
                     leaf: true
                 }, {
                     term: 'Diet Coke',
                     leaf: true
                 }]
             }, {
                 term: 'Fruit',
                 items: [{
                     term: 'Bananas',
                     leaf: true
                 }, {
                     term: 'Lemon',
                     leaf: true
                 }]
             }, {
                 term: 'Snacks',
                 items: [{
                     term: 'Nuts',
                     leaf: true
                 }, {
                     term: 'Pretzels',
                     leaf: true
                 }, {
                     term: 'Wasabi Peas',
                     leaf: true
                 }]
             }]
         ],//test data

    },//config
});