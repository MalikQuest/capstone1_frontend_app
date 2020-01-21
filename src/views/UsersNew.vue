<template>
  <div class="container">
    <h1>New Photo</h1>
    <form v-on:submit.prevent="createPhoto()">
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
      Name:
      <input type="text" v-model="newUserName" />
      Width:
      <input type="text" v-model="newUserEmail" />
      Height:
      <input type="text" v-model="newUserHeight" />
      Weight:
      <input type="text" v-model="newUserWeight" />
      Age:
      <input type="text" v-model="newUserAge" />
      <input type="submit" value="Create" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      newUserName: "",
      newUserEmail: "",
      newUserHeight: "",
      newUserWeight: "",
      newUserAge: "",
      errors: []
    };
  },
  created: function() {},
  methods: {
    createPhoto: function() {
      var params = {
        name: this.newUserName,
        width: this.newUserEmail,
        height: this.newUserHeight,
        weight: this.newUserWeight,
        age: this.newUserAge
      };
      axios
        .post("/api/users", params)
        .then(response => {
          this.$router.push("/users");
        })
        .catch(error => {
          console.log(error.response);
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
