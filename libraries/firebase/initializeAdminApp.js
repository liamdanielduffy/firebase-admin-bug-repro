import getKey from "./getKey";
const admin = require("firebase-admin");
import uuidv4 from 'uuid/v4'

export default () => {
    const key = getKey();
    const name = uuidv4()
	let app = admin.initializeApp({
        credential: admin.credential.cert(key),
        databaseURL:"https://fir-bug-repro.firebaseio.com",
        name
	});
	return app;
};
