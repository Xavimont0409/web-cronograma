const {
  levelGet,
  levelPost,
  levelDelete,
} = require('../controllers/levelController');

const levelHandlerGet = async (req, res) => {
  try {
    res.status(200).json(await levelGet());
  } catch (error) {
    res.status(500).json(error);
  }
};

const levelHanlderPost = async (req, res) => {
  const { level_name } = req.body;
  try {
    res.status(200).json(await levelPost(level_name));
  } catch (error) {
    res.status(500).json(error);
  }
};

const levelHandlerDelete = async (req, res) => {
  const { level_id } = req.body;
  try {
    res.status(200).json(await levelDelete(level_id));
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  levelHandlerGet,
  levelHanlderPost,
  levelHandlerDelete,
};
