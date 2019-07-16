import initializeAdminApp from "libraries/firebase/initializeAdminApp";

//this throws an error on recompilation
const firebase = initializeAdminApp();    

export default async () => {  

    //this doesn't throw an error on recompilation
    // const firebase = initializeAdminApp();    

    return {
        firebase
    }
} 