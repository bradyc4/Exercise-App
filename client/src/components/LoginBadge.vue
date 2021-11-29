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
        <div class="dropdown is-right" :class="{'is-active': isActive }">
              <div class="dropdown-trigger" @click="isActive = !isActive">
                <button class="button is-link" aria-haspopup="true" aria-controls="dropdown-menu">
                  <span>{{name}}</span>
                  <span class="icon is-small">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
                </button>
              </div>
              <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content">
                  <a class="dropdown-item">
                      <a class="button is-light" @click="logout">
                        Log Out
                      </a>
                      <router-link class="button is-light" to="/profile">
                        Profile
                      </router-link>
                  </a>
                </div>
              </div>
            </div>
    </div>
    
</template>

<script>
import Session from "../services/session";

export default {
    data (){
        return ({ 
            Session,
            isActive: false,
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
            this.$router.push('/');
        },
        test(){
            console.log(Session.user.firstName);
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