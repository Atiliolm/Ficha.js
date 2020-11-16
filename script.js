Nome=prompt("Digite seu nome completo")
Nascimento=prompt("Data de Nascimento")
idade=prompt("Digite sua idade")
temcondicao=confirm("Possui condição pré-existente?")
acompanhamento=confirm("Precisa de acompanhamento médico?")
if(acompanhamento){
    precisaacompanhamento="Sim"
    }
if(acompanhamento==false){
    precisaacompanhamento="Não"
    }
if(temcondicao)
{
  saude= ("Sim")
}
if(temcondicao==false){
  saude= ("Não")
}
tagh1.innerHTML= 
  "Nome: " + Nome
tagul.innerHTML=  
  `<li> Data de Nascimento: ${Nascimento} </li>
  <li> Idade: ${idade} </li>
  <li> Condição pré-existente: ${saude} </li>
  <li> Acompanhamento médico: ${precisaacompanhamento}
  </li>`