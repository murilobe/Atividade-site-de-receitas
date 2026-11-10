const form = document.getElementById("formComentario");
const lista = document.getElementById("listaComentarios");

form.addEventListener("submit", e => {
  e.preventDefault();
  const nome  = document.getElementById("nome").value.trim();
  const nota  = +document.getElementById("nota").value;
  const texto = document.getElementById("texto").value.trim();

  const card = document.createElement("div");
  card.className = "card mb-2";
  const corpo = document.createElement("div");
  corpo.className = "card-body";
  const titulo = document.createElement("h6");
  titulo.textContent = nome + " — " + "★".repeat(nota) + "☆".repeat(5 - nota);
  const p = document.createElement("p");
  p.className = "mb-0";
  p.textContent = texto;

  corpo.append(titulo, p);
  card.append(corpo);
  lista.prepend(card);
  form.reset();
});

