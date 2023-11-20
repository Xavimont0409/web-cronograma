/* eslint-disable camelcase */
const { Student, Schedule, Level, TypeClass, Payment } = require('../db.js')

const studentsGet = async () => {
  const allStudents = await Student.findAll({
    include: [{ model: Schedule }, { model: Level }, { model: TypeClass }, { model: Payment }]
  })
  return allStudents
}

const studentsPost = async (studentName, studenLastName, age, gender, email, phone, guardianName, typeOfRelation, scheduleId, levelId, typeclassId, paymentId) => {
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
  const scheduleBdd = await Schedule.findAll({ where: { schedule_id: scheduleId } })
  const levelBdd = await Level.findAll({ where: { level_id: levelId } })
  const typeclassBdd = await TypeClass.findAll({ where: { type_class_id: typeclassId } })
  const paymentBdd = await Payment.findAll({ where: { payment_id: paymentId } })

  await newStudents.addSchedule(scheduleBdd)
  await newStudents.addLevel(levelBdd)
  await newStudents.addTypeClass(typeclassBdd)
  await newStudents.addPayment(paymentBdd)

  const userCreated = await Student.findOne({
    where: { student_id: newStudents.student_id },
    include: [{ model: Schedule }, { model: Level }, { model: TypeClass }, { model: Payment }]
  })

  return userCreated
}

const studentsPut = async (studentId, studentName, studenLastName, age, gender, email, phone, guardianName, typeOfRelation, scheduleId, levelId, typeclassId, paymentId) => {
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

  await findStudents.save()

  // Update relationships
  if (scheduleId) await findStudents.setSchedules([scheduleId])
  if (levelId) await findStudents.setLevels([levelId])
  if (typeclassId) await findStudents.setTypeClasses([typeclassId])
  if (paymentId) await findStudents.setPayments([paymentId])

  const findUpdateStudents = await Student.findOne({
    where: { student_id: studentId },
    include: [{ model: Schedule }, { model: Level }, { model: TypeClass }, { model: Payment }]
  })
  return findUpdateStudents
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
