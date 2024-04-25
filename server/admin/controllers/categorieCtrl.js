const dataBase = require('../../middlewares/mysql');

exports.getCategory = (req, res) => {
    let selectAllCategoryQuery = 'SELECT * FROM categorie';
    dataBase.query(selectAllCategoryQuery, (err, result) => {
        if (err) {
            return res.status(500).json({ message: "Internal Server Error" });
        }
        res.status(200).json(result);
    });
};


