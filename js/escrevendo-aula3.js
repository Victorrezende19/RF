var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("Qual é o comando para iniciar o git?");
  if ((nome == "git init")) {
    alert("O " + nome + ", serve para iniciar o git.Parabéns você acertou!");
    window.location="aula4.html";
}
    else{
        alert("você errou temte novamente"); 
        window.location="aula3comandos.html";
    }

};
