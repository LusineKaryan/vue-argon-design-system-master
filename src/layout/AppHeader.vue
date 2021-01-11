<template>
<div>
    <b-navbar class="fixed-top" toggleable="lg" style="background-color:rgb(236, 230, 234)">
        <b-navbar-brand href="#">
            <img src="img/brand/logo3.png" style="width:150px; height:auto;" alt="brand">
        </b-navbar-brand>

        <b-navbar-toggle  style="color:black;" target="nav-collapse">☰</b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                
                <b-nav-item href="#" link-classes="menu-item"><router-link to="/" style="color:rgb(133, 25, 116);">Accueil</router-link></b-nav-item>
                <b-nav-item href="#" link-classes="menu-item"><router-link to="/assortiment" style="color:rgb(133, 25, 116);">Assortiment</router-link></b-nav-item>
                <b-nav-item href="#" link-classes="menu-item"><router-link to="/boutique" style="color:rgb(133, 25, 116);">Boutique</router-link></b-nav-item>
                <b-nav-item href="#" link-classes="menu-item"><router-link to="/contact" style="color:rgb(133, 25, 116);">Contact</router-link></b-nav-item>
                <b-nav-item href="#" link-classes="menu-item"><router-link to="/panier" style="color:rgb(133, 25, 116);">Panier</router-link></b-nav-item>
            </b-navbar-nav>

            <b-navbar-nav class="ml-auto">
                <b-nav-form>
                <b-form-input size="sm" class="mr-sm-2" placeholder="Recherche"></b-form-input>
                <b-button variant="outline-success" size="sm" class="my-2 my-sm-0" type="submit">Recherche</b-button>
                </b-nav-form>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</div>    
</template>
<script>
import { BNavbar, BNavbarBrand, BNavbarToggle, BNavbarNav } from "bootstrap-vue/esm/components/navbar";
import { BCollapse } from "bootstrap-vue/esm/components/collapse";
import { BNavItem, BNavForm } from "bootstrap-vue/esm/components/nav";  
import { BDropdownItem } from "bootstrap-vue/esm/components/dropdown";
import { BFormInput } from "bootstrap-vue/esm/components/form-input";


export default {
  components: {
    BNavbar,
    BNavbarBrand,
    BNavbarToggle,        
    BCollapse,
    BNavbarNav,    
    BNavItem,
    BDropdownItem,
    BNavForm,
    BFormInput,
  }
};
</script>
<style>
</style>