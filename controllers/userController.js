const userModel = require('../models/User');
const { verify } = require('../googleTokenValidation');
const connection = require('../db');

exports.loginUser = async(req, res) => {
    const verifiedUser = await verify(req.body.token).catch(console.err);

    if (verifiedUser.gId) {
        const user = verifiedUser;

        //find if existing
        const dbUser = await userModel.findOne({ gId: user.gId }).catch(console.error);

        //if user exist
        if (dbUser) {
            req.session.user = dbUser;
            res.json({ user: dbUser, redir: '/dashboard' });
        } else { //save new user
            const newUser = new userModel(user);
            req.session.user = newUser;
            await newUser.save();
            res.json({ user: newUser, redir: 'edit' });
        }
    } else {
        res.json({ error: 'login failed.' });
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
        res.json(req.session.user);
    } else {
        res.json(null);
    }
}

exports.editUser = async(req, res) => {
    var edit = req.body;

    var response = await userModel.updateOne({ gId: req.session.user.gId }, edit);

    if (response.ok === 1) {
        const updated = await userModel.findOne({ gId: req.session.user.gId });
        req.session.user = updated;
        res.json({ updated });
    } else {
        res.json({ err: 'update failed.' });
    }
}