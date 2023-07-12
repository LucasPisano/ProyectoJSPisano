function calculadoraSimple(num1, operacion, num2) {
    switch (operacion) {
        case "+":
            return num1 + num2;
            break;
        case "-":
            return num1 - num2;
            break;
        case "*":
            return num1 * num2;
            break;
        case "/":
            if (b === 0) {
                return "Error: No se puede dividir entre cero";
            } else {
                return a / b;
            }


        default:
            return "los numeros ingresados no son correctos";
            break;
    }
}
function calculadoraDolar(moneda) {

    const Dolar = 600 /*entiendo que el precio del dolar varia. en este caso lo uso como constante solo de ejemplo!*/
    flag = true
    num1 = parseInt(prompt("ingrese el monto a convertir"))
    while (flag) {
        if (moneda === "p") {
            return num1 / Dolar;
        } else if (moneda === "d") {
            return num1 * Dolar;
        } else if (moneda === "s") {
            flag = confirm("desa salir?")
        } else {
            flag = confirm("la letra ingresado es incorrecta. vuelva a ingresarla o de lo contrario presione (cancelar) para salir")
        }
    }


}
let num1, num2, operacion, result, moneda
let flag = true
do {
    let seleccion = parseInt(prompt("selecciona la app que queres utilizar 1)Calculadora simple o 2)calculadora dolar"))
    if (seleccion === 1) {
        num1 = parseFloat(prompt("Ingrese el primer número:"));
        operacion = prompt("Ingrese la operación (+, -, *, /):");
        num2 = parseFloat(prompt("Ingrese el segundo número:"));
        result = calculadoraSimple(num1, operacion, num2);
        alert(`El resultado es: ${result}`);
        flag = confirm("desea continuar?")
    } else if (seleccion === 2) {
        alert("recuerde que solo tiene 3 intentos para elegir las opciones")
        let moneda = prompt("quiere calcular de pesos a dolar (p) o de dolar a pesos (d). para salir presione (s)")
        for (let i = 0; i < 3; i++) {
            if (moneda == "p" || moneda == "d" || moneda == "s") {
                result = calculadoraDolar(moneda)
                alert(`El resultado es: $${result}`);
                i = 3
            } else {
                flag = confirm("intento N° " + i + " la letra ingresado es incorrecta. vuelva a ingresarla o de lo contrario presione (cancelar) para salir")
            moneda = prompt("quiere calcular de pesos a dolar (p) o de dolar a pesos (d). para salir presione (s)")
            }
        }

    } else {
        flag = confirm("el numero ingresado es incorrecto. vuelva a ingresarlo o de lo contrario presione (cancelar) para salir")
    }

} while (flag == true)

alert("programa finalizado")
