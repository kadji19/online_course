const dataBase = require('../../middlewares/mysql')

exports.getCoursesByCategory = (req, res) => {
/*        const categoryId = req.params.categoryId;
 */       
        const categoryId = req.body.categoryId;
       let selectCoursesByCategoryQuery = 'SELECT * FROM cours WHERE id_categorie = ?';
       
       dataBase.query(selectCoursesByCategoryQuery, [categoryId], (err, result) => {
           if (err) {
               return res.status(500).json({ message: "Internal Server Error" });
           }
           res.status(200).json(result);
       });
   };

    exports.addStudentCours = (req, res) => {
       let insertCoursQuery = 'INSERT INTO cours (libelle_cours, Description_cours, Media, id_categorie, id_admin) VALUES (?, ?, ?, ?, 1);'
       
       const mediaUrl = `${req.protocol}://${req.get('host')}/files/${req.file.filename}`;
       dataBase.query(insertCoursQuery, [req.body.name, req.body.descrip, mediaUrl, req.body.id_categorie], (err, result) => {
           if (err) {
              throw(err)
           }
           res.status(201).json({ message: "insertion réussi" });
       });
   }; 
   
   