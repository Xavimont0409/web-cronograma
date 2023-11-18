/* eslint-disable camelcase */
const { Student, Schedule, Level, TypeClass, Payment } = require('../db.js')

const studentsGet = async () => {
  const allStudents = await Student.findAll({
    include: [
      {
        model: Schedule,
        attributes: ['start', 'end'],
        through: {
          attributes: []
        }
      },
      {
        model: Level,
        attributes: ['level_name'],
        through: {
          attributes: []
        }
      },
      {
        model: TypeClass,
        attributes: ['type_class_name'],
        through: {
          attributes: []
        }
      },
      {
        model: Payment,
        attributes: ['payment_name', 'payment_date'],
        through: {
          attributes: []
        }
      }
    ]
  })
  return allStudents
}

const studentsPost = async (student_name, studen_last_name, age, gender, email, phone, guardian_name, type_of_relation, schedule_id, level_id, type_class_id, payment_id) => {
  const findStudents = await Student.findOne({ where: { student_name } })

  if (findStudents) throw new Error('ALREADY_STUDENTS')

  const newStudents = await Student.create({ student_name, studen_last_name, age, gender, email, phone, guardian_name, type_of_relation })
  const sheduleBdd = await Schedule.findAll({ where: { schedule_id } })
  const levelBdd = await Level.findAll({ where: { level_id } })
  const typeclassBdd = await TypeClass.findAll({ where: { type_class_id } })
  const paymentBdd = await Payment.findAll({ where: { payment_id } })

  await newStudents.addSchedule(sheduleBdd)
  await newStudents.addLevel(levelBdd)
  await newStudents.addTypeClass(typeclassBdd)
  await newStudents.addPayment(paymentBdd)

  return newStudents
}

const studentsPut = async (student_id, student_name, studen_last_name, age, gender, email, phone, guardian_name, type_of_relation) => {
  const checkStudents = await Student.findOne({ where: { student_name, email } })
  if (checkStudents) throw new Error('ALREADY_CATEGORY')

  const findStudents = await Student.findOne({
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
  return Student.destroy({ where: { student_id } })
}

module.exports = {
  studentsGet,
  studentsPost,
  studentsPut,
  studentsDelete
}
