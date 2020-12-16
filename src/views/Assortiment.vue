<template>
    <section>
        <b-container class="bv-example-row">                
            <b-row class="row justify-content-center align-items-center">                  
                <b-col cols="5" sm="4" lg="2" class="choix">
                    <a href="#"   class="btn btn-link text-default">Type de produit </a>                         
                </b-col>
                <b-col cols="5" sm="4" lg="2" class="choix">
                    <a href="#" class="btn btn-link text-default">Poids du produit</a>                         
                </b-col>                   
                 <b-col cols="5" sm="4" lg="2" class="choix">
                    <a href="#" class="btn btn-link text-default">Promotion </a>                         
                </b-col>   
                 <b-col cols="5" sm="4" lg="3" class="choix">
                        <p class="prix">Prix</p> 
                         <base-slider v-model="sliders.slider1">
                         </base-slider>                         
                </b-col>   
                 <b-col cols="10" sm="4" lg="3" class="choix">
                     <base-checkbox class="mb-3" v-model="checkboxes.unchecked">
                        Livraison gratuit
                    </base-checkbox>                       
                </b-col>           
                                          
            </b-row>
            <b-row class="row justify-content-center">                  
                <b-col cols="10" md="5" lg="3" class="text-center">
                    <img v-lazy="'img/gateaux/tort1.jpg'" alt="gateau"
                        class="img-fluid shadow-lg" style="width: 80%;">
                    <p><em>Poids net: 3000 g <br> Prix: 40€/kg</em></p>
                    <p><a class="btn btn-secondary" href="#" role="button">Ajouter au panier</a></p>                           
                </b-col>
                <b-col cols="10" md="5" lg="3" class="text-center">
                    <img v-lazy="'img/gateaux/tort2.png'" alt="gateau"
                        class="img-fluid shadow-lg" style="width: 80%;">
                    <p><em>Poids net: 3000 g <br> Prix: 35€/kg</em></p>  
                    <p><a class="btn btn-secondary" href="#" role="button">Ajouter au panier</a></p>        
                </b-col>
                <b-col cols="10" md="5" lg="3" class="text-center">
                    <img v-lazy="'img/gateaux/tort3.jpg'" alt="gateau"
                        class="img-fluid shadow-lg" style="width: 80%;">
                    <p><em>Poids net: 2000 g <br> Prix: 40€/kg</em></p>
                    <p><a class="btn btn-secondary" href="#" role="button">Ajouter au panier</a></p>                       
                </b-col>   
                <b-col cols="10" md="5" lg="3" class="text-center">
                    <img v-lazy="'img/gateaux/tort4.png'" alt="gateau"
                        class="img-fluid  shadow-lg" style="width: 80%;">
                    <p><em>Poids net: 2700 g <br> Prix: 40€/kg</em></p>
                    <p><a class="btn btn-secondary" href="#" role="button">Ajouter au panier</a></p>                       
                </b-col>              
                <b-col cols="10" md="5" lg="3" class="text-center">
                    <img v-lazy="'img/gateaux/tort5.png'" alt="gateau"
                        class="img-fluid shadow-lg" style="width: 80%;">
                    <p><em>Poids net: 2000 g <br> Prix: 40€/kg</em></p>
                    <p><a class="btn btn-secondary" href="#" role="button">Ajouter au panier</a></p>                       
                </b-col>     
                <b-col cols="10" md="5" lg="3" class="text-center">
                    <img v-lazy="'img/gateaux/tort6.jpg'" alt="gateau"
                        class="img-fluid shadow-lg" style="width: 80%;">
                    <p><em>Poids net: 3500 g <br> Prix: 30€/kg</em></p>
                    
                    <p><a class="btn btn-secondary" href="#" role="button">Ajouter au panier</a></p>                           
                </b-col>
                <b-col cols="10" md="5" lg="3" class="text-center">
                    <img v-lazy="'img/gateaux/tort7.png'" alt="gateau"
                        class="img-fluid shadow-lg" style="width: 80%;">
                    <p><em>Poids net: 2000 g <br> Prix: 40€/kg</em></p>  
                    <p><a class="btn btn-secondary" href="#" role="button">Ajouter au panier</a></p>        
                </b-col>
                <b-col cols="10" md="5" lg="3" class="text-center">
                    <img v-lazy="'img/gateaux/tort8.jpg'" alt="gateau"
                        class="img-fluid shadow-lg" style="width: 80%;">
                    <p><em>Poids net: 2000 g <br> Prix: 40€/kg</em></p>
                    <p><a class="btn btn-secondary" href="#" role="button">Ajouter au panier</a></p>                       
                </b-col>   
                <b-col cols="10" md="5" lg="3" class="text-center">
                    <img v-lazy="'img/gateaux/tort9.jpg'" alt="gateau"
                        class="img-fluid  shadow-lg" style="width: 80%;">
                    <p><em>Poids net: 180 g <br> Prix: 30€/kg</em></p>
                    <p><a class="btn btn-secondary" href="#" role="button">Ajouter au panier</a></p>                       
                </b-col>              
                <b-col cols="10" md="5" lg="3" class="text-center">
                    <img v-lazy="'img/gateaux/tort10.jpg'" alt="gateau"
                        class="img-fluid shadow-lg" style="width: 80%;">
                    <p><em>Poids net: 2000 g <br> Prix: 40€/kg</em></p>
                    <p><a class="btn btn-secondary" href="#" role="button">Ajouter au panier</a></p>                       
                </b-col>                 
                    <b-col cols="10" md="5" lg="3" class="text-center">
                    <img v-lazy="'img/gateaux/tort11.jpg'" alt="gateau"
                        class="img-fluid  shadow-lg" style="width: 80%;">
                    <p><em>Poids net: 2000 g <br> Prix: 40€/kg</em></p>
                    <p><a class="btn btn-secondary" href="#" role="button">Ajouter au panier</a></p>                       
                </b-col>                                               
            </b-row>
        </b-container>   
        <div class="row justify-content-center align-items-center mt-lg">
            <div class="cols-12">
                <base-pagination :page-count="10" v-model="pagination.default"></base-pagination>
            </div>
        </div>     
    </section>
</template>
<script>
import { BContainer, BCol, BRow } from "bootstrap-vue/esm/components/layout";
export default {
     components: {
    BContainer,
    BCol,
    BRow
  },
  data() {
    return {
      checkboxes: {
        unchecked: false,
        checked: true,
        uncheckedDisabled: false,
        checkedDisabled: true
      },
      sliders: {
        slider1: 0
      },
      pagination: {
        default: 1,
      }
    };
  }
};
</script>
<style>
    .btn.btn-secondary{
        background-color: rgb(236, 230, 234);
        border: 1px solid #bb89b0;
        padding: 5px;
    }

    .btn.btn-secondary:hover{
        background-color: #c994bd;
        box-shadow: 3px 3px rgb(122, 122, 122);
        border: 1px solid #bb89b0;
    }

    .btn.btn-link{
        font-size: 11px;
    }

    .input-slider-container{
        width: 150px;
    }

    .prix{
        font-size:11px;
        text-align: center;
        margin-bottom: -13px;
    }
</style>
