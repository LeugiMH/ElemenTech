function verificarQuiz(quiz,event){
    event.preventDefault();

    const questions = quiz.querySelectorAll("ol li");

    //Definindo classes de estilização para as alternativas
    const labelClassesup = "form-check-label bg-success rounded-2";
    const labelClassesdown = "form-check-label bg-danger rounded-2";

    //*Para cada questão
    questions.forEach((question) => {
        const labels = question.querySelectorAll("div label");

        //Pegando o input e o label do mesmo
        const altEscolhida = question.querySelector("input:checked");
        const labelEscolhido = question.querySelector(`label[for=${altEscolhida.id}]`);

        //Resetando todas as alterações anteriores
        labels.forEach((label) => {
            label.classList = "form-check-label";
        });

        //Verificando se acertou ou não 
        if(altEscolhida.value == question.getAttribute("data-quiz")){
            labelEscolhido.classList = labelClassesup;   
        }
        else{
            labelEscolhido.classList = labelClassesdown;  
        }
    });
}