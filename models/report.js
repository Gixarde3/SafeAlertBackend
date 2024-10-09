const db = require('../database/db');

class Report{
    static async createReport(data){
        try{
            const report = await db.query('INSERT INTO reports SET ?', data);
            return report;
        }catch(err){
            throw err;
        }
    }

}
module.exports = Report;