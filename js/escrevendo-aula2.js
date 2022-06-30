



var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("Qual é o comando para o git?");
  if ((nome == "git init")) {
    alert("O " + nome + ", serve para iniciar o git.Parabéns você acertou!");
    window.location="aula3.html";
}
    else{
        alert("você errou"); 
        window.location="aula2comandos.html";
    }

};
