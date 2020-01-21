<template>
  <div class="container">
    <section id="four" class="wrapper alt style1">
      <div class="inner">
        <h2 class="major">Challenges</h2>
        <section class="features">
          <article v-for="challenge in challenges">
            <a href="#" class="image">
              <img class="image-challenge" v-bind:src="challenge.activity.url" alt="" />
            </a>
            <h3 class="major">{{ challenge.activity_name }}</h3>
            <p>{{ challenge.description }}</p>
            <h4>{{ challenge.num_users }} people have accepted this challenge</h4>
            <p>user_name: {{ challenge.user_name }}</p>
            <!--  <p>activity_name: {{ challenge.activity_name }}</p> -->
            <p>level: {{ challenge.level }}</p>
            <p>amount: {{ challenge.amount }}</p>
            <p>deadline: {{ challenge.deadline }}</p>
            <router-link class="special" v-bind:to="`/challenges/${challenge.id}`">More details</router-link>
          </article>
        </section>
      </div>
    </section>

    <section class="wrapper">
      <div class="inner">
        <h1>New Challenge</h1>
        Activity:
        <select v-model="newChallengesActivity_id">
          <option v-for="activity in activities" v-bind:value="activity.id">
            {{ activity.name }}
          </option>
        </select>
        <br />
        Description:
        <input type="text" v-model="newChallengesDescription" list="challenge-descriptions" />
        <datalist id="challenge-descriptions">
          <option v-for="challenge in challenges">{{ challenge.description }}</option>
        </datalist>
        <br />
        Event_id:
        <input type="text" v-model="newChallengesEvent_id" list="challenge-event" />
        <datalist id="challenge-event">
          <option v-for="challenge in challenges">{{ challenge.event_id }}</option>
        </datalist>
        <br />
        Level:
        <input type="text" v-model="newChallengesLevel" />
        <br />
        Amount:
        <input type="text" v-model="newChallengesAmount" />
        <br />
        Deadline:
        <input type="datetime-local" v-model="newChallengesDeadline" />
        <br />
        <button v-on:click="createChallenge()">Submit</button>
      </div>
    </section>
  </div>
</template>

<style>
.image-challenge {
  width: 100%;
  height: 500px;
  object-fit: cover;
}
</style>
<script>
import axios from "axios";

export default {
  data: function() {
    return {
      challenges: [],
      activities: [],
      currentChallenges: {},
      newChallengesDescription: "",
      newChallengesActivity_id: "",
      newChallengesEvent_id: "",
      newChallengesLevel: "",
      newChallengesAmount: "",
      newChallengesDeadline: ""
    };
  },
  created: function() {
    console.log("created?");
    axios.get("/api/challenges").then(response => {
      this.challenges = response.data;
      console.log(this.challenges);
    });
    axios.get("/api/activities").then(response => {
      this.activities = response.data;
      console.log(this.activities);
    });
  },
  methods: {
    createChallenge: function() {
      var params = {
        description: this.newChallengesDescription,
        activity_id: this.newChallengesActivity_id,
        event_id: this.newChallengesEvent_id,
        level: this.newChallengesLevel,
        amount: this.newChallengesAmount,
        deadline: this.newChallengesDeadline
      };
      axios
        .post("/api/challenges", params)
        .then(response => {
          this.challenges.push(response.data);
          this.newChallengesDescription = "";
          this.newChallengesActivity_id = "";
          this.newChallengesEvent_id = "";
          this.newChallengesLevel = "";
          this.newChallengesAmount = "";
          this.newChallengesDeadline = "";
        })
        .catch(error => console.log(error.response.data.errors));
    },

    showChallenge: function(challenge) {
      if (this.currentChallenges === challenge) {
        this.currentChallenge = {};
      } else {
        this.currentChallenge = challenge;
      }
    },
    updateChallenge: function(challenge) {
      var params = {
        description: challenge.description,
        user_id: challenge.user_id,
        activity_id: challenge.activity_id,
        event_id: challenge.event_id,
        level: challenge.level,
        amount: challenge.amount,
        deadline: challenge.deadline
      };
      axios.patch("/api/challenges/" + challenge.id, params).then(response => {
        this.currentChallenge = {};
      });
    }
  }
};
</script>
