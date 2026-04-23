let minhaVariavel = 10;
console.log(minhaVariavel);

minhaVariavel = "hello,world!!";
console.log =(minhaVariavel);

minhaVariavel = true;
console.log(minhaVariavel);

let numero = 10;
let texto = "20";

let resultado = numero + texto;
console.log = (resultado);

// Isso e um comentario de linha unica
/*
Isso e um comentario
  de multiplas linhas
 */
console.log("isso vai executar"); // mais isso aqui e ignorado

let nome = "Thiago";
let Nome = "lucas";
let Nome = "gabi";
console.log = (nome)
console.log = (nome)
console.log = (nome)

// Palavras Reservadas
// let, const, var, if, else, for, while, function, return, class, new, switch, case,

//Pode começar com letra, _ ou $
//Pode conter letras, numeros, _ ou $
//Nao pode: comecar com numero 
//nao pode: ter espaços
//Nao pode: usar acentos

let  nome;
let  nomeCompleto;
let _contador;
let idade2;

//Nomes de funçoes começcam com verbo;
function calcularmedida(){

}
function buscarUsuario(){

}

//Tipos Primitivos
//Number - numero
const preco = 19.9;
console.log("typeof preco")



//String - texto
const nome = "Thiago";
console.log(typeof nome3);

//Boolean - verdadeiro ou falso
const ativo = true;
console.log(typeof ativo)

//Null - Ausencia intencional de valor
const vazio = null;
console.log(typeof vazio);


//Undefined - Variavel sem Valor
let indefinido;
console.log(typeof indefinido);

//BIGINT - Numeros muito grandes
const grandes = 98888877776655443333222211100000000;
console.log(typeof grandes);

//Valores Especiais; NaN e Infinity
///INFINITY - Divisao por zero
console.log(5/0);
console.log(-5/0);

//NaN (Not a Number) - operaçao invalida
console.log("abc" * 3 );
console.log(Math. sqrt(-1));
console.log(0/0);

//Checar se e NaN
console.log(Number.isNaN("abc * 3"));
function calcularTotal(preco, quantidade){
const total = preco * quantidade

if (Number.isNaN(total)) {
    console.log("erro"preco ou quantidade invalidos )
    return 0;

}
return total;
}

console.log(calcularTotal("abc", 2));
console.log(calcularTotal(10, 5));

//Strings e templates Literals
// // Aspas simples, duplas ou crase
const nome4 = 'Luca';
const nome5 = 'Maria';
const nome6 = "joao";


//Propriedades e metodos 
console nomeCompleto2 = "Lucas Ribeiro de lacerda"
console.log(nomeCompleto2. length);
console.log(nomeCompleto2.toUpperCase());
console.log(nomeCompleto2.toLowerCase());


// Template string (crase) - permite inserir variaveis
const nome7 = "Lucas";
const idade = "20"

console.log(`Olà, meu nome e ${nome7} e tenho ${idade} anos.`);


// Conversao de Tipo
console.log(Number("123"));
console.log(parseInt("10.9"));
console.log(parseFloat("10.9"));
console.log(String(123));
console.log(Boolean(0));
console.log(Boolean(1))
console.log(Boolean());
console.log(Boolean("ola"));


const texto2 = prompt("Digite um numero");
console.log(texto2 + 5);

//const numero2 = Number(prompt("Digite um numero"));
//console.log(numero2 + 5);
//alert(text2 + 5 );



const numero2 = Number(prompt("Digite um numero"));
console.log(numero2 + 5);
alert (numero22 + 5 );

// Operadores Aritmeticos
console.log(2 + 3) //soma
console.log(5 - 2) //subtraçao
console.log(4 * 2) //multiplicaçao
console.log(10 / 2)//divisao
console.log(10 % 3)//resto da divisao
console.log(2 ** 3)//potencia


comsole.log(2 + 3 * 4);
console.log((2 +3)*4);

//Operadores de Comparacao
console.log(5 =="5"); //true - valores sao iguais
console.log(5 == 5);//true - valores iguais


console.log(5 === "5"); // false - tipos diferentes (number vs string)
console.log(5 === 5); // true - valor e tipo iguais

console.log(5 != "5"); // false - valores Nao sao diferentes
console.log(5 != 7); // true - valores sao diferentes


console.log(5 !== "5"); // true - valores sao diferentes (tipos diferentes)
console.log(5 !== 5); // false - valores nao sao diferentes (identicos)


console.log(!true);
console.log(!false);

const idade3 = 15;
console.log(idade3 >= 18 )
console.log (!(idade3 >= 18 ));


const nome8 "";
const nomeVazio = nome === "";
console.log(nomeVazio)

const nomeNaoVazio = nome8 !=="";


console.log(!!true);


//Estrutura Sequencial (entrada - processamento - Saida)

//Entrada
const Nome9 = prompt("Digite seu Nome:");
//Processamento
//Saida
console.log(" Hello", + nome9 + "!");

//Entrada Some de Numeros
const N1 = Number(prompt(Digite Primeiro o numero));
const N2 = Number(prompt(Digite Primeiro o numero));
//Processamento
const soma = N1 + N2;
//Saida
alert("Resultado" + soma);

//Dobro de um Numero

//Entrada
const numero =  Number (prompt("Digite um numero:");
const dobro =  numero * 2
alert(`O dobro de ${numero} è ${dobro}`);


//Media de duas notas
const numero = Number(prompt("Digite um Valor");
const numero2 = Number(prompt("Digite outro Valor"));
const media = (numero + numero2) / 2;
alert(`A média é ${media.toFixed(1)}`);



//Idade Detalhada
//Converter anos em meses, dias, horas e minutos.

//Faça um programa que leia a ***idade de uma pessoa em anos** e mostre a mesma idade aproximada em:

//Meses
//Dias
//Horas
//Minutos
//Use **365 dias por ano** como simplificaçao

const anos = Number (prompt("Digite sua idade em anos:"));
const meses = anos * 12;
const dias = anos * 365;
const horas = dias * 24;
const minutos = horas * 60;

console.log(ìdade informada: ${anos} anos`);
console.log("____________________________");
console.log( `${meses} meses`);
console.log( `${dias} dias`);
console.log( `${horas} horas`);
console.log( `${minutos} minutos`);

// Celsius - Fahrenheit
//Converter temperatura do Celsius para Fahrenheit

//Formula: F = ( c * 9/5) + 32



const celsius = number (prompt("Temperatura em C:"));
const Fahrenheit = Celsius * 9/5 + 32;
console.log(`{celsius} C = ${f.toFixed(1)} F`);






















