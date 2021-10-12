<template>
<div>

<div class="field">
  <label class="label">Username</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input" type="text" v-model="username">
    <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </div>
</div>

<div class="field">
    <label class="label">Password</label>
  <p class="control has-icons-left">
    <input class="input" type="password" v-model="password">
    <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
  </p>
</div>

<div class="field is-grouped">
  <div class="control">
    <button class="button is-success" @click="login(username, password, userarray)">Login</button>
  </div>
  <div class="control">
    <button class="button is-link is-light">Cancel</button>
  </div>
</div>

  </div>
</template>

<script>
export default {
    name: 'Login',
    components: {
    },
    data() {
        return {
            username: '',
            password: '',
            userarray: [],
        }
    },
    mounted() {
        fetch('http://localhost:3000/users')
            .then(res => res.json())
            .then(data => this.userarray = data)
            .catch(err => console.log(err.message))
    },
    methods: {
        login(x, y, z) {
            for (let i = 0; i < z.length; i++){
                if (z[i].username === x){
                    if (z[i].password === y){
                        console.log("woopieeee");
                    }
                }
            }
        }
    }
}
</script>

<style>

</style>