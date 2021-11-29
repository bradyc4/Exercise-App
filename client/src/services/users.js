import { api } from "./myFetch";

export function GetAll() { return api('users'); }
export function Get(user_id) { return  api('users/' + user_id); }
export function GetByHandle(handle) { return  api('users/byhandle/' + handle); } 

export function Add(user) {
     return api('users/register', user);
}


export function Update(user_id, user) {
    return api('users/' + user_id, user, 'PATCH');
}

export function Delete(user_id) {
    return api('users/' + user_id, {}, 'DELETE');
}

export function Login(handle, password){
    return api('users/login', { handle, password });
}

export function Search(string){
    return api('users/search/' + string);
}

export function Follow(follower, followee){
    return api('users/' + follower + "/follow/" + followee, {}, 'POST');
}

export function UnFollow(follower, followee){
    return api('users/' + follower + "/follow/" + followee, {}, 'DELETE');
}

export function Approve(follower, followee){
    return api('users/' + follower + "/approve/" + followee, {}, 'PATCH');
}