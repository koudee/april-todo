const accessModel = require("../Models/accessModel");

const rateLimiting =async (req,res,next) =>{

    console.log(res.session.id);
    const sid = res.session.id;
//find the entry in accessDB
try {
const accessDb = await accessModel.findOne({sessionId: sid});

//if null then it's first request

if(!accessDb)
    {
        const accessObj = new accessModel({
             sessionId: sid,
             time: Date.now()
        })
        await accessObj.save()
        next();
        return;
    }

console.log((Date.mow(), accessDb.req_time)/(1000));
const diff = (Date.mow(), accessDb.req_time)/(1000);

if(diff<1)
   { return res.send({
        status:400,
        message: "please wait for some time, too many requests"
    })}

//update the time if the diff is greater than the logic
    await accessModel.findOneAndUpdate({sessionId: sid}, {req_time: Date.now()})


next();
} catch (error) {
    return res.send({
        status: 500,
        message: "Internal Server Error",
        error: error
    });
}
    return res.send("all ok")
    // next()
};

module.exports = rateLimiting;