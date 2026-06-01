import { createRouter,createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/about.vue";
import contacts from "../views/contacts.vue";
import Services from "../views/services.vue";
import Photo from "../views/Photo.vue"; 
import Videos from "../views/Videos.vue";
import Northern from "../views/Northern.vue";
import Eastern from "../views/Eastern.vue";
import Southern from "../views/Southern.vue"
import Western from "../views/Western.vue";
import Kigali from "../views/Kigali.vue";

const routes = [{
  path: "/",
  name:"Home",
  component: Home
}, {
  path: "/about",
  name:"about",
  component: about
}, {
  path: "/contacts",
  name: "contacts",
  component: contacts
},
{
   path: "/services",
   name: "services",
   component: services
},

{
path:"/Photo",
name:"Photo",
component: Photo

},
{
path:"/Videos",
name:"Videos",
component: Videos
},
{
path:"/Northern",
name:"Northern",
component: Northern


},

{
path:"/Southern",
name:"Southern",
component: Southern
},
{
path:"/Eastern",
name:"Eastern",
component: Eastern

},

{
  path:"/Western",
  name:"Western",
  component: Western
},
{
  path:"/Kigali",
  name:"Kigali",
  component: Kigali
}

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router