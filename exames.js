export class Exam {
    constructor(weight, answer){
        this.weight = weight;
        this.answer = answer;
        this.exams = [];
    }
    // Adiciona resposta à lista
    add(exam) {
        exam.grade = Object.keys(exam.values).reduce((acc, q) => {
            return acc + (exam.values[q]===this.answer.values[q] ? this.weight[q]:0)}, 0);

        this.exams.push(exam);
    }


    // Retorna média das notas
    avg() {
        let sum = this.exams.reduce((acc, exame) => acc + exame.grade, 0);
        return sum/this.exams.length;
    }
    // Retorna o menor valor
    min() {
        let min = this.exams[0].grade;
        for(let i=1; i<this.exams.length; i++){
            if (this.exams[i].grade<min){
                min = this.exams[i].grade
            }
        }
        return min;
            }
    // Retorna o maior valor
    max() {
        let max = this.exams[0].grade;
        for(let i=1; i<this.exams.length; i++){
            if (this.exams[i].grade>max){
                max = this.exams[i].grade;
            }
        }
        return max;
    }
    // Retorna valores menores do que o limite informado
    lt(limit) {
        return this.exams.filter(exam => exam.grade<limit).map(exam => exam.grade);
    }
    // Retorna valores maiores do que o limite informado
    gt(limit) {
        return this.exams.filter(exam => exam.grade>limit).map(exam => exam.grade);
    }
            
        }



