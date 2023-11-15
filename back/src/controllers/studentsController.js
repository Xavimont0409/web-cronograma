/* eslint-disable camelcase */
const { Students } = require('../db.js')

const studentsGet = async () => {
  return await Students.findAll()
}

const studentsPost = async (
  student_name,
  studen_last_name,
  age,
  gender,
  email,
  phone,
  guardian_name,
  type_of_relation
) => {
  const findStudents = await Students.findOne({
    where: {
      student_name,
      email,
      phone
    }
  })

  if (findStudents) throw new Error('ALREADY_CATEGORY')

  const newStudents = await Students.create({
    student_name,
    studen_last_name,
    age,
    gender,
    email,
    phone,
    guardian_name,
    type_of_relation
  })

  return newStudents
}

const studentsPut = async (
  student_id,
  student_name,
  studen_last_name,
  age,
  gender,
  email,
  phone,
  guardian_name,
  type_of_relation
) => {
  const checkStudents = await Students.findOne({
    where: {
      student_name,
      email
    }
  })
  if (checkStudents) throw new Error('ALREADY_CATEGORY')

  const findStudents = await Students.findOne({
    where: { student_id }
  })

  if (student_name) findStudents.student_name = student_name
  if (studen_last_name) findStudents.studen_last_name = studen_last_name
  if (age) findStudents.age = age
  if (gender) findStudents.gender = gender
  if (email) findStudents.email = email
  if (phone) findStudents.phone = phone
  if (guardian_name) findStudents.guardian_name = guardian_name
  if (type_of_relation) findStudents.type_of_relation = type_of_relation

  const updateStudents = await findStudents.save()

  return updateStudents
}

const studentsDelete = (student_id) => {
  return Students.destroy({
    where: {
      student_id
    }
  })
}

module.exports = {
  studentsGet,
  studentsPost,
  studentsPut,
  studentsDelete
}
