<template>
<div class="column is-half is-offset-one-quarter">

<div class="notification is-danger" v-bind:class="{ 'is-hidden': errorBool }">
  <button class="delete" @click="hideError"></button>
  {{errormessage}}
</div>

<h1 style="text-align: center; font-size: 35px;">Log In</h1>
<div class="field">
  <label class="label">Username</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input" type="text" v-model="handle">
  </div>
</div>

<div class="field">
  <label class="label">Password</label>
  <p class="control has-icons-left">
    <input class="input" type="password" v-model="password">
  </p>
</div>

<div class="field is-grouped">
  <div class="control">
    <button class="button is-success" @click="login(handle, password)"><strong>Login</strong></button>
  </div>
  <div class="control">
    <button class="button is-link is-light">Cancel</button>
  </div>
</div>

  </div>
</template>

<script>
import Session from "../services/session";
export default {
    name: 'Login',
    components: {
    },
    data: ()=> ({
      handle: '',
      password: '',
      Session,
      userarray: [],
      errormessage: null,
      errorBool: true,
    }),
    /*mounted() {
        fetch('http://localhost:3000/users')
            .then(res => res.json())
            .then(data => this.userarray = data)
            .catch(err => console.log(err.message))
    },*/
    methods: {
        async login(){
            this.Session.Login(this.handle, this.password).then(x => {
              if(x){
                this.errormessage = "Incorrect username or password";
                this.errorBool = false;
              } else {
                this.$router.push('/');
              }

            });
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