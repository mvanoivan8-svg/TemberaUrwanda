import { createRouter,createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/about.vue";
import contacts from "../views/contacts.vue";
import Services from "../views/services.vue";

const routes = [{
  path: "/",
  name:"Home",
  component: Home
}, {
  path: "/about",
  name:"About",
  component: About
}, {
  path: "/contacts",
  name: "Contacts",
  component: contacts
},
{
   path: "/services",
   name: "Services",
   component: Services
}

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router