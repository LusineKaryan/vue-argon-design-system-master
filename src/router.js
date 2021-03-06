import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Components.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Profile from "./views/Profile.vue";
import Accueil from "./views/Accueil.vue";
import Panier from "./views/Panier.vue";
import Assortiment from "./views/Assortiment.vue";
import Contact from "./views/Contact.vue";
import Boutique from "./views/Boutique.vue";



Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/components",
      name: "components",
      components: {
        header: AppHeader,
        default: Components,
        footer: AppFooter
      }
    },
    {
      path: "/landing",
      name: "landing",
      components: {
        header: AppHeader,
        default: Landing,
        footer: AppFooter
      }
    },
    {
      path: "/login",
      name: "login",
      components: {
        header: AppHeader,
        default: Login,
        footer: AppFooter
      }
    },
    {
      path: "/profile",
      name: "profile",
      components: {
        header: AppHeader,
        default: Profile,
        footer: AppFooter
      }
    },
    {
      path: "/panier",
      name: "panier",
      components: {
        header: AppHeader,
        default: Panier,
        footer: AppFooter
      }
    },
    {
      path: "/assortiment",
      name: "assortiment",
      components: {
        header: AppHeader,
        default: Assortiment,
        footer: AppFooter
      }
    },

    {
      path: "/boutique",
      name: "boutique",
      components: {
        header: AppHeader,
        default: Boutique,
        footer: AppFooter
      }
    },
    
    {
      path: "/contact",
      name: "contact",
      components: {
        header: AppHeader,
        default: Contact,
        footer: AppFooter
      }
    },

    {
      path: "/",
      name: "accueil",
      components: {
        header: AppHeader,
        default: Accueil,
        footer: AppFooter
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
