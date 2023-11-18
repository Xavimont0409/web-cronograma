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

const studentsPost = async (studentName, studenLastName, age, gender, email, phone, guardianName, typeOfRelation, sheduleId, levelId, typeclassId, paymentId) => {
  const findStudents = await Student.findOne({ where: { student_name: studentName } })

  if (findStudents) throw new Error('ALREADY_STUDENTS')

  const newStudents = await Student.create({
    student_name: studentName,
    studen_last_name: studenLastName,
    age,
    gender,
    email,
    phone,
    guardian_name: guardianName,
    type_of_relation: typeOfRelation
  })
  const sheduleBdd = await Schedule.findAll({ where: { schedule_id: sheduleId } })
  const levelBdd = await Level.findAll({ where: { level_id: levelId } })
  const typeclassBdd = await TypeClass.findAll({ where: { type_class_id: typeclassId } })
  const paymentBdd = await Payment.findAll({ where: { payment_id: paymentId } })

  await newStudents.addSchedule(sheduleBdd)
  await newStudents.addLevel(levelBdd)
  await newStudents.addTypeClass(typeclassBdd)
  await newStudents.addPayment(paymentBdd)

  return newStudents
}

const studentsPut = async (studentId, studentName, studenLastName, age, gender, email, phone, guardianName, typeOfRelation) => {
  const checkStudents = await Student.findOne({ where: { student_name: studentName, email } })
  if (checkStudents) throw new Error('ALREADY_CATEGORY')

  const findStudents = await Student.findOne({
    where: { student_id: studentId }
  })

  if (studentName) findStudents.student_name = studentName
  if (studenLastName) findStudents.studen_last_name = studenLastName
  if (age) findStudents.age = age
  if (gender) findStudents.gender = gender
  if (email) findStudents.email = email
  if (phone) findStudents.phone = phone
  if (guardianName) findStudents.guardian_name = guardianName
  if (typeOfRelation) findStudents.type_of_relation = typeOfRelation

  const updateStudents = await findStudents.save()

  return updateStudents
}

const studentsDelete = (studentId) => {
  return Student.destroy({ where: { student_id: studentId } })
}

module.exports = {
  studentsGet,
  studentsPost,
  studentsPut,
  studentsDelete
}
