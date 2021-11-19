<template>
    <div class="buttons" v-if="!Session.user">
          <router-link class="button is-primary" to="/signup">
            <strong>Sign up</strong>
          </router-link>
          <router-link class="button is-light" to="/login">
            Log in
          </router-link>
    </div>
    <div v-else>
        {{name}}
        <a class="button is-light" @click="logout">
             Log Out
        </a>
        <router-link class="button is-light" to="/profile">
             Profile
        </router-link>
    </div>
</template>

<script>
import Session from "../services/session";

export default {
    data (){
        return ({ 
            Session
        })
    },
    methods: {
        login(){
            this.$router.push('/login');
            //this.Session.Login();
        },
        signup(){
            this.$router.push('/signup');
            //this.Session.Login();
        },
        logout(){
            this.Session.user = null;
        }
    },
    computed:{
        name(){
            return this.Session.user.firstName + ' ' + this.Session.user.lastName;
        }
    }
}
</script>

<style>

</style>