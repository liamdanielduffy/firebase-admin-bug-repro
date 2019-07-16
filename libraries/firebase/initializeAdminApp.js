import { initializeApp, credential } from "firebase-admin";
import getKey from "./getKey";

export default () => {
	const key = getKey();
	app = initializeApp({
		credential: credential.cert(key)
	});
	return app;
};
