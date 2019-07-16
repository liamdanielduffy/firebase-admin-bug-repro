import { initializeApp, credential } from "firebase-admin";
import getKey from "./getKey";

export default () => {
    const key = getKey();
    console.log(key)
    console.log(typeof key)
	app = initializeApp({
		credential: credential.cert(key),
		databaseURL: "https://fir-bug-repro.firebaseio.com"
	});
	return app;
};
