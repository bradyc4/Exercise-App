<template>
<div>
    <div class="columns">
    <div class="column is-one-third">
        
            <div class="tabs">
                <ul>
                <li class="is-active"><a>Friends</a></li>
                <li><a>Search</a></li>
                </ul>
            </div>
            
            <div class="field">
                    <label class="label">Search For Users</label>
                    <div class="control has-icons-left has-icons-right">
                        <input class="input" type="text" v-model="username">
                    </div>
            
                    <a class="button is-primary" @click="search()">
                    <strong>search</strong>
                </a>
                
            </div>

        <div v-for="p in userlist" :key="p._id" style="padding:3px">
            <a class="button is-primary">
                <strong>{{p.handle}}</strong>
            </a>
        </div>
    </div>
    <div class="column is-two-thirds">
        
    </div>
    </div>
</div>
</template>

<script>
import { GetAll } from '../services/users'
let userlist = [];
export default {
    data() {
        return{
            GetAll,
            username: null,
            userlist
        }
    },
    methods: {
        search(){
            this.userlist = GetAll();
            console.log("I hate this class with a burning passion, why didnt I take cybersecurity");
        }
    }
}
</script>

<style>

</style>