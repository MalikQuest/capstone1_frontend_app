<template>
  <div class="container">
    <h1>All Users</h1>
    <div v-for="user in users">
      <h2>{{ user.name }}</h2>
      <p>email: {{ user.emai }}</p>
      <p>height: {{ user.height }}</p>
      <p>weight: {{ user.weight }}</p>
      <p>age: {{ user.age }}</p>
      <router-link v-bind:to="`/users/${user.id}`">Users</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      users: []
    };
  },
  created: function() {
    console.log("created?");
    axios.get("/api/users").then(response => {
      this.users = response.data;
      console.log(this.users);
    });
  },
  methods: {}
};
</script>
