// Attraverso l’apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail
// chiedere 10 indirizzi email e stamparli in pagina all’interno di una lista.
// Successivamente assicuratevi di far comparire gli indirizzi email solamente quando sono stati tutti recuperati dal server.

const app = new Vue ({
    el:'#app',

    data: {
        email: undefined,
        emailArray : [],
    },

    created() {

        for(let i=0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((email) => {
                console.log(email, email.data);
                // console.log(i, this.email); //se faccio il console.log qui vedró che l'email nella prima posizione rimane undefined e che nella console non mi stampa l'ultima email che vedo stampata nell'html, questo perché non ho ancora fatto l'accesso alla risposta e non me la sono ancora salvata

                this.email = (email.data.response); // salvo la risposta del server in this.email
                this.emailArray.push(this.email);
                console.log(i, this.email);

            })
        }
        console.log(this.emailArray);
    }
})