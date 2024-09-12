using { ouzizidb.master as master, 
        ouzizidb.trans as transaction } from '../db/demo';

service MyService {

    entity StudentSet as projection on master.student;
    entity StandardSet as projection on master.standards;
    entity BookSet as projection on master.books;
    entity BookRentalSet as projection on transaction.rentals;
    
}