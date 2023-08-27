import Express from "express";
const app = Express();
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import commentRoutes from "./routes/comments.js";
import likeRoutes from "./routes/likes.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

//configuring env file
dotenv.config();

//middlewares
//didnt get this honestly, maybe to set cookies and next() is to continue with our ususla operations across the website
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(Express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/like", likeRoutes);

app.listen(8080, () => {
  console.log("backend listening on port 8080");
});
