const Aluno = require('./src/Aluno');
const Turma = require('./src/Turma');
const TurmaPresencial = require('./src/TurmaPresencial');

const aluno1 = new Aluno('João', 'joao123', '123456');
const turma1 = new Turma('Math101', 7);
const turmaPresencial1 = new TurmaPresencial('Sci101', 8, 80);

console.log(`Aluno: ${aluno1.nome}, RA: ${aluno1.ra}`);
console.log(`Turma ${turma1.codigo} - Aprovado: ${turma1.aprovado()}`);
console.log(`Turma Presencial ${turmaPresencial1.codigo} - Aprovado: ${turmaPresencial1.aprovado()}`);
