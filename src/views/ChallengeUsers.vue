3
<template>
  <div class="home">
    <h1>New Challenges</h1>
    <form v-on:submit.prevent="createChallenges()">
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
      Name:
      <input type="text" v-model="newChallengeName" />
      Amount:
      <input type="text" v-model="newChallengeAmount" />
      <input type="submit" value="Create" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      newChallengeName: "",
      newChallengeAmount: "",
      errors: []
    };
  },
  created: function() {},
  methods: {
    createChallenge_users: function() {
      var params = {
        name: this.newChallengeName,
        amount: this.newChallengeAmount
      };
      axios
        .post("/api/challenge_users", params)
        .then(response => {
          this.$router.push("/challenge_users");
        })
        .catch(error => {
          console.log(error.response);
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
