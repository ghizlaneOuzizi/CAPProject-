using CatalogService as service from '../../srv/CatalogService';

annotate service.POs with @(
    UI.SelectionFields:[
        PO_ID,
        PARTNER_GUID.COMPANY_NAME,
        PARTNER_GUID.ADDRESS_GUID.COUNTRY,
        GROSS_AMOUNT
    ]
);
