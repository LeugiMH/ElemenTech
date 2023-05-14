function verificarQuiz(e){
    e.preventDefault();

    const Questions = document.querySelectorAll("#Fquiz li");

    const labels = document.querySelectorAll("#Fquiz label");

    //Limpando as alterações anteriores
    labels.forEach((label,index) => {
        label.classList = "form-check-label";
    });


    /* 
    *sei que tem formas infinitamente mais simples de fazer oq esse código faz, 
    *porém eu queria fazer um código limpo e que fosse impossível de saber a resposta
    *apenas observando o html da página. e que seja fácil de definir a resposta correta
    */
    Questions.forEach((quest,QuestNum) => {

        //filtro para cada questão
        switch(QuestNum){
            case 0:
                {
                    const altEscolhida = quest.querySelector("input:checked");
                    const txtEscolhido = quest.querySelector(`label[for=${altEscolhida.id}]`);
                    
                    //Valor a ser verificado e resposta correta
                    if(altEscolhida.value == "b"){
                        txtEscolhido.classList = "form-check-label bg-success";   
                    }
                    else{
                        txtEscolhido.classList = "form-check-label bg-danger";  
                    }
                }
            break;
            case 1:
                {
                    const altEscolhida = quest.querySelector("input:checked");
                    const txtEscolhido = quest.querySelector(`label[for=${altEscolhida.id}]`);
                    
                    //Valor a ser verificado e resposta correta
                    if(altEscolhida.value == "b"){
                        txtEscolhido.classList = "form-check-label bg-success";   
                    }
                    else{
                        txtEscolhido.classList = "form-check-label bg-danger";  
                    }
                }   
            break;
            case 2:
                {
                    const altEscolhida = quest.querySelector("input:checked");
                    const txtEscolhido = quest.querySelector(`label[for=${altEscolhida.id}]`);
                    
                    //Valor a ser verificado e resposta correta
                    if(altEscolhida.value == "a"){
                        txtEscolhido.classList = "form-check-label bg-success";   
                    }
                    else{
                        txtEscolhido.classList = "form-check-label bg-danger";  
                    }
                }   
            break;
            case 3:
                {
                    const altEscolhida = quest.querySelector("input:checked");
                    const txtEscolhido = quest.querySelector(`label[for=${altEscolhida.id}]`);
                    
                    //Valor a ser verificado e resposta correta
                    if(altEscolhida.value == "b"){
                        txtEscolhido.classList = "form-check-label bg-success";   
                    }
                    else{
                        txtEscolhido.classList = "form-check-label bg-danger";  
                    }
                }   
            break;
            case 4:
                {
                    const altEscolhida = quest.querySelector("input:checked");
                    const txtEscolhido = quest.querySelector(`label[for=${altEscolhida.id}]`);
                    
                    //Valor a ser verificado e resposta correta
                    if(altEscolhida.value == "b"){
                        txtEscolhido.classList = "form-check-label bg-success";   
                    }
                    else{
                        txtEscolhido.classList = "form-check-label bg-danger";  
                    }
                }   
            break;
        }
    });
}
