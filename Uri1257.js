/*gabriel jard*/
var input = require('fs').readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n")

var casos, qtsLinhas, i, qtsCaso, qtsLetra, somaLetras, texto
var string = []

casos = lines.shift()
while (casos > 0) {
    qtsCaso = 0
    somaLetras = 0
    qtsLinhas = lines.shift()
    while (qtsLinhas > 0) {
        qtsLetra = 0
        texto = lines.shift()
        texto = texto.split("")
        for (i = 0; i < texto.length; i++) {
            somaLetras += (texto[i].charCodeAt(0) - 65) + qtsCaso + qtsLetra
            qtsLetra++
        }
        qtsCaso++
        qtsLinhas--
    }
    console.log(somaLetras)
    casos--
}
