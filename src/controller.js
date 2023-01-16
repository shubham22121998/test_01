const users = require('./model')


const createUser = async (req, res) => {
    let { name, age } = req.body;


    let result = await users.create({ name, age })
    if (result) {
        return res.status(200).json({ message: 'user created' })
    } else {
        return res.status(400).json({ message: 'user not created' })

    }

}


const getUser = async (req, res) => {
    let perPage = parseInt(req.query.perPage) || 10
    let page = parseInt(req.query.page) || 1
    let sort = parseInt(req.query.sort) || -1

    let result = await users.find({ name: { '$regex': req.query.name, '$options': 'i' } }).sort({ 'age': sort }).skip((perPage * page) - perPage).limit(perPage)


    if (result) {
        return res.status(200).json({ message: 'success', result })
    } else {
        return res.status(200).json({ message: 'record not found', result })

    }

}


module.exports = {
    createUser,
    getUser
}