import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import UsersIndex from "../views/UsersIndex.vue";
import ChallengesIndex from "../views/ChallengesIndex.vue";
import ChallengesShow from "../views/ChallengesShow.vue";
import UsersShow from "../views/UsersShow.vue";
import ActivityUsersNew from "../views/ActivityUsersNew.vue";
import ChallengeUsers from "../views/ChallengeUsers.vue";
import Activities from "../views/Activities.vue";
import ActivitiesShow from "../views/ActivitiesShow.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/about", name: "about", component: About },
  { path: "/signup", name: "signup", component: Signup },
  { path: "/login", name: "login", component: Login },
  { path: "/logout", name: "logout", component: Logout },
  { path: "/users", name: "users-index", component: UsersIndex },
  { path: "/challenges", name: "challenges-index", component: ChallengesIndex },
  { path: "/challenges/:id", name: "challenges-show", component: ChallengesShow },
  { path: "/users/:id", name: "users-show", component: UsersShow },
  { path: "/activity_users/new", name: "activity_users-new", component: ActivityUsersNew },
  { path: "/challenge_users/new", name: "challenge_users", component: ChallengeUsers },
  { path: "/activities", name: "activities", component: Activities },
  { path: "/activities/:id", name: "activities-show", component: ActivitiesShow }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
