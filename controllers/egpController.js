const models = require("../models/index");

//selectAll
exports.showall = async (req, res, next) => {
  const getdataAll = await models.Egp_title.findAll({
    //attributes: { exclude: ["id"] },
    include: [
      {
        model: models.Egp_item,
        as: "goodsDetail",
        //attributes: { exclude: ["id","name", "egp_title_id"] },
      },
    ],
  });
  res.status(200).json({
    RECORDS: getdataAll,
  });
};

//selectOne
exports.showone = async (req, res, next) => {
  try {
    const { id } = req.params;
    const title_id = await models.Egp_title.findByPk(id, {
      attributes: { exclude: ["id"] },
      include: [
        {
          model: models.Egp_item,
          as: "goodsDetail",
          attributes: { exclude: ["id", "egp_title_id"] },
        },
      ],
    });

    if (!title_id) {
      const error = new Error("ไม่มีข้อมูลในระบบ");
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({
      RECORDS: title_id,
    });
  } catch (error) {
    return res.status(error.statusCode).json({
      error: {
        message: error.message,
      },
    });
  }
};

//delete
exports.destroy = async (req, res, next) => {
  try {
    const { id } = req.params;
    const title_id = await models.Egp_title.findByPk(id);

    if (!title_id) {
      const error = new Error("ไม่พบผู้ใช้นี้ในระบบ");
      error.statusCode = 404;
      throw error;
    }

    //delete fk table egp_item
    await models.Egp_item.destroy({
      where: {
        egp_title_id: id,
      },
    
    });
    //delete pk table egp_title
    await models.Egp_title.destroy({
      where: {
        id: id,
      },
    });

    res.status(200).json({
      message: "ลบข้อมูลเรียบร้อยแล้ว",
    });
  } catch (error) {
    return res.status(error.statusCode).json({
      error: {
        message: error.message,
      },
    });
  }
};
