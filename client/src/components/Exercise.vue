<template>
  <div>
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img :src="exercise.pic" alt="exercise.alt">
        </figure>
      </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img src="exercise.user.pic" alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{ exercise.label }}</p>
          <p class="subtitle is-6">{{ exercise.description }}</p>
        </div>
      </div>

      <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
        <a href="#">#css</a> <a href="#">#responsive</a>
        <br>
        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
      </div>
    </div>
  </div>
<div class="card">
  <footer class="card-footer">
    <a href="#" class="card-footer-item">Save</a>
    <a href="#" class="card-footer-item">Edit</a>
    <a href="#" class="card-footer-item">Delete</a>
  </footer>
</div>
  </div>
</template>

<script>
export default {
    props: {
        exercise: Object //what you expect to be passed in.
    }
}
</script>

<style>

</style>