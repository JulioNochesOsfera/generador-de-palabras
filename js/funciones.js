const generar = () => {
    var n = document.getElementById("cadena").value;
    let o = document.getElementById("cantidad").value - 1;
    var m = 0;
    var result = '';
    var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    const aux = [];
    const resultado = [];
    var com = Math.pow(charactersLength, n);
    alert("La cantidad maxima es: " + com)
    do {

        if (resultado.length == 0) {
            //genero las claves//
            for (var i = 0; i < n; i++) {

                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            resultado.push(result);
            result = '';
        }
        if (resultado.length < com) {
            if ((aux.length) == 0) {

                for (var i = 0; i < n; i++) {

                    result += characters.charAt(Math.floor(Math.random() * charactersLength));
                }
                aux.push(result);
                result = '';
            }

        }
        if (resultado.length >= com) {

            if ((aux.length) == 0) {
                for (var i = 0; i < (parseInt(n) + 1); i++) {
                    result += characters.charAt(Math.floor(Math.random() * charactersLength));
                }

                aux.push(result);
                result = '';
            }
        }

        //verifico
        if ((aux.length) >= 1) {
            let n = 0;
            for (let i = 0; i < (resultado.length); i++) {
                for (let j = 0; j < aux.length; j++) {

                    if (resultado[i] !== aux[j]) {
                        n++;
                    }
                    if (resultado[i] === aux[j]) {
                        console.log(resultado[i] + " se repitio en la posicion: " + (i + 1));
                        aux.pop();
                    }

                    if (n == resultado.length) {
                        resultado.push(aux[j]);
                        m++
                        aux.pop();
                    }

                }


            }
        };

    } while (m < o);
    //2000 < 2000

    //muestro resultados//
    document.write("Unicas: " + (resultado.length) + "<br> <br>")
    for (let i = 0; i < (resultado.length); i++) {
        document.write((i + 1) + "-. " + resultado[i] + "<br>")
    }



}

