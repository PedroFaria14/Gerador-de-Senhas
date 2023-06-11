   // Gerador de senhas

   function gerador(comprimento){

   let caracter =
   'aBCDEFGHIJKLMNOPQRSTUVWXYZAbcdefghijklmnopqrstuvwxyz0987654321!@#$%¨&*()/?]}[{.,:>,<+=-_';

   let senha ="";

   for(let i =0; i<comprimento; i++){
    let random = Math.floor
    (Math.random() * caracter.length)
    senha += caracter [random]
   }
   return senha;

}

console.log(gerador(12));