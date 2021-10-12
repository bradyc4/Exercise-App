<template>
<div>

<div class="field">
  <label class="label">Username</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input" type="text" required v-model="user.usernameinput">
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
    <input class="input" type="password" required v-model="user.passwordinput">
    <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
  </p>
</div>

<div class="field is-grouped">
  <div class="control">
     <button class="button is-link" @click="submitForm(user.usernameinput, user.passwordinput)">Submit</button>
  </div>
</div>
<p>username: {{ user.usernameinput }} password: {{ user.passwordinput }} array: {{ array }}</p>
  </div>
</template>

<script>
export default {
    name: 'Signup',
    components: {
    },
    data() {
        return {
            //usernameinput: '',
            //passwordinput: '',
            user: {
                usernameinput: '',
                passwordinput: '',
            },
            array: [],
        }
    },
    mounted() {
        fetch('http://localhost:3000/users')
            .then(res => res.json())
            .then(data => this.array = data)
            .catch(err => console.log(err.message))
    },
    methods: {
        submitForm(x, y) {
            this.array.push({
                "username" : x,
                "password" : y,
            });
        }
    }
}
</script>

<style>

</style>