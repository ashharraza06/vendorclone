using MyService as service from '../../srv/service';

annotate service.vendor with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'Pan No',
            Value : panno,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Vendor Code',
            Value : vencode,
        },
    ]
);
annotate service.vendor with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'panno',
                Value : panno,
            },
            {
                $Type : 'UI.DataField',
                Label : 'vencode',
                Value : vencode,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup1',
        },
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'po create',
            ID : 'pocreate',
            Target : 'poheaders/@UI.LineItem#pocreate',
        },
    ]
);
annotate service.poheader with @(
    UI.LineItem #pocreate : [
    ]
);
