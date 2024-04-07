// 2. James estava criando uma array com as cores do arco-íris, e ele
// esqueceu algumas cores. As cores padrão de um arco-íris são
// normalmente listadas nesta ordem:
// const rainbow = ["Vermelho", "Laranja", "Amarelo", "Verde", "Azul",
// "Roxo"];

// mas James tinha isto:
// const rainbow = ["Vermelho", "Laranja", "Preto", "Azul"];

// Usando somente o método splice insira as cores que faltam na array e
// remova a cor "Preto", seguindo estes passos:

// a. Remova "Preto"
// b. Adicione "Amarelo" e "Verde"
// c. Adicione "Roxo"

const rainbow = ["Vermelho", "Laranja", "Preto", "Azul"];

rainbow.splice (2, 1);

console.log(`${rainbow}`);

rainbow.splice (2, 0, `Amarelo`, `Verde`);

console.log(`${rainbow}`);

rainbow.splice (5, 0, `Roxo`);

console.log(`${rainbow}`);