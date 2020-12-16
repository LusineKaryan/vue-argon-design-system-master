<template> 
    <section>    
            <b-carousel id="carousel1"
                        controls
                        indicators
                        img-width="700" 
                        img-height="100">
                <b-carousel-slide class="carousel"
                    caption="Quand la qualité rencontre le goût.."
                    text="Goûtez de vrais gâteaux faits maison."
                    img-src="img/carousel/carousel1.jpg"  style="height: 400px !important">
                </b-carousel-slide>
                <b-carousel-slide
                    caption="Quand la qualité rencontre le goût"
                    text="Goûtez de vrais gâteaux faits maison."
                    img-src="img/carousel/carousel2.jpg" style="height: 400px !important">
                </b-carousel-slide>
                <b-carousel-slide
                    caption="Quand la qualité rencontre le goût"
                    text="Goûtez de vrais gâteaux faits maison." 
                    img-src="img/carousel/carousel3.jpg" style="height: 400px !important">
                </b-carousel-slide>
            </b-carousel>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            
                <h5>Vous pouvez également passer vos commandes en utilisant notre code-QR</h5>
                <div class="flash col-12">
                    <div class="qr_code" col="3">
                    </div>
                    <div class="text" col="9">
                        <ol>
                            <li>Flashez</li>
                            <li>Commandez et payez</li>
                            <li>Récupérez votre commande</li>
                        </ol>
                    </div>
                </div> 
           
            <b-container class="bv-example-row">                
                <b-row class="row justify-content-center">
                    <b-col cols="12" md="5" lg="3" class="text-center">
                        <img v-lazy="'img/gateaux/tort1.jpg'" alt="gateau1"
                            class="img-fluid shadow-lg" style="width: 80%;">
                        <h4>Le rêve</h4>
                        <p>Des gâteaux pour toutes les occasions.
                        La production de confiserie "Vivre Doux" présente un large assortiment de gâteaux aussi bien pour les
                        gourmands que pour les gourmets raffinés.</p>
                        <p><a class="btn btn-secondary" href="#" role="button">Voir details &raquo;</a></p>                           
                    </b-col>
                    <b-col cols="12" md="5" lg="3" class="text-center">
                        <img v-lazy="'img/gateaux/tort3.jpg'" alt="gateau2"
                            class="img-fluid shadow-lg" style="width: 80%;">
                        <h4>Tendresse</h4>
                        <p>L'acheteur peut «concevoir» son propre gâteau à partir d'une vaste offre de divers gâteaux et garnitures.
                        Pour plus de commodité et d'originalité, en plus des grands gâteaux, nous vous proposons des petits gâteaux
                        et pâtisseries qui sont tout aussi décorés.</p>
                        <p><a class="btn btn-secondary" href="#" role="button">Voir details &raquo;</a></p>        
                    </b-col>
                    <b-col cols="12" md="5" lg="3" class="text-center">
                        <img v-lazy="'img/gateaux/tort4.png'" alt="gateau3"
                            class="img-fluid shadow-lg" style="width: 80%;">
                        <h4>Mariage</h4>
                        <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                        <p><a class="btn btn-secondary" href="#" role="button">Voir details &raquo;</a></p>                       
                    </b-col>   
                    <b-col cols="12" md="5" lg="3" class="text-center">
                        <img v-lazy="'img/gateaux/tort5.png'" alt="gateau4"
                            class="img-fluid  shadow-lg" style="width: 80%;">
                        <h4>Le poupon</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sunt tenetur nam accusantium. Distinctio, dolor! Similique, veritatis? Maxime deleniti praesentium eum, incidunt consequatur explicabo optio magnam harum perferendis sit voluptatibus!</p>
                        <p><a class="btn btn-secondary" href="#" role="button">Voir details &raquo;</a></p>                       
                    </b-col>              
                    <b-col cols="12" md="5" lg="3" class="text-center">
                        <img v-lazy="'img/gateaux/tort8.jpg'" alt="gateau5"
                            class="img-fluid shadow-lg" style="width: 80%;">
                        <h4>Le gourmand</h4>
                        <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                        <p><a class="btn btn-secondary" href="#" role="button">Voir details &raquo;</a></p>                       
                    </b-col>                         
                </b-row>
                <base-alert type="success" class="alert" icon="ni ni-like-2" dismissible>
                    <span slot="text">Vous pouvez laisser votre commentaire en vous inscrivant sur notre site internet</span>
                </base-alert>
                <hr class="featurette-divider">
                <div class="row featurette">
                    <div class="col-md-7">
                        <h4 class="featurette-heading">Recette de gâteau.</h4>
                        <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                    </div>
                    <div class="col-md-5">
                        <iframe  width="auto" height="200" 
                        src="https://www.youtube.com/embed/aTkCMGPGBAk?start=1" 
                        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
                        style="border: solid 3px #37474F">
                        </iframe>
                    </div>
                </div>
                <hr class="featurette-divider">        
                <div class="row featurette">
                    <div class="col-md-7 order-md-2">
                        <h4 class="featurette-heading">Oh, c'est si délicieux! <span class="text-muted"><em>Voyez vous-même.</em></span></h4>
                        <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                    </div>
                    <div class="col-md-5 order-md-1">
                        <iframe  width="auto" height="200" 
                        src="https://www.youtube.com/embed/2utgqRCAIr4?start=630&end=690" 
                        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
                        style="border: solid 3px #37474F">
                        </iframe>
                    </div>
                </div> 
                <hr>
            </b-container>   
    </section>  
</template>

<script>
import { BCarousel } from "bootstrap-vue/esm/components/carousel/carousel";
import { BCarouselSlide } from "bootstrap-vue/esm/components/carousel/carousel-slide";
import { BContainer, BCol, BRow } from "bootstrap-vue/esm/components/layout";
export default {
  components: {
    BCarousel,
    BCarouselSlide,
    BContainer,
    BCol,
    BRow
  }
};
</script>