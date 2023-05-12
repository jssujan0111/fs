const { resHandler } = require("../controllers/controller");
const { fakePersonGenerator } = require("../utils/fakePerson");
const { stringManupulate } = require("../utils/countString");
const { randomNum } = require("../utils/randNum")
exports.routes = {
    "/":{
        GET:(_req,res)=>{
            resHandler(res,{body:{msg:"Resource not found"}})
        }
    },
    "/randnum":{
        GET:(req,res)=>{
           const {query} = require("url").parse(req.url,true);
            const randNum = randomNum(query.start,query.end);
            resHandler(res,{body:{randNum}})
        }
    },
    "/ranperson":{
        GET:(req,res)=>{
            const {query} = require("url").parse(req.url,true);
            const searchParam = Object.keys(query ? query : {});
            const person = fakePersonGenerator(searchParam);
            // console.log(person);
            resHandler(res,{body:person})
        }
    },
    "/countletnumsym":{
        GET:(req,res)=>{
            const {query} = require("url").parse(req.url,true);
            const strCountRes = stringManupulate(query.string)
            resHandler(res,{body:strCountRes})
        }
    }
}

