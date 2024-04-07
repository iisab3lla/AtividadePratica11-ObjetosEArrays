// Crie um cadastro de pessoas onde o usuário informe o nome, idade
// e se está trabalhando ou não, se a pessoa estiver trabalhando
// pergunte para ele o salário que está ganhando. Para cada pessoa

// cadastrada, pergunte ao usuário se ele deseja continuar
// cadastrando ou não. No final, mostre as pessoas que estão
// desempregadas, as pessoas que estão empregadas separadas
// pelas que ganham mais que 2500 e menos que 2500.

// Exemplo de resultado:
// Pessoas desempregadas:
// Nome: Alessandro, Idade: 28
// Nome: Alessandro, Idade: 28

// Pessoas empregadas com salários menores que 2500:
// Nome: Alessandro, Idade: 28, Salário: 1500
// Nome: Alessandro, Idade: 28, Salário: 2400

// Pessoas empregadas com salários maiores que 2500:
// Nome: Alessandro, Idade: 28, Salário: 2700
// Nome: Alessandro, Idade: 28, Salário: 3000

let pessoas = [];

function cadastrarPessoa() {
    let nome = prompt("Digite seu nome!");
    let idade = parseInt(prompt("Digite sua idade!"));
    let trabalhando = prompt("Você esta trabalhando atualmente? (sim/não)").toLowerCase();
    let salario = 0;

    if (trabalhando === 'sim') {
        salario = parseFloat(prompt("Digite o seu salário!"));
    }

    pessoas.push({ nome, idade, trabalhando, salario });
}

function mostrarPessoas() {
    let desempregados = [];
    let empregadosMenos2500 = [];
    let empregadosMais2500 = [];

    for (let pessoa of pessoas) {
        if (pessoa.trabalhando != `sim`) {
            desempregados.push(pessoa);
        } else if (pessoa.salario < 2500) {
            empregadosMenos2500.push(pessoa);
        } else if(pessoa.salario > 2500){
            empregadosMais2500.push(pessoa);
        }
    }

   document.write(`Pessoas desempregadas: <br>`);
    for (let pessoa of desempregados) {
       document.write(`Nome: ${pessoa.nome} | Idade: ${pessoa.idade} <br> <br>`);
    }

   document.write(`Pessoas empregadas com salários menores que 2500: <br>`);
    for (let pessoa of empregadosMenos2500) {
       document.write(`Nome: ${pessoa.nome} | Idade: ${pessoa.idade} | Salário: ${pessoa.salario} <br> <br>`);
    }

   document.write(`Pessoas empregadas com salários maiores que 2500: <br>`);
    for (let pessoa of empregadosMais2500) {
       document.write(`Nome: ${pessoa.nome} | Idade: ${pessoa.idade} | Salário: ${pessoa.salario}`);
    }
}

do {
    cadastrarPessoa();
} while (confirm("Deseja cadastrar outra pessoa?"));

mostrarPessoas();