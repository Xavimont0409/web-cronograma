const studentsGet = async () => {
  return await Students.findAll();
};

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
  return await Students.create({
    student_name,
    studen_last_name,
    age,
    gender,
    email,
    phone,
    guardian_name,
    type_of_relation,
  });
};

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
	return await Students.update(
		{
			student_name,
			studen_last_name,
			age,
			gender,
			email,
			phone,
			guardian_name,
			type_of_relation,
		},
		{
			where: {
				student_id,
			},
		}
	);
};

const studentsDelete = (student_id) => {
	return Students.destroy({
		where: {
			student_id,
		},
	});
};

module.exports = {
  studentsGet,
  studentsPost,
  studentsPut,
  studentsDelete,
};
