const cds = require('@sap/cds');
const { employees } = cds.entities("ouzizi.db.master");
module.exports = (srv) => {
    srv.on('dora', async (req) => {
        return `Hello ${req.data.name}`;
    });

    srv.on('READ', 'ReadEmployeeSrv', async(req)=>{
        //Example of hardcoded data
        // return{
        //     "ID" : "2222-22",
        //     "nameFirst" : "pi"
        // }

        //Calling DB and adding extra logic
        const tx = await cds.tx(req);
        //Read and manipulate data
        // var returndata = [];
        // var resultats = await tx.run(SELECT.from(employees).limit(5));
        // for (let i=0; i < resultats.length; i++){
        //     const element = resultat[i];
        //     element.nameMiddle = 'Cool!'
        //     returndata.push(element);
        // }
        // return returndata;

        var whereCondition = req.data;
        if(whereCondition.hasOwnProperty("ID")){
            return await tx.run(SELECT.from(employees).limit(2).where(whereCondition));
        }else{
            return await tx.run(
                SELECT.from(employees).limit(2).where(
                    {"sex": 'M' })
        );
  };
})
}