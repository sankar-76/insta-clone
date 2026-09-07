const express = require("express")
const postRouter = express.Router()
const postController = require("../controllers/post.controller")
const multer = require("multer")
const upload = multer({storage:multer.memoryStorage()})
const identifyUser =  require("../middleware/auth.middleware")


/**@abstract 
 * Creating an simple api 
 * the method will going to be post method
 * PPOST/API/POSTS [protected]
 * re.body = {caption.iamge}
 */

postRouter.post("/", upload.single
  ("image"), identifyUser ,postController.createPostController)
/**
 * GET/api/posts/ [protected]
 */

postRouter.get("/", identifyUser ,postController.getPostController)

/**
 * GET/api/posts/details/:posted
 * :- return an detail specific post with id, also check whether the post belongs to the user that the request come from
 */

postRouter.get("/details/:postId", postController.getPostDetailsController)

module.exports = postRouter