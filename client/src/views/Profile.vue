<template>
  <div>
    <div class="notification" v-bind:class="{ 'is-hidden': hideBool, 'is-danger': dangerBool, 'is-success': !dangerBool }">
      <button class="delete" @click="hideBool = true"></button>
      {{notimessage}}
    </div>

    <label class="label">First Name</label>
      <input class="input" type="text" v-model="user.firstName" v-bind:class="{ 'is-hidden': !editBool }">
      <div v-bind:class="{ 'is-hidden': editBool }">{{user.firstName}}</div>

    <label class="label">Last Name</label>
      <input class="input" type="text" v-model="user.lastName" v-bind:class="{ 'is-hidden': !editBool }">
      <div v-bind:class="{ 'is-hidden': editBool }">{{user.lastName}}</div>

    <label class="label">Handle</label>
      <input class="input" type="text" v-model="user.handle" v-bind:class="{ 'is-hidden': !editBool }">
      <div v-bind:class="{ 'is-hidden': editBool }">{{user.handle}}</div>

    <label class="label">Bio</label>
      <input class="input" type="text" v-model="user.bio" v-bind:class="{ 'is-hidden': !editBool }">
      <div v-bind:class="{ 'is-hidden': editBool }">{{user.bio}}</div>

    <label class="label">Profile Pic</label>
      <input class="input" type="text" v-model="user.pic" v-bind:class="{ 'is-hidden': !editBool }">
      <div v-bind:class="{ 'is-hidden': editBool }">{{user.pic}}</div>
      <img :src="user.pic" alt="Placeholder image" style="width:25%; height:25%; align:center;">

    <div>
      <div class="button" @click="edit" v-bind:class="{ 'is-hidden': editBool }">edit</div>
      <div class="button" @click="updateUser" v-bind:class="{ 'is-hidden': !editBool }">Submit</div>
    </div>
    
  </div>
</template>

<script>
import Session from "../services/session";
import { Update } from '../services/users';
export default {
    data (){
        return ({ 
            user: { 
              firstName: Session.user.firstName,
              lastName: Session.user.lastName,
              handle: Session.user.handle,
              pic: Session.user.pic,
              password: Session.user.password,
              bio: Session.user.bio,
              isAdmin: Session.user.isAdmin,
              emails: Session.user.emails,
              following: Session.user.following,
            },
            Session,
            editBool: false,
            hideBool: true,
            dangerBool: false,
            notimessage: null,
        })
    },
    methods: {
        edit(){
          this.editBool=true;
        },
        updateUser(){
          if(this.firstName && this.lastName && this.handle){
            Update(Session.user._id, this.user);
            this.editBool=false;
            this.dangerBool=false;
            this.notimessage="Successfully updated profile"
            this.hideBool=false;
          } else {
            this.notimessage="Please enter valid inputs for all fields"
            this.dangerBool=true;
            this.hideBool=false;
          }
        },
    }
}
</script>

<style>

</style>