<template>
    <section class="section section-components pb-0" id="section-components">
        <div class="container">
            <div class="row">
                <div class="panier col-12 d-flex justify-content-center col-sm-3" style="height: 100px; line-height: 100px;">
                    <img  src="img/gateaux/tort1.jpg" style="width: 90px; height: 90px;  " />
                </div>
                <div class="panier col-12 d-flex justify-content-center col-sm-3" style="height: 100px; line-height: 100px;">
                    {{ nom1 }}
                </div>
                <div class="panier col-12 d-flex justify-content-center col-sm-2" style="height: 100px; line-height: 100px;">
                    {{ prix1 }}
                </div>
                <div class="panier col-12 d-flex justify-content-center col-sm-2" style="height: 100px; line-height: 100px;">
                    <input id="quantite" type="text" max-size="2" v-model="quantite1" />
                </div>
                <div class="panier col-12  d-flex justify-content-center col-sm-2" style="height: 100px; line-height: 100px;">
                    <a href="#" class="">Supprimer</a>
                </div> 
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="panier col-12 d-flex justify-content-center col-sm-3" style="height: 100px; line-height: 100px;">
                    <img  src="img/gateaux/tort2.png" style="width: 90px; height: 90px;  " />
                </div>
                <div class="panier col-12 d-flex justify-content-center col-sm-3" style="height: 100px; line-height: 100px;">
                    {{ nom2 }}
                </div>
                <div class="panier col-12 d-flex justify-content-center col-sm-2" style="height: 100px; line-height: 100px;">
                    {{ prix2 }}
                </div>
                <div class="panier col-12 d-flex justify-content-center col-sm-2" style="height: 100px; line-height: 100px;">
                    <input id="quantite" type="text" max-size="2" v-model="quantite2" />
                </div>
                <div class="panier col-12  d-flex justify-content-center col-sm-2" style="height: 100px; line-height: 100px;">
                    <a href="#" class="">Supprimer</a>
                </div> 
            </div>
        </div>
    </section>

</template>
<script>
export default {
    data () {
    return {
        nom1: 'Le rêve',
        prix1: '120€',
        quantite1: '1',
        nom2: 'Gâteau aux baies',
        prix2: '105€',
        quantite2: '1'
    }
  }
};
</script>
<style>
    .container {
        margin-top: 40px;
    }

    .panier input {
        width: 30px;
        height: 20px;
        vertical-align: center ;
        margin: auto;
        size:2;
    }
</style>
