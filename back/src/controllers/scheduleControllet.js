const { Schedule } = require('../db')

const scheduleGet = async() => {
	return await Schedule.findAll()
}

const schedulePost = async(start, end) => {
	const newSchedule = await Schedule.create({
		start,
		end
	})
	return newSchedule
}

const scheduleDelete = async(schedule_id) => {
	return await Schedule.destroy({
		where: {
			schedule_id
		}
	})
}

module.exports = {
	scheduleGet,
	schedulePost,
	scheduleDelete
	
}