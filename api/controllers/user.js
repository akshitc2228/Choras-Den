import { json } from "express";
import { db } from "../connect.js";

export const fetchUser = (req, res) => {
    const fetchQuery = "SELECT * FROM user WHERE id = ?"

    db.query(fetchQuery, [req.params.userId], (err, data) => {
        if(err) return res.status(500).json(err);
        const { password, ...other} = data[0];

        return res.status(200).json(other);
    });
};