<template>
  <div class="container">
    <h2>Challenge: {{ challenge.description }}</h2>
    <p>user_name: {{ challenge.user_name }}</p>
    <p>activity_name: {{ challenge.activity_name }}</p>
    <p>level: {{ challenge.level }}</p>
    <p>amount: {{ challenge.amount }}</p>
    <p>deadline: {{ challenge.deadline }}</p>
    <div>
      Amount:
      <input type="text" v-model="challengeAmount" />
      <button v-on:click="acceptChallenge()">Accept challenge</button>
    </div>
    <br />
    <router-link to="/challenges">Back to all Challenges</router-link>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      challenge: {},
      challengeAmount: ""
    };
  },
  created: function() {
    axios.get("/api/challenges/" + this.$route.params.id).then(response => {
      this.challenge = response.data;
      console.log(this.challenge);
    });
  },
  methods: {
    acceptChallenge: function() {
      // Create a challenge user
      // (params of user_id, challenge_id, amount)
      // user_id -> don't send
      // challenge_id -> this.$route.params.id
      // amount -> this.challengeAmount
      var params = {
        challenge_id: this.$route.params.id,
        amount: this.challengeAmount
      };
      axios.post("/api/challenge_users", params).then(response => {
        this.challengeAmount = "";
        this.$router.push("/users/" + localStorage.user_id);
      });
    }
  }
};
</script>
