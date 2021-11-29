<template>
<div>
    <div class="columns">
    <div class="column is-one-third">
        <div v-for="p in userlist" :key="p._id">
                <h3 v-if="user._id!=p._id"> 
                    {{p.handle+" Admin: "+p.isAdmin}} 
                    <button @click="deleteUser(p._id)">Delete</button>
                </h3>
            
        </div>
    </div>
    <div class="column is-two-thirds">
        
    </div>
    </div>
</div>
</template>

<script>
import Session from '../services/session';
import { GetAll } from '../services/users';
import { Delete } from '../services/users';

export default {
    data() {
        return{
            user: Session.user,
            GetAll,
            username: null,
            userlist: [],
            Delete,
            Session
        }
    },
    methods: {
        async deleteUser(id){
            Delete(id);
            this.userlist = await GetAll();
        }
    },
    async mounted(){
        
        this.userlist = await GetAll();
    }
}
</script>

<style>
.a {
    color: white;
}
</style>