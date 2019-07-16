import initializeAdminApp from "libraries/firebase/initializeAdminApp";

const firebase = initializeAdminApp();

export default async () => {
    
    return {
        firebase
    }
} 