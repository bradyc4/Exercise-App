<template>
<div>
  <div class="columns">
    <div class="column is-one-third">
        
      <div class="tabs">
          <ul>
          <li @click="index=0"><button class="button is-info">Search</button></li>
          <li @click="index=1"><button class="button is-info">Following</button></li>
          <li @click="index=2"><button class="button is-info">Followers</button></li>
          </ul>
      </div>
      <div v-if="index===0">
        
        <nav class="level">
          <div class="level-item">
            <div class="field has-addons" >
              <p class="control">
                  <input class="input" type="text" v-model="username">
              </p>
              <p class="control">
                <button class="button is-primary" @click="searchforuser(username)">
                  <strong>search</strong>
                </button>
              </p>
            </div>
          </div>
        </nav>
          
        
          <div v-for="p in userlist" :key="p._id" style="padding:3px">
            <a class="button is-primary" v-if="this.ourid!=p._id" @click="selectUser(p)">
              <strong>{{p.handle}}</strong>
            </a>
          </div>
      </div>

      <div v-if="index===1">
        <div v-for="p in ourfollowers" :key="p.handle" style="padding:3px">
            <a class="button is-primary" @click="selectFollower(p)">
              <strong>{{p.handle}}</strong>
            </a>
          </div>
      </div>
    </div>
    
    
    
    
    <div class="column is-two-thirds" style="text-align: center;">
      <div class="card">
        <div class="card-image">
            <img :src="p_pic" alt="Placeholder image" style="width:50%; height:50%; align:center;">
        </div>
        <div class="card-content" v-if="p_user">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">{{fullname}}</p>
              <p class="subtitle is-6">{{user.handle}}</p>
            </div>
          </div>

          <div class="content">
            {{bio}}
          </div>

          <button v-if="followBool" @click="unfollowUser(this.p_user)">Unfollow</button>
          <button v-else @click="followUser(this.p_user)">Follow</button>


        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Session from '../services/session';
import { Follow, Get, GetByHandle, Search, UnFollow } from '../services/users';
//import { deleteFollowee } from '../services/users';
//import { checkFollowing } from '../services/users';
let userlist = [];
export default {
    data() {
        return{
            //GetSubList,
            testuser: null,
            p_user: null,
            pid: null,
            ourid: Session.user._id,
            ourfollowers: Session.user.following,
            username: null,
            userlist,
            user: { handle: '', isApproved: false },
            fullname: null,
            bio: null,
            followBool: false,
            p_pic: "https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/256x256/plain/user.png",
            index:0,
            GetByHandle,
            //checkFollowing
        }
    },
    methods: {
        async searchforuser(string){
            this.userlist = await Search(string);
        },
        selectUser(p){
            this.p_user=p;
            this.pid=p._id;
            this.followBool=false;
            this.user.handle = p.handle;
            this.fullname = p.firstName+" "+p.lastName;
            this.bio = p.bio;
            this.p_pic = p.pic;
            for(let i=0; i<this.ourfollowers.length; i++){
                if(this.ourfollowers[i].handle===p.handle){
                    this.followBool=true;
                }
            }  
        },
        async selectFollower(p){
          GetByHandle(p.handle).then(x => {
            this.p_user = x;
            this.pid=x._id;
            this.followBool=true;
            this.user.handle = x.handle;
            this.fullname = x.firstName+" "+x.lastName;
            this.bio = x.bio;
            this.p_pic = x.pic;
          })

        },
        async followUser(followee){
            Follow(Session.user.handle, followee.handle).then(async x => {
                this.followBool=x.success;
                this.testuser = await Get(this.ourid).then(x => {
                    this.ourfollowers = x.following;
                });
            });
            
        },
        async unfollowUser(followee){
            UnFollow(Session.user.handle, followee.handle).then(async x => {
                this.followBool=!x.success;
                this.testuser = await Get(this.ourid).then(x => {
                    this.ourfollowers = x.following;
                });
            });
        }
    }
}
</script>

<style>
.li{
  color: white;
}
.a{
  color: white;
}
.title{
  color: white;
}
.subtitle{
  color: white;
}
</style>