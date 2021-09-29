const models = require('../models/index');


exports.index = async(req, res, next) => {

    // const users = await models.User.findAll();

    const Cars = await models.Car.findAll({
        attributes: [
            "id",
            "licensePate",
            "brand",
            "model",
            "annotation"
        ]
    });
    res.status(200).json({
        data: Cars,
        message:"get api Success"
    });
    // if(req.body)
    // res.send({ "err": "errror" });

}