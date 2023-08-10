const notFount = (req, res) => res.status(404).json({error:'Route Not exists'})
module.exports = notFount