const {
  studentsGet,
  studentsPost,
  studentsPut,
  studentsDelete,
} = require("../controllers/studentsController");

const studentsHandlerGet = async (req, res) => {
  try {
    res.status(200).json(await studentsGet());
  } catch (error) {
    res.status(500).json(error);
  }
};

const studentsHandlerPost = async (req, res) => {
  const {
    student_name,
    studen_last_name,
    age,
    gender,
    email,
    phone,
    guardian_name,
    type_of_relation,
  } = req.body;
  try {
    res
      .status(200)
      .json(
        await studentsPost(
          student_name,
          studen_last_name,
          age,
          gender,
          email,
          phone,
          guardian_name,
          type_of_relation
        )
      );
  } catch (error) {
    res.status(500).json(error);
  }
};

const studentsHandletPut = async (req, res) => {
  const {
    student_id,
    student_name,
    studen_last_name,
    age,
    gender,
    email,
    phone,
    guardian_name,
    type_of_relation,
  } = req.body;
  try {
    res
      .status(200)
      .json(
        await studentsPut(
          student_id,
          student_name,
          studen_last_name,
          age,
          gender,
          email,
          phone,
          guardian_name,
          type_of_relation
        )
      );
  } catch (error) {
    res.status(500).json(error);
  }
};

const studentsHandlerDelete = async (req, res) => {
  const { student_id } = req.body;
  try {
    res.status(200).json(await studentsDelete(student_id));
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  studentsHandlerGet,
  studentsHandlerPost,
  studentsHandletPut,
  studentsHandlerDelete,
};
