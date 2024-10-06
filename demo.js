function carre (nbr){
    return nbr * nbr 
}
const factoriel = (n)=>{
return n < 2 ? 1 : n * factoriel(n-1);
}

//utilisation
//console.log("le carré",carre(4))
//console.log("factoriel",factoriel(5))

const person = {
    nom : "John",
    getName : ()=>{
        return `voici mon nom ${person.nom}`
    }
}


//console.log(person.nom)
// console.log(person.getName())
console.log(Math.SQRT1_2)