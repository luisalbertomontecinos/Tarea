
function contar(palabra, letra) {
    let x = 0;
    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] === letra) {
            x++;
        }
    }
    return x;
}

const palabra = "banana";
const letra = "a";
const resultado = contar(palabra, letra);

console.log(`La letra '${letra}' aparece ${resultado} veces en la palabra '${palabra}'`);
