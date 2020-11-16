const mysqlConfig = require('./config')
const mysql = require("mysql")

const pool = mysql.createPool({
    host:mysqlConfig.host,
    user:mysqlConfig.user,
    password:mysqlConfig.password,
    database:mysqlConfig.database
})

const query = (sql)=>{
    return new Promise((resovle,reject)=>{
        pool.getConnection((error,connection)=>{
            if(error){
                reject(error)
            }else{
                connection.query(sql,(error, results, fields)=>{
                    if(error){
                        reject(error)
                    }else{
                        resovle(results)
                    }
                    connection.release()
                })

            }
        })
    })
}

module.exports = query