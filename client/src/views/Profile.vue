<template>
  <div>
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

    <div class="button" @click="edit" v-bind:class="{ 'is-hidden': editBool }">edit</div>
    <div class="button" @click="updateUser" v-bind:class="{ 'is-hidden': !editBool }">Submit</div>
  </div>
</template>

<script>
import Session from "../servicesold/session";
import { Update } from '../servicesold/users';
export default {
    data (){
        return ({ 
            user: { 
              id: Session.user.id,
              firstName: Session.user.firstName,
              lastName: Session.user.lastName,
              handle: Session.user.handle,
              pic: Session.user.pic,
              password: Session.user.password,
              bio: Session.user.bio,
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
          Update(Session.user.id, this.user);
          this.editBool=false;
        },
    }
}
</script>

<style>

</style>