module.exports = cds.service.impl(async function(){
    this.on('boost', async (req) => {
            // Implement the logic for the 'boost' action
            console.log('this is boost function');
            return {
                "NODE_KEY": "Dummy"
            };
        });
    });