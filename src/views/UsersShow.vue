<template>
  <div class="container">
    <h2>Users: {{ user.description }}</h2>
    <!--   <p>name: {{ user.name }}</p> -->
    <!--   <p>email: {{ user.email }}</p> -->
    <!--  <p>height: {{ user.height }}</p> -->
    <!-- <p>weight: {{ user.weight }}</p> -->
    <!-- <p>age: {{ user.age }}</p> -->
    <!-- <p>activities: {{ user.activities }}</p> -->
    <h4>activities:</h4>
    <div v-for="activity in activities">
      <input
        type="checkbox"
        v-bind:value="activity.id"
        v-model="selectedActivityIds"
        v-on:change="saveActivityPreference(activity, $event)"
        v-bind:disabled="checkCurrentUser()"
        v-bind:id="`checkbox-${activity.id}`"
      />
      <label v-bind:for="`checkbox-${activity.id}`">
        {{ activity.name }}
      </label>
      <span><a v-bind:href="`/activities/${activity.id}`">More info</a></span>
    </div>
    <h4>Challenges ({{ user.challenges ? user.challenges.length : 0 }})</h4>
    <div v-for="challenge in user.challenges">
      {{ challenge }}
    </div>
    <router-link to="/users">Show all Users</router-link>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      user: {},
      activities: [],
      selectedActivityIds: []
    };
  },
  created: function() {
    axios.get("/api/users/" + this.$route.params.id).then(response => {
      this.user = response.data;
      this.selectedActivityIds = this.user.activities.map(activity => activity.id);
      console.log(this.user);
    });
    axios.get("/api/activities").then(response => {
      this.activities = response.data;
      console.log(this.activities);
    });
  },
  methods: {
    saveActivityPreference: function(activity, event) {
      console.log(this.selectedActivityIds);
      var params = {
        activity_ids: this.selectedActivityIds,
        user_id: localStorage.user_id
      };
      axios.post("/api/activity_users/multiple", params).then(response => {
        console.log(response);
      });
    },
    checkCurrentUser: function() {
      console.log(localStorage.user_id, this.$route.params.id);
      return localStorage.user_id !== this.$route.params.id;
    },
    createPhoto: function() {
      var params = {
        name: this.newUserDescription,
        // email: this.newUserEmail,
        // height: this.newUserHeight,
        // weight: this.newUserWeight,
        // age: this.newUserAge,
        activities: this.newUserActivities
      };
      axios.post("/api/users", params).then(response => {
        this.newUserDescription.push(response.data);
        // this.newUserEmail = "";
        // this.newUserHeight = "";
        // this.newUserWeight = "";
        // this.newUserAge = "";
        // this.newUserActivities = "";
      });
    }
  }
  // computed: {
  //   selectedActivityIds: {
  //     get: function() {
  //       return this.user.activities ? this.user.activities.map(activity => activity.id) : [];
  //     },
  //     set: function(newValue) {
  //       console.log("set", newValue);
  //       return this.user.activities ? this.user.activities.map(activity => activity.id) : [];
  //     }
  //   }
  // }
};
</script>
