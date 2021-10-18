<template>

<div class="column is-half is-offset-one-quarter">


<div class="notification is-danger" v-bind:class="{ 'is-hidden': errorBool }">
  <button class="delete" @click="hideError"></button>
  {{errormessage}}
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
            errorBool: true, 
            Add,
            errormessage: null,
            user: { 
              firstName: '',
              lastName: '',
              handle: '',
              pic: '',
              password: '',
              isAdmin: false,
              emails: [
              ],
              following: [ { handle: '@vp', isApproved: true }, { handle: '@johnsmith', isApproved: true }, ],
              get name(){ return this.firstName + ' ' + this.lastName },
            },
            array: [],
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
          try {
            if(this.email != null){
              this.user.emails.push(this.email);
              console.log("wwwww");
            }
            Add(this.user);
            this.$router.push('/login');
          } catch (error) {
            this.errorBool=false;
            this.errormessage = error.msg;
          }
        },
        hideError(){
          this.errorBool=true;
        }
    }
}
</script>

<style>
.label{
  color: white;
}
</style>