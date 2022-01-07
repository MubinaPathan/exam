const mysql = require("mysql"); //import mysql
const Promise = require('bluebird');//import bluebird
Promise.promisifyAll(require("mysql/lib/Pool").prototype);
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

//db configuration

const dbinfo={
    host:"localhost",
    user:"root",
    password:"cdac",
    database:"Examm",
};

//create db connection
async function connectionCheck(){
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    console.log("created");
    await connection.endAsync();
}
 connectionCheck();

 const user={ msg: "i am giving my exam"};

 async function addUser(user){
     const connection = mysql.createConnection(dbinfo);
     await connection.connectAsync();
     console.log("AddUser-> Connection Created");
     let sql = `insert into message(msg) values(?)`;
     await connection.queryAsync(sql,[user.name]);
     await connection.endAsync();
     console.log("Record added!!!");
 }

 //addUser


 async function selectUser() {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
     console.log("AddUser-> Connection Created");
     let sql = `select * from message`;
     const list = await connection.queryAsync(sql);
     await connection.endAsync();
     return list;
 }

 selectUser();

 module.exports={addUser,selectUser};
 