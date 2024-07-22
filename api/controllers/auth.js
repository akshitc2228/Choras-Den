import { db } from "../connect.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
  const q = "SELECT * FROM user WHERE email = ?";

  db.query(q, [req.body.email], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("User already exists");
    //creating new user
    const salt = bcrypt.genSaltSync(10); //whats the sync for?
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    const q = "INSERT INTO user (`name`, `email`, `password`, `dob`, `city`) VALUE (?,?,?,?,?)";

    // ! Always query in order
    const values = [req.body.name, req.body.email, hashedPassword, new Date(req.body.dob), req.body.city];

    db.query(q, values, (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Welcome to the Den!");
    });
  });
};

export const login = (req, res) => {
  const q = "SELECT * FROM user WHERE email = ?";

  db.query(q, [req.body.email], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("User not found");

    const checkPassword = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    if (!checkPassword)
      return res.status(400).json("Incorrect pasword entered");

    const token = jwt.sign({ id: data[0].id }, process.env.TOKEN_KEY);

    const { password, ...others } = data[0];

    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);
  });
};

export const logout = (req, res) => {
  res.clearCookie("accessToken", {
    secure: true,
    sameSite: "none"
  }).status(200).json("Logged out!")
};
