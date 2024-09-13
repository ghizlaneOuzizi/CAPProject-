
module.exports = cds.service.impl(async function(){

    const {POs} = this.entities;

    this.on('boost', async (req) => {
             // Implement the logic for the 'boost' action
             console.log('this is boost function');
           
             try{
                 const ID= req.params[0]
                 //start a db transaction
                 const tx = cds.tx(req);
                 //CDS Query language - communication to DB in agnostic manner
                 await tx.update(POs).with({
                        GROSS_AMOUNT: { '+=' : 20000 }
                 }).where(ID);             
                } catch(error){
                 return "ERROR "+ error.toString();
                }
         });
         this.on('largestOrder', async (req) => {
            // Implement the logic for the 'boost' action
            console.log('this is LargestOrder function');
          
            try{
                const tx = cds.tx(req);
                const recordData = tx.read(POs).orderBy({
                    GROSS_AMOUNT : 'desc'
                }).limit(1);  
                return recordData;  
               } catch(error){
                return "ERROR "+ error.toString();
               }
             
        });
     });