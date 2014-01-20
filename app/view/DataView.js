Ext.define('Layouts.view.DataView', {
    extend: 'Ext.Panel',
// Ext.create('Ext.DataView',
    xtype: 'dataview',
    // fullscreen: true,

    config: {
        
        iconCls: 'delete',
        title: 'DataView',

        store: {
            fields: ['name', 'age'],
            data: [
                {name: 'Marge Simpson',   age: 37},
                {name: 'Homer J Simpson', age: 40},
                {name: 'Bart Simpson',    age: 10},
                {name: 'Lisa Simpson',    age: 7 },
                {name: 'Maggie Simpson',  age: 1},
            ]
        },
        

        items: [
            {
                xtype: 'toolbar',
                title: 'DataView Example',
            },
            {
                html: 'testing ... testing'
            }
        ],
        
    },//config

    itemTpl: '{name} is {age} years old'
});