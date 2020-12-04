/**Verifies Google Tokens for User Authentication */

const { OAuth2Client } = require('google-auth-library');

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const client = new OAuth2Client(CLIENT_ID);

exports.verify = async(token) => {

    const ticket = await client.verifyIdToken({
        idToken: token
    });

    const payload = ticket.getPayload();


    const user = {
        gId: payload.sub,
        name: payload.name,
        email: payload.email
    }

    return new Promise((resolve, rejected) => {
        resolve(user);
        rejected(null);
    });
}