const userModel = require('../models/User');
const { verify } = require('../googleTokenValidation');
const connection = require('../db');

exports.loginUser = async(req, res) => {
    const verifiedUser = await verify(req.body.token).catch(console.err);

    if (verifiedUser.gId) {
        await connection(); //db connect
        const user = verifiedUser;

        //find if existing
        const dbUser = await userModel.findOne({ gId: user.gId }).catch(console.error);

        //if user exist
        if (dbUser) {
            req.session.user = dbUser;
            res.json({ url: "/dashboard" });
        } else { //save new user
            const newUser = new userModel(user);
            await newUser.save();
            res.json({ url: "/edit" });
        }
    }
};

exports.logoutUser = async({ session }, res) => {
    try {
        const user = session.user;
        if (user) {
            session.destroy(err => {
                if (err) throw err;

                res.clearCookie(process.env.SESSION_NAME);
                res.json({ url: '/' });
            });
        }
    } catch (err) {
        console.log(err);
    }
}

exports.getSessionUser = async(req, res) => {
    if (req.session.user) {
        res.status(200).json(req.session.user);
    } else {
        res.status(200).json(null);
    }
}