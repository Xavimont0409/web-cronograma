const { Router } = require("express");
const {
  levelHandlerGet,
  levelHanlderPost,
  levelHandlerDelete,
} = require("../handlers/levelHandler");

const levelRouter = Router();

levelRouter.get("/", levelHandlerGet);
levelRouter.post("/", levelHanlderPost);
levelRouter.delete("/", levelHandlerDelete);

module.exports = levelRouter;
