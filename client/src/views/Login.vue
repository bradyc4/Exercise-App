<template>
<div class="column is-half is-offset-one-quarter">

<div class="field">
  <label class="label">Username</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input" type="text" v-model="username">
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
    <button class="button is-success" @click="login(username, password)">Login</button>
  </div>
  <div class="control">
    <button class="button is-link is-light">Cancel</button>
  </div>
</div>

  </div>
</template>

<script>
import session from "../services/session";
export default {
    name: 'Login',
    components: {
    },
    data: ()=> ({
      username: '',
      password: '',
      session,
      userarray: [],
    }),
    /*mounted() {
        fetch('http://localhost:3000/users')
            .then(res => res.json())
            .then(data => this.userarray = data)
            .catch(err => console.log(err.message))
    },*/
    methods: {
        login(){
            this.session.Login(this.username, this.password);
            this.$router.push('/');
        }
    }
}
</script>

<style>
.label{
  color: white;
}
</style>