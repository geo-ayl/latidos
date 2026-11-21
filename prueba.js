const marcar = (name, value) => {
  document.querySelector(`input[name="${name}"][value="${value}"]`).checked = true;
};

document.querySelector("#formulario").reset();
document.querySelector("#fecha").value = "2026-11-20";
marcar("animo", "1");
marcar("alimentacion", "5");
marcar("lesiones", "5");
marcar("psicologico", "1");
marcar("descanso", "5");
document.querySelector("#formulario").requestSubmit();

const trasDos = {
  aviso: document.querySelector("#aviso").textContent,
  indice: document.querySelector("#indice").textContent,
  nota: document.querySelector("#indice-nota").textContent,
  organos: document.querySelector("#organos").innerText,
};

document.querySelector("#formulario").reset();
document.querySelector("#fecha").value = "2026-11-21";
marcar("animo", "5");
marcar("alimentacion", "5");
marcar("lesiones", "5");
marcar("psicologico", "5");
marcar("descanso", "5");
document.querySelector("#formulario").requestSubmit();

const trasUpdate = {
  aviso: document.querySelector("#aviso").textContent,
  indice: document.querySelector("#indice").textContent,
  nota: document.querySelector("#indice-nota").textContent,
  filas: document.querySelectorAll("#tabla-historial tbody tr").length,
  historial: document.querySelector("#tabla-historial").innerText,
};

document.querySelector("#formulario").reset();
document.querySelector("#fecha").value = "2026-11-22";
const invalido = document.querySelector("#formulario").requestSubmit();

document.documentElement.dataset.resultado = JSON.stringify({
  trasDos,
  trasUpdate,
  incompleto: {
    aviso: document.querySelector("#aviso").textContent,
    filas: document.querySelectorAll("#tabla-historial tbody tr").length,
    invalido,
  },
});
