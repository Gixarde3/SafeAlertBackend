const model = require('../models/report');
const dotenv = require('dotenv');
import OpenAI from "openai";

const openai = new OpenAI({
    organization: process.env.ORGANIZATION_ID,
    project: process.env.PROJECT_ID,
});
class Report{
    
    static async createReport(req, res){
        try{
            const report = await model.createReport(req.body);
            res.status(201).json(report);
        }catch(err){
            res.status(500).json({error: err});
        }
    }
}

module.exports = Report;