/* eslint-disable camelcase */
const { Schedule } = require('../db')

const scheduleGet = async () => {
  return await Schedule.findAll()
}

const schedulePost = async (start, end) => {
  const findPost = await Schedule.findOne({
    where: {
      start,
      end
    }
  })

  if (findPost) throw new Error('ALREADY_CATEGORY')

  const newSchedule = await Schedule.create({
    start,
    end
  })
  return newSchedule
}

const scheduleDelete = async (scheduleId) => {
  return await Schedule.destroy({
    where: {
      schedule_id: scheduleId
    }
  })
}

module.exports = {
  scheduleGet,
  schedulePost,
  scheduleDelete
}
