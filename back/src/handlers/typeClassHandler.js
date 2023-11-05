const {
  typeClassGet,
  typeClassPost,
  typeClassDelete,
} = require("../controllers/typeClassController");

const typeClassHandlerGet = async(req, res) => {
  try {
    res.status(200).json(await typeClassGet());
  } catch (error) {
    res.status(500).json(error);
  }
};

const typeClassHandlerPost = async(req, res) => {
	const { type_class_name } = req.body;
  try {
    res.status(200).json(await typeClassPost(type_class_name));
  } catch (error) {
    res.status(500).json(error);
  }
};

const typeClassHandlerDelete = async(req, res) => {
  const { type_class_id } = req.body
	try {
    res.status(200).json(await typeClassDelete(type_class_id));
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  typeClassHandlerGet,
  typeClassHandlerPost,
  typeClassHandlerDelete,
};
