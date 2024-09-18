using { ouzizi.db.master, ouzizi.db.transaction } from '../db/data-model';

service CatalogService @(path:'CatalogService') {
    @Capabilities : {Deletable}
    entity BusinessPartnerSet as projection on master.businesspartner;
    entity AddressSet as projection on master.address;
    //@readonly
    entity EmployeeSet as projection on master.employees;
    entity ProductSet as projection on master.product;
    entity POs as projection on transaction.purchaseorder{
        *,
        case OVERALL_STATUS
           when 'N' then 'New'
           when 'P' then 'Pending'
           when 'X' then 'Rejected'
           when 'A' then 'Approved'
           when 'D' then 'Delivered' end as OverallStatus : String(10),
        case OVERALL_STATUS
           when 'N' then 2
           when 'P' then 2
           when 'X' then 1
           when 'A' then 3
           when 'D' then 3 end as ColorCoding : Integer,
        Items
    } actions{
         @cds.odata.bindingparameter.name:'_ouzizi'
         @Common.SideEffects:{
            TargetProperties:['_ouzizi/GROSS_AMOUNT']
         }
         action boost () returns POs;
         function largestOrder() returns POs;
    }
    entity POItems as projection on transaction.poitems;
   

}
