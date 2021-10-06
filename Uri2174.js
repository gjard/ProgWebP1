/*gabriel jard*/
var input = require('fs').readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n")

var numPokemon, pokemon, i, j
var repetido = false
var captura = 151
var pokedex = []

while (numPokemon == null) {
    if (lines[0].length > 0) {
        numPokemon = lines.shift()
    } else lines.shift()
}
for (i = 0; i < numPokemon; i++) {
    pokemon = null
    while (pokemon == null) {
        if (lines[0].length > 0) {
            pokemon = lines.shift()
        } else lines.shift()
    }
    if (pokedex.length > 0) {
        for (j = 0; j < pokedex.length; j++) {
            if (pokedex[j] == pokemon) {
                repetido = true
                break
            }
        }
        if (repetido == false) {
            pokedex.push(pokemon)
            captura--
        }
        repetido = false
    } else {
        pokedex.push(pokemon)
        captura--
    }
}
console.log("Falta(m) " + captura + " pomekon(s).")
