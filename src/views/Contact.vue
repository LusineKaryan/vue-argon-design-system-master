<template>
    <section>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <card gradient="secondary" shadow body-classes="p-lg-5">
                        <h4 class="mb-1">Contactez-nous</h4>
                        <p class="mt-0">Votre avis est tres important pour nous.</p>
                        <base-input class="mt-5"
                                    alternative
                                    placeholder="Votre prenom"
                                    addon-left-icon="ni ni-user-run">
                        </base-input>
                        <base-input alternative
                                    placeholder="Email address"
                                    addon-left-icon="ni ni-email-83">
                        </base-input>
                        <base-input class="mb-4">
                                <textarea class="form-control form-control-alternative" name="name" rows="4"
                                            cols="80" placeholder="Tapez un message..."></textarea>
                        </base-input>
                        <base-button type="default" round block size="lg" style="background-color:#966e8c">
                            Envoyer un message
                        </base-button>
                    </card>
                </div>
            </div>
        </div>
        <div id="erreur" class="col-12">
            <p>Pour passer une commande ou laisser un avis, vous pouvez vous inscrire sur notre site Web</p>
        </div>
        <div class="conteiner">
            <div class="row">
                <div class="col-4 d-flex justify-content-end"><label for="pseudo">Votre nom</label></div><div class="col-8"><input type="text" id="pseudo" class="champ" /></div> 
                <div class="col-4 d-flex justify-content-end"><label for="mail">Votre e-mail</label></div> <div class="col-8"><input type="text" id="mail" class="champ" /></div>
                <div class="col-4 d-flex justify-content-end"><label for="mdp">Mot de passe</label> </div><div class="col-8"><input type="password" id="mdp" class="champ" /></div>
                <div class="col-4 d-flex justify-content-end"><label for="confirmation">Confirmation</label></div><div class="col-8"><input type="password" id="confirmation" class="champ" /></div>
                <div class="col-4 d-flex justify-content-end"><input type="submit" id="envoi" value="Envoyer" /></div><div class="col-8"><input type="reset" id="rafraichir" value="Rafraîchir" /></div>
            </div>
        </div>
    </section>
</template>
<script>
export default {};
</script>
<style>

    .container{
        margin-top: 100px;
    }

    #erreur {
        text-align: center;
        margin-top: 70px;
        margin-bottom: 20px;
    }
    
    #erreur p{
        color: #946e8c;
        font-style: italic;
        font-size: 20px;
    }
    label{
        margin: 10px;
    }

    #envoi, #rafraichir{
        margin-top: 15px;
      
    }
</style>

