/**
 * Created by Uriel on 25/02/2015.
 */
enejApp.controller('registrationController', function() {
    this.user = {
        "name" : "Name",
        "cpf" : "123-123-12.21",
        "email" : "email@gmail.com"
    };
    this.enviarForm = function() {
        console.log("Pontes gatao");
        myFirebaseRef.set(this.user);
    };
});