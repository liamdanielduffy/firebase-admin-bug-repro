import getKey from "./getKey";
const admin = require("firebase-admin");

const key = getKey();
let app
if(admin.apps.length === 0) {
 app = admin.initializeApp({
	credential: admin.credential.cert(key),
	databaseURL: "https://fir-bug-repro.firebaseio.com"
});
}

export default app;