<template>
    <section>
        <b-container class="bv-example-row">                
            <b-row>                  
                <b-col cols="12" md="5" lg="3" class="text-center">
                    <img v-lazy="'img/gateaux/tort1.jpg'" alt="gateau"
                        class="img-fluid shadow-lg" style="width: 80%;">
                    <p><em>Poids net: 3000 g <br> Prix: 120€/kg</em></p>
                    <p><a class="btn btn-secondary" href="#" role="button">Ajouter au panier</a></p>                           
                </b-col>
                <b-col cols="12" md="5" lg="3" class="text-center">
                    <img v-lazy="'img/gateaux/tort2.png'" alt="gateau"
                        class="img-fluid shadow-lg" style="width: 80%;">
                    <p><em>Poids net: 2400 g <br> Prix: 120€/kg</em></p>  
                    <p><a class="btn btn-secondary" href="#" role="button">Ajouter au panier</a></p>        
                </b-col>
                <b-col cols="12" md="5" lg="3" class="text-center">
                    <img v-lazy="'img/gateaux/tort3.jpg'" alt="gateau"
                        class="img-fluid shadow-lg" style="width: 80%;">
                    <p><em>Poids net: 2000 g <br> Prix: 120€/kg</em></p>
                    <p><a class="btn btn-secondary" href="#" role="button">Ajouter au panier</a></p>                       
                </b-col>   
                <b-col cols="12" md="5" lg="3" class="text-center">
                    <img v-lazy="'img/gateaux/tort4.png'" alt="gateau"
                        class="img-fluid  shadow-lg" style="width: 80%;">
                    <p><em>Poids net: 2700 g <br> Prix: 120€/kg</em></p>
                    <p><a class="btn btn-secondary" href="#" role="button">Ajouter au panier</a></p>                       
                </b-col>              
                <b-col cols="12" md="5" lg="3" class="text-center">
                    <img v-lazy="'img/gateaux/tort5.png'" alt="gateau"
                        class="img-fluid shadow-lg" style="width: 80%;">
                    <p><em>Poids net: 2000 g <br> Prix: 120€/kg</em></p>
                    <p><a class="btn btn-secondary" href="#" role="button">Ajouter au panier</a></p>                       
                </b-col>     
                <b-col cols="12" md="5" lg="3" class="text-center">
                    <img v-lazy="'img/gateaux/tort6.jpg'" alt="gateau"
                        class="img-fluid shadow-lg" style="width: 80%;">
                    <p><em>Poids net: 3500 g <br> Prix: 120€/kg</em></p>
                    
                    <p><a class="btn btn-secondary" href="#" role="button">Ajouter au panier</a></p>                           
                </b-col>
                <b-col cols="12" md="5" lg="3" class="text-center">
                    <img v-lazy="'img/gateaux/tort7.png'" alt="gateau"
                        class="img-fluid shadow-lg" style="width: 80%;">
                    <p><em>Poids net: 2000 g <br> Prix: 120€/kg</em></p>  
                    <p><a class="btn btn-secondary" href="#" role="button">Ajouter au panier</a></p>        
                </b-col>
                <b-col cols="12" md="5" lg="3" class="text-center">
                    <img v-lazy="'img/gateaux/tort8.jpg'" alt="gateau"
                        class="img-fluid shadow-lg" style="width: 80%;">
                    <p><em>Poids net: 2000 g <br> Prix: 120€/kg</em></p>
                    <p><a class="btn btn-secondary" href="#" role="button">Ajouter au panier</a></p>                       
                </b-col>   
                <b-col cols="12" md="5" lg="3" class="text-center">
                    <img v-lazy="'img/gateaux/tort9.jpg'" alt="gateau"
                        class="img-fluid  shadow-lg" style="width: 80%;">
                    <p><em>Poids net: 180 g <br> Prix: 90€/kg</em></p>
                    <p><a class="btn btn-secondary" href="#" role="button">Ajouter au panier</a></p>                       
                </b-col>              
                <b-col cols="12" md="5" lg="3" class="text-center">
                    <img v-lazy="'img/gateaux/tort10.jpg'" alt="gateau"
                        class="img-fluid shadow-lg" style="width: 80%;">
                    <p><em>Poids net: 2000 g <br> Prix: 120€/kg</em></p>
                    <p><a class="btn btn-secondary" href="#" role="button">Ajouter au panier</a></p>                       
                </b-col>                 
                    <b-col cols="12" md="5" lg="3" class="text-center">
                    <img v-lazy="'img/gateaux/tort11.jpg'" alt="gateau"
                        class="img-fluid  shadow-lg" style="width: 80%;">
                    <p><em>Poids net: 2000 g <br> Prix: 120€/kg</em></p>
                    <p><a class="btn btn-secondary" href="#" role="button">Ajouter au panier</a></p>                       
                </b-col>                                               
            </b-row>
        </b-container>        
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

</style>
