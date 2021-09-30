const models = require('../models/index');


exports.index = async (req, res, next) => {
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
        message: "get api Success"
    });
    // if(req.body)
    // res.send({ "err": "errror" });

}

exports.carmodel = async (req, res, next) => {

    const modelCar = await models.CarModel.findAll({ limit: 100 });

    res.status(200).json({
        data: modelCar,
        message: "get api Success"
    });
}

exports.insertcar = async (req, res, next) => {
    try {
        const {
            licensePate,
            brand,
            model,
            annotation
        } = req.body;

        const insertdata = await models.Car.create({
            licensePate: licensePate,
            brand: brand,
            model: model,
            annotation: annotation

        });

        res.status(200).json({

            data: { licensePate },
            message: "insert data Succes"
        });

    } catch (error) {
        return res.status(error.statusCode).json({
            error: { message: error.message }
        })

    }
}

exports.updatecar = async (req, res, next) => {
    try {

        const idParam = req.params.id;

        const {

            licensePate,
            brand,
            model,
            annotation
        } = req.body;

        const updatecar = await models.Car.update({
            licensePate: licensePate,
            brand: brand,
            model: model,
            annotation: annotation

        }, {
            where: {
                id: idParam
            }
        });

        res.status(200).json({

            data: { idParam },
            message: "Update data Succes"
        });

    } catch (error) {
        return res.status(error.statusCode).json({
            error: { message: idParam }
        })

    }
}

exports.deletecar = async (req, res, next) => {
    console.log(1);
    try {
        console.log(2)
        const { id } = req.params;

        console.log(id)


        const data_delete = await models.Car.findByPk(id);

        await models.Car.destroy({
            where: { id: id }

        });

        res.status(200).json({

            message: "Delete data Succes"
        });

    } catch (error) {
        return res.status(error.statusCode).json({
            error: { error }
        })

    }
}