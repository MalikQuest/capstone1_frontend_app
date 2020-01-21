<template>
  <div class="home">
    <h1>New Activites</h1>
    <form v-on:submit.prevent="createActivity()">
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
      Id:
      <input type="text" v-model="newActivityId" />
      Name:
      <input type="text" v-model="newActivityName" />
      <input type="submit" value="Create" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      newActivityId: "",
      newActivityName: "",
      errors: []
    };
  },
  created: function() {},
  methods: {
    createActivity_users: function() {
      var params = {
        id: this.newActivityId,
        name: this.newActivityName,
        amount: this.newChallengeAmount
      };
      axios
        .post("/api/activity_users", params)
        .then(response => {
          this.$router.push("/activity_users");
        })
        .catch(error => {
          console.log(error.response);
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
