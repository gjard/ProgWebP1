/*gabriel jard*/
var input = require('fs').readFileSync("stdin","utf8");
var lines = input.split("\n")
var linhas,paginas

while(lines.length>0){
  x= 0
  letras=0
  var isFirstWord = true
    linhas= 1
    paginas = 1
    if(lines[0].length > 0) {
      var [num_palavra,max_linha,max_carac] = lines[0].split(' ').map(item => parseInt(item))
    var line = lines.shift()
    line = lines.shift()
    line = line.split(" ")
    for(j=1;j<num_palavra;j++){
      if(isFirstWord === true) {
        letras = line[j-1].length
        isFirstWord = false
      }
        x = line[j].length

        if (letras + x + 1 <= max_carac){
            letras = letras + x + 1
        }
        else{
            linhas = linhas + 1
            if(linhas>max_linha){
                paginas = paginas + 1
                linhas= 1
            }
            letras = x
            }
   
    }
    console.log(paginas)
    } else {
      lines.shift()
    }
}