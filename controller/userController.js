const models = require('../models/index');


exports.index = async(req, res, next) => {

    // const users = await models.User.findAll();

    const users = await models.User.findAll({
        attributes: [
            'id','username','role'
        ]
    });
    res.status(200).json({
        message: users
    });
    // if(req.body)
    // res.send({ "err": "errror" });

}