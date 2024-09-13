using { ouzizi.cds } from '../db/CDSViews';

service MyService @(path: 'MyService'){

    function dora(name: String(20)) returns String;
    entity ProductOrdersSet as projection on cds.CDSViews.ProductOrders{
        *,
        ProductOrders
    };
}
