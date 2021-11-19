<template>
  <div>
    <label class="label">First Name</label>
      <input class="input" type="text" v-model="user.firstName" v-bind:class="{ 'is-hidden': !editBool }">
      <div v-bind:class="{ 'is-hidden': editBool }">{{Session.user.firstName}}</div>

    <label class="label">Last Name</label>
      <input class="input" type="text" v-model="user.lastName" v-bind:class="{ 'is-hidden': !editBool }">
      <div v-bind:class="{ 'is-hidden': editBool }">{{user.lastName}}</div>

    <label class="label">Handle</label>
      <input class="input" type="text" v-model="user.handle" v-bind:class="{ 'is-hidden': !editBool }">
      <div v-bind:class="{ 'is-hidden': editBool }">{{user.handle}}</div>

    <div class="button" @click="edit" v-bind:class="{ 'is-hidden': editBool }">edit</div>
    <div class="button" @click="updateUser" v-bind:class="{ 'is-hidden': !editBool }">Submit</div>
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
              isAdmin: Session.user.isAdmin,
              emails: Session.user.emails,
              following: Session.user.following,
              get name(){ return this.firstName + ' ' + this.lastName },
            },
            Session,
            editBool: false,
        })
    },
    methods: {
        edit(){
          this.editBool=true;
        },
        updateUser(){
          Update(Session.user._id, this.user);
          this.editBool=false;
          this.Session.user.firstName = Session.user.firstName;
        }
    }
}
</script>

<style>

</style>