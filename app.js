const express = require("express");
const authRouter = require("./routes/auth");
// const postsRouter = require("./routes/board");
// const commentRouter = require("./routes/comment");
const app = express();
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use("/", express.urlencoded({extended: false}), [authRouter,
    // postsRouter,commentsRouter,likesRouter
])



app.listen(8080, () => {
  console.log("서버가 요청을 받을 준비가 됬어요");
});