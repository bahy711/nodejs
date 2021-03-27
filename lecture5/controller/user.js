exports.getUsers = async (req, res) => {
    const users = await User.getAll()
    res.json(users)
}