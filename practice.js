//adding a post
//route:
router.post("/:postId", postComment)

//controller function:
export const postComment = (req, res) => {
    const insertQuery = "INSERT INTO comments(`desc`, `createdAt`, `userId`, `postId`) VALUES(?, ?, ?, ?)"
    const payload = [
        req.body.desc,
        moment.now(),
        req.body.userId,
        req.query.postId,
    ]

    db.query(insertQuery, payload, (err, data) => {
        if(err) res.status(404).json("post not found");
        res.status(200).json("comment added successfully");
    });
}



