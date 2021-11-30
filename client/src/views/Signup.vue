<template>

<div class="column is-half is-offset-one-quarter">


<div class="notification" v-bind:class="{ 'is-hidden': hideBool, 'is-danger': dangerBool, 'is-success': !dangerBool }">
  <button class="delete" @click="hideBool=true"></button>
  {{notimessage}}
</div>

<h1 style="text-align: center; font-size: 35px;">Sign Up</h1>
<div class="field">
  <label class="label">First Name</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input" type="text" required v-model="user.firstName">
  </div>
</div>

<div class="field">
  <label class="label">Last Name</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input" type="text" required v-model="user.lastName">
  </div>
</div>

<div class="field">
  <label class="label">Email</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input" type="text" required v-model="email">
  </div>
</div>

<div class="field">
  <label class="label">Username</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input" type="text" required v-model="user.handle">
  </div>
</div>

<div class="field">
    <label class="label">Password</label>
  <p class="control has-icons-left">
    <input class="input" type="password" required v-model="user.password">
  </p>
</div>

<div class="field is-grouped">
  <div class="control">
     <button class="button is-success" @click="signUp()">
     <strong>Submit</strong>
     </button>
  </div>
</div>
  </div>
</template>

<script>
import { Add } from '../services/users';
export default {
    name: 'Signup',
    components: {
    },
    data() {
        return {
            //usernameinput: '',
            email: null,
            hideBool: true, 
            Add,
            notimessage: null,
            user: { 
              firstName: '',
              lastName: '',
              handle: '',
              pic: '',
              password: '',
              bio: '',
              isAdmin: false,
              emails: [],
              following: [],
              schedule: [],
              get name(){ return this.firstName + ' ' + this.lastName },
            },
            array: [],
            dangerBool: false,
        }
    },
    /*mounted() {
        fetch('http://localhost:3000/users')
            .then(res => res.json())
            .then(data => this.array = data)
            .catch(err => console.log(err.message))
    },*/
    methods: {
        signUp() {
          if(this.user.firstName && this.user.lastName && this.user.handle && this.user.password && this.email){
            if(this.email != null){
              this.user.emails.push(this.email);
            }
            Add(this.user);
            this.notimessage="Successfully created account";
            this.dangerBool=false;
            this.hideBool=false;
            
            this.user.firstName=null;
            this.user.lastName=null;
            this.user.handle=null;
            this.user.password=null;
            this.email=null;
          } else {
            this.notimessage = "Please put valid inputs in all fields";
            this.dangerBool=true;
            this.hideBool=false;
          }
        },
    }
}
</script>

<style>
.label{
  color: white;
}
</style>