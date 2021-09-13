/*gabriel jard*/
var input = require('fs').readFileSync("stdin", "utf8");
var lines = input.split("\n")

var casos, qtsLinhas, i, qtsCaso, qtsLetra, somaLetras, texto
var string = []

while (casos === null) {
    if (lines[0].length > 0) {
        casos = lines.shift()
    } else lines.shift()
}
while (casos > 0) {
    if (lines[0].length > 0) {
        qtsCaso = 0
        somaLetras = 0
        qtsLinhas = lines.shift()
        while (qtsLinhas > 0) {
            qtsLetra = 0
            texto = null
            while (texto === null) {
                if (lines[0].length > 0) {
                    texto = lines.shift()
                    texto = texto.split("")
                } else lines.shift()
            }
            for (i = 0; i < texto.length; i++) {
                somaLetras += (texto[i].charCodeAt(0) - 65) + qtsCaso + qtsLetra
                qtsLetra++
            }
            qtsCaso++
            qtsLinhas--
        }
        console.log(somaLetras)
        casos--
    } else lines.shift()
}