module.exports = (srv) => {
    srv.on('dora', async (req) => {
        return `Hello ${req.data.name}`;
    });
};