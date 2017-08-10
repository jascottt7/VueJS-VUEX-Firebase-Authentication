<template>
    <div class=''>
        Dashboard View
        <br><br>
        <button class="btn btn-danger btn-sm signout-btn" @click="signOut">Sign Out</button>

        {{ $store.state }}
    </div>
</template>

<script>
  import { firebaseApp } from '../firebaseApp';

  export default {
    methods: {
      signOut() {
        this.$store.dispatch('signOut');
        firebaseApp.auth().signOut();
      },
    },
  };
</script>

<style>
  .signout-btn {
    position: absolute;
    text-align: right;
    top: 60px;
    right: 40px;
  }
</style>