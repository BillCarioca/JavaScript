const arrPrincipal = [1,2,3,4,5,6,7,8,9]
const arrPar = arrPrincipal.filter(x => x% 2 == 0)
const arrImpar = arrPrincipal.filter(x => x% 2 == 1)

console.log(arrPar)
console.log(arrImpar)


const listaDeAlunos = [
    { nome: "João", notas: [8, 7] },
    { nome: "Maria", notas: [9, 8] },
    { nome: "Carlos", notas: [6, 5] },
    { nome: "Ana", notas: [7, 6] },
    { nome: "Pedro", notas: [10, 9] },
    { nome: "Lúcia", notas: [8, 7] },
    { nome: "Fernando", notas: [7, 6] },
    { nome: "Camila", notas: [9, 8] },
    { nome: "Rafael", notas: [6, 5] },
    { nome: "Juliana", notas: [10, 9] },
  ];

  //listaDeAlunos.forEach(aluno=> {
  //  const media = (aluno.notas[0]+aluno.notas[1])/2.00
  //  console.log(`O aluno ${aluno.nome} tem a nota media de ${media.toFixed(1)}`);
  //})

  for( aluno of listaDeAlunos){
    const media = (aluno.notas[0]+aluno.notas[1])/2.00
    console.log(`O aluno ${aluno.nome} tem a nota media de ${media.toFixed(1)}`);
  }

  const dezenas = []

  while(dezenas.length<6){
    const numeroSoteado = Math.round(Math.random() * 60)
    if (!dezenas.includes(numeroSoteado)) dezenas.push(numeroSoteado)
  }

  console.log(dezenas)