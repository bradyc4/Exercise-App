<template>
  <div class="section">
      <h1 class="title"> Feed Page </h1>
      
      <div class="columns">
        <div class="column is-one-third">
           <div class="dropdown">
              <div class="dropdown-trigger">
                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu3">
                  <span>Click me</span>
                  <span class="icon is-small">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
                </button>
              </div>
              <div class="dropdown-menu" id="dropdown-menu3" role="menu">
                <div class="dropdown-content">
                  <a href="#" class="dropdown-item">
                    Overview
                  </a>
                  <a href="#" class="dropdown-item">
                    Modifiers
                  </a>
                  <a href="#" class="dropdown-item">
                    Grid
                  </a>
                  <a href="#" class="dropdown-item">
                    Form
                  </a>
                  <a href="#" class="dropdown-item">
                    Elements
                  </a>
                  <a href="#" class="dropdown-item">
                    Components
                  </a>
                  <a href="#" class="dropdown-item">
                    Layout
                  </a>
                  <hr class="dropdown-divider">
                  <a href="#" class="dropdown-item">
                    More
                  </a>
                </div>
              </div>
          </div>         
        </div>
        <div class="column is-two-thirds">

            <div class="post" v-for=" (p, i) in posts" :key="p.src">
                <post :post="p" @remove="remove(p, i)" />
            </div>

        </div>
      </div>
  </div>
</template>

<script>
import Post from '../components/Post.vue';
import session from "../services/session";
import { Add, Delete, GetFeed } from "../services/posts";
//import PostEdit from "../components/Post-edit.vue";

const newPost = ()=> ({ user: session.user, user_handle: session.user.handle })

export default {
    components: {
        Post,
        //PostEdit
    },
    data: ()=> ({
        posts: [],
        newPost: newPost()
    }),
    async mounted(){
        this.posts = await GetFeed(session.user.handle)
    },
    methods: {
        async remove(post, i){
            console.log({post})
            const response = await Delete(post._id)
            if(response.deleted){
                this.posts.splice(i, 1)
            }
        },
        async add(){
            console.log("Adding new post at " + new Date())
            const response = await Add(this.newPost);
            console.log({ response });

            if(response){
                this.posts.unshift(response);
                this.newPost = newPost();
            }
        }
    }
}

</script>

<style>
    .card {
        margin-bottom: 10px;
    }
</style>