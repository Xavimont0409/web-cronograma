/* eslint-disable camelcase */
const {
  studentsGet,
  studentsPost,
  studentsPut,
  studentsDelete
} = require('../controllers/studentsController')

const studentsHandlerGet = async (req, res) => {
  try {
    res.status(200).json(await studentsGet())
  } catch (error) {
    res.status(500).json(error)
    console.log(error)
  }
}

const studentsHandlerPost = async (req, res) => {
  const { studentName, studenLastName, age, gender, email, phone, guardianName, typeOfRelation, scheduleId, levelId, typeclassId, paymentId } = req.body
  try {
    res
      .status(200)
      .json(await studentsPost(studentName, studenLastName, age, gender, email, phone, guardianName, typeOfRelation, scheduleId, levelId, typeclassId, paymentId))
  } catch (error) {
    res.status(500).json(error)
    console.log(error)
  }
}

const studentsHandletPut = async (req, res) => {
  const { studentId, studentName, studenLastName, age, gender, email, phone, guardianName, typeOfRelation, scheduleId, levelId, typeclassId, paymentId } = req.body
  try {
    res
      .status(200)
      .json(await studentsPut(studentId, studentName, studenLastName, age, gender, email, phone, guardianName, typeOfRelation, scheduleId, levelId, typeclassId, paymentId))
  } catch (error) {
    res.status(500).json(error)
    console.log(error)
  }
}

const studentsHandlerDelete = async (req, res) => {
  const { studentId } = req.body
  try {
    res.status(200).json(await studentsDelete(studentId))
  } catch (error) {
    res.status(500).json(error)
    console.log(error)
  }
}

module.exports = {
  studentsHandlerGet,
  studentsHandlerPost,
  studentsHandletPut,
  studentsHandlerDelete
}
