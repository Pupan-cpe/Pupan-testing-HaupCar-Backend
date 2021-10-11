const models = require('../models/index');


exports.index = async (req, res, next) => {
    const Fruit = await models.Fruit.findAll({
        attributes: [
            "id",
            "Name",
            "img",
           
        ]
    });
    res.status(200).json({
        data: Fruit,
        message: "get api Success"
    });

}



exports.insertfruit = async (req, res, next) => {
    try {
        const {
            Name,
            img,
           
        } = req.body;

        const insertdata = await models.Fruit.create({
            Name: Name,
            img: img,
          

        });

        res.status(200).json({

            // data: { "" },
            message: "insert data Succes"
        });

    } catch (error) {
        return res.status(error.statusCode).json({
            error: { message: error.message }
        })

    }
}

exports.updatefruit = async (req, res, next) => {
    try {

        const idParam = req.params.id;

        const {

            Name: Name,
            img: img,
        } = req.body;

        const updatefruit = await models.Fruit.update({
            Name: Name,
            img: img,
           

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

exports.deletefruit = async (req, res, next) => {
    console.log(1);
    try {
        console.log(2)
        const { id } = req.params;

        console.log(id)


        const data_delete = await models.Fruit.findByPk(id);

        await models.Fruit.destroy({
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