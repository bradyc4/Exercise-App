import { Login } from "./users";

const session = {
    user: null,
    messages: [],
    Login(handle, password){
        const user = Login(handle, password)
        this.user = user.user
    }
};

export default session;

//export function