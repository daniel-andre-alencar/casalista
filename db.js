async function connect(){
    if(global.connection && global.connection.state !== 'disconnectd')
        return global.connection;

    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysqli://root@localhost:3306/casalista");
    console.log("Conectou no MySQL");
    global.connection = connection;
    return connection;
}

async function selectpresentes(){
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM presentes;');
    return rows;
}

module.exports = {selectpresentes}