const jwt = require('jsonwebtoken');
const {decodeToken} = require('../utilities/TokenUtility');
module.exports = async (req, res, next) => {
    try {
        let token = req.headers['token'];
        if (!token) {
            token = req.cookies['token'];
        }
        const decodedData = decodeToken(token);
        if (decodedData !== null) {
            const email = decodedData['email'];
            const userID = decodedData['userID'];
            req.headers.email = email;
            req.headers.userID = userID;
            next();
        } else {
            res.status(401).json({status: 'unauthorized', message: 'you\'re an unauthorized user.'});
        }

    } catch (e) {
        return {status: 'error', message: e.toString()};
    }
}