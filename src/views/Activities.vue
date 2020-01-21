<template>
  <div class="container">
    <h1>activities:</h1>

    <section id="wrapper">
      <!-- One -->
      <section
        v-for="(activity, index) in activities"
        class="wrapper spotlight"
        v-bind:class="{
          alt: index % 2 === 1,
          style1: index % 3 === 0,
          style2: index % 3 === 1,
          style3: index % 3 === 2
        }"
      >
        <div class="inner">
          <a href="#" class="image"><img v-bind:src="activity.url" alt="" /></a>
          <div class="content">
            <h2 class="major">{{ activity.name }}</h2>
            <p>
              {{ activity.description }}
            </p>
            <router-link class="special" v-bind:to="`/activities/${activity.id}`">More info</router-link>
          </div>
        </div>
      </section>
    </section>
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
    axios.get("/api/activities").then(response => {
      this.activities = response.data;
      console.log(this.activities);
    });
  },
  methods: {
    saveActivityPreference: function(activity, event) {
      console.log(this.selectedActivityIds);
      var params = {
        activity_ids: this.selectedActivityIds
      };
      axios.post("/api/activity_users/multiple", params).then(response => {
        console.log(response);
      });
    },
    createActivity: function() {
      var params = {
        activities_id: this.newActivities_id,
        activities: this.newUserActivities
      };
      axios.post("/api/users", params).then(response => {
        this.newUserDescription.push(response.data);
        this.newUserEmail = "";
        this.newUserHeight = "";
        this.newUserWeight = "";
        this.newUserAge = "";
        this.newUserActivities = "";
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
