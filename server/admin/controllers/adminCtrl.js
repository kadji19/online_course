const jwt = require('jsonwebtoken');
const dataBase = require('../../middlewares/mysql');

exports.login = (req, res) => {
    const { pseudo, password } = req.body;
    console.log(req.body)
    const selectAdminQuery = 'SELECT * FROM admin WHERE pseudo = ?';

    dataBase.query(selectAdminQuery, [pseudo], (error, results) => {
        if (error) {
            return res.status(500).json({ message: "Internal Server Error" });
        }

        if (results.length < 1) {
            return res.status(401).json({ message: "Admin not found" });
        }

        const admin = results[0];
        const accessToken = jwt.sign(
            { id_admin: admin.id_admin },
            "My_TOKEN_SECRET",
            {
                expiresIn: "10m" 
            }
        );

        res.status(200).json({ accessToken });

       /*  bcrypt.compare(password, admin.password, (err, result) => {
            if (err) {
                return res.status(500).json({ message: "Internal Server Error" });
            }

            if (!result) {
                return res.status(401).json({ message: "Invalid credentials" });
            }

            const accessToken = jwt.sign(
                { id_admin: admin.id_admin },
                "My_TOKEN_SECRET",
                {
                    expiresIn: "10m" 
                }
            );

            res.status(200).json({ accessToken });
        }) */;
    });
};

