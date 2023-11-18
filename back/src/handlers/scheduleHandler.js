/* eslint-disable camelcase */
const {
  scheduleGet,
  schedulePost,
  scheduleDelete
} = require('../controllers/scheduleControllet')

const scheduleHandlerGet = async (req, res) => {
  try {
    res.status(200).json(await scheduleGet())
  } catch (error) {
    res.status(500).json(error)
  }
}

const scheduleHandlerPost = async (req, res) => {
  const { start, end } = req.body
  try {
    res.status(200).json(await schedulePost(start, end))
  } catch (error) {
    res.status(500).json(error)
  }
}

const scheduleHandlerDelete = async (req, res) => {
  const { scheduleId } = req.body
  try {
    res.status(200).json(await scheduleDelete(scheduleId))
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  scheduleHandlerGet,
  scheduleHandlerPost,
  scheduleHandlerDelete
}
