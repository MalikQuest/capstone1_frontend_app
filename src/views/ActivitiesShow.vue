<template>
  <div class="container">
    <p>name: {{ activity.name }}</p>
    <h4>users</h4>
    <div v-for="user in activity.users">
      <p>Name: {{ user.name }}</p>
      <p>age: {{ user.age }}</p>
    </div>
    <router-link to="/activities">Activities</router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      activity: {}
    };
  },
  created: function() {
    axios.get("/api/activities/" + this.$route.params.id).then(response => {
      this.activity = response.data;
    });
  },
  methods: {}
};
</script>
© 2020 GitHub, Inc.
