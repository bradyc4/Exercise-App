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
            
                    <a class="button is-primary" @click="search(username)">
                    <strong>search</strong>
                </a>
                
            </div>

        <div v-for="p in userlist" :key="p._id" style="padding:3px">
            <a class="button is-primary" @click="selectUser(p)">
                <strong>{{p.handle}}</strong>
            </a>
        </div>
    </div>
    {{ourfollowers}}
    <div class="column is-two-thirds">
        <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">{{fullname}}</p>
        <p class="subtitle is-6">{{user.handle}}</p>
      </div>
    </div>

    <div class="content">
      {{bio}}
    </div>
    <button v-if="followBool===false" @click="followUser(this.user)">Follow</button>
    <button v-else @click="unfollowUser(this.user)">Unfollow</button>
        
  </div>
</div>
    </div>
    </div>
</div>
</template>

<script>
import Session from '../servicesold/session';
import { GetSubList } from '../servicesold/users';
import { addFollowee } from '../servicesold/users';
import { deleteFollowee } from '../servicesold/users';
import { checkFollowing } from '../servicesold/users';
let userlist = [];
export default {
    data() {
        return{
            GetSubList,
            pid: null,
            ourid: Session.user.id,
            ourfollowers: Session.user.following,
            username: null,
            userlist,
            user: { handle: '', isApproved: false },
            fullname: null,
            bio: null,
            followBool: false,
            checkFollowing
        }
    },
    methods: {
        search(string){
            this.userlist = GetSubList(string);
            console.log("I hate this class with a burning passion, why didnt I take cybersecurity");
        },
        selectUser(p){
            console.log("session user id = "+this.ourid);
            console.log("selected user id = "+p.id);
            this.pid=p.id;
            this.followBool=false;
            this.user.handle = p.handle;
            this.fullname = p.firstName+" "+p.lastName;
            this.bio = p.bio;
            for(let i=0; i<this.ourfollowers.length; i++){
                if(this.ourfollowers[i].handle===p.handle){
                    this.followBool=true;
                }
            }  
        },
        followUser(followee){
            let followee2 = { handle: followee.handle, isApproved: followee.isApproved };
            addFollowee(this.ourid, followee2);
            this.followBool=true;
        },
        unfollowUser(followee){
            deleteFollowee(this.ourid, followee);
            this.followBool=false;
        }
    }
}
</script>

<style>

</style>