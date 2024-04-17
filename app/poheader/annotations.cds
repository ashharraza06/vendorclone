using MyService as service from '../../srv/service';

annotate service.poheader with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Value : pono,
            Label : 'PO No',
        },
        {
            $Type : 'UI.DataField',
            Value : amount,
            Label : 'Amount',
        },
        {
            $Type : 'UI.DataField',
            Value : vendor,
            Label : 'Vendor Code',
        },
    ]
);
