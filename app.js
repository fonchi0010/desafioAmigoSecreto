// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//En el input usar id="amigo"

//en la lista desordenada usar id="listaAmigos"

//funcion agregarAmigo() Boton que activa la lógica requerida.

let listaAmigos = [];

let dataLista = document.getElementById("listaAmigos");

function agregarAmigo() {
  let nombreAmigoIngresado = document.getElementById("amigo").value;

  if (nombreAmigoIngresado === "") {
    alert("Por favor, inserte un nombre.");
  } else {
    listaAmigos.push(nombreAmigoIngresado);
    document.getElementById("amigo").value = "";
    actualizarLista();
  }
  console.log(listaAmigos);
  return;
}
function actualizarLista() {
  dataLista.innerHTML = "";

  let listaVacia = 0;
  let listaConDatos = listaAmigos.length - 1;

  while (listaVacia <= listaConDatos) {
    let dataListaVisible = document.createElement("li");
    dataListaVisible.textContent = listaAmigos[listaVacia];
    dataLista.appendChild(dataListaVisible);
    listaVacia++;
  }
  return;
}
function sortearAmigo() {
  if (listaAmigos.length === 0) {
    alert("Ingrese nombre de amigos para realizar el sorteo");
  }
  if (listaAmigos.length < 3) {
    alert("Ingrese más nombre de amigos para realizar el sorteo");
  } else {
    let indiceAleatorioAmigoSorteado = Math.floor(
      Math.random() * listaAmigos.length
    );
    let nombreAmigoSorteado = listaAmigos[indiceAleatorioAmigoSorteado];
    let nombreAmigoMostrado = document.getElementById("resultado");
    nombreAmigoMostrado.innerHTML = nombreAmigoSorteado;

    dataLista.innerHTML = "";
  }
  return;
}
