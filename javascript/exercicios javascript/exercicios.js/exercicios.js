 //JavaScript: Condicionais (if, else,)

// 1. Peça ao usuário uma idade
let idade = prompt("Digite sua idade:");

// Converter a entrada para número (prompt retorna texto)
idade = Number(idade);

// 2. Use um if-else para verificar se ele é maior ou menor de idade
if (idade >= 18) {
    // Sim
    alert("Você é maior de idade");
} else {
    // Não
    alert("Você é menor de idade");
}


// 2. Pedir ao usuário para inserir um número
const Number(prompt(Digit um numero))
let input = prompt("Digite um número:");
let numero = parseFloat(input);

// 2. Usar if-else para verificar se o número é positivo ou negativo
// OBS: 0 é considerado negativo conforme solicitado
if (numero > 0) {
    // 3. Exibir resultado
    console.log("O número é positivo");
} else {
    // 3. Exibir resultado (caso seja 0 ou menor)
    console.log("O número é negativo");
}



// 3. Solicita a nota do aluno (input)
let nota = prompt("Digite a nota do aluno (0 a 100):");

// Converte a entrada para número (prompt retorna uma string)
nota = parseFloat(nota);

// 2. Estrutura condicional (C{ Nota >= 60? })
if (nota >= 60) {
    // 3. Exibir: Aprovado (alert)
    alert("Aprovado");
} else {
    // 4. Exibir: Reprovado (alert)
    alert("Reprovado");
}

// 5. Fim


// 4. Peça ao usuário para inserir um número
let numero = parseFloat(prompt("Digite um número:"));

// 4. Use um if-else para verificar se o número é positivo, negativo ou zero
if (isNaN(numero)) {
    alert("Por favor, insira um número válido.");
} else if (numero > 0) {
    alert("O número é positivo");
} else if (numero < 0) {
    alert("O número é negativo");
} else {
    alert("O número é zero");
}



// 5. Peça ao usuário para inserir um número.
let numero = prompt("Digite um número:");

// Converte a entrada para um número inteiro
numero = parseInt(numero);

// Verifica se a entrada é um número válido
if (isNaN(numero)) {
    alert("Por favor, digite um número válido.");
} else {
    // 2. Use o operador % para verificar se o número é divisível por 2.
    if (numero % 2 === 0) {
        // 3. Exibir: O número é par
        alert("O número é par");
    } else {
        // 4. Exibir: O número é ímpar
        alert("O número é ímpar");
    }
}



// 6. Solicitar os números e a operação ao usuário
let num1 = parseFloat(prompt("Digite o primeiro número:"));
let operacao = prompt("Digite a operação (+, -, *,):");
let num2 = parseFloat(prompt("Digite o segundo número:"));
let resultado;

// 6. Usar if-else para calcular o resultado
if (isNaN(num1) || isNaN(num2)) {
    resultado = "Erro: Por favor, digite números válidos.";
} else if (operacao === "+") {
    resultado = num1 + num2;
} else if (operacao === "-") {
    resultado = num1 - num2;
} else if (operacao === "*") {
    resultado = num1 * num2;
} else if (operacao === "/") {
    // Verificação de divisão por zero
    if (num2 === 0) {
        resultado = "Erro: Divisão por zero!";
    } else {
        resultado = num1 / num2;
    }
} else {
    resultado = "Erro: Operação inválida.";
}

// 3. Exibir o resultado final:



//5 ano bissexto

function verificarAnoBissexto() {
    // 1. Pede o ano ao usuário
    let entrada = prompt("Digite o ano:");
    let ano = parseInt(entrada);

    // Verifica se a entrada é um número válido
    if (Number.isNaN(ano)) {
        console.log("Por favor, digite um ano válido.");
        return;
    }

    // 5. Aplica a regra: divisível por 400 OU (divisível por 4 E NÃO por 100)
    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        console.log(ano + " é um ano bissexto.");
    } else {
        console.log(ano + " não é um ano bissexto.");
    }
}

// Chame a função
verificarAnoBissexto();














