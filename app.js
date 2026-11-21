const ESCALA = [
  { valor: 1, nombre: "Malo" },
  { valor: 5, nombre: "Regular" },
  { valor: 10, nombre: "Bueno" },
];

const PREGUNTAS = [
  { id: "animo", nombre: "Estado de ánimo", texto: "¿Cómo describes tu ánimo hoy?" },
  { id: "alimentacion", nombre: "Alimentación", texto: "¿Cómo valoras lo que comiste y bebiste hoy?" },
  { id: "lesiones", nombre: "Lesiones", texto: "¿Cómo está tu cuerpo respecto a lesiones o dolor físico? 10 significa sin molestias." },
  { id: "psicologico", nombre: "Trastornos psicológicos", texto: "¿Cómo percibes hoy tu estado psicológico? Es un reporte propio, no un diagnóstico." },
  { id: "descanso", nombre: "Descanso y energía", texto: "¿Cómo dormiste y cuánta energía tienes?" },
];

const SISTEMAS = [
  { id: "cerebro", nombre: "Cerebro", detalle: "Ánimo, estado psicológico y recuperación.", preguntas: ["animo", "psicologico", "descanso"] },
  { id: "corazon", nombre: "Corazón", detalle: "Ánimo y energía del día.", preguntas: ["animo", "descanso"] },
  { id: "estomago", nombre: "Estómago", detalle: "Sigue de forma directa a la alimentación.", preguntas: ["alimentacion"] },
  { id: "higado", nombre: "Hígado", detalle: "Alimentación junto con el descanso.", preguntas: ["alimentacion", "descanso"] },
  { id: "musculos", nombre: "Músculos y articulaciones", detalle: "Lesiones reportadas y nivel de recuperación.", preguntas: ["lesiones", "descanso"] },
  { id: "inmune", nombre: "Sistema inmune", detalle: "Alimentación, lesiones, descanso y ánimo.", preguntas: ["alimentacion", "lesiones", "descanso", "animo"] },
];

const DEPARTAMENTOS = [
  { id: "tecnologia", nombre: "Tecnología", enfoque: "Pantalla y horarios extendidos" },
  { id: "operaciones", nombre: "Operaciones", enfoque: "Carga física y turnos" },
  { id: "comercial", nombre: "Comercial", enfoque: "Metas y contacto con clientes" },
  { id: "finanzas", nombre: "Finanzas", enfoque: "Cierre y concentración" },
  { id: "atencion", nombre: "Atención", enfoque: "Demanda continua de servicio" },
  { id: "direccion", nombre: "Dirección", enfoque: "Decisiones y agenda" },
];

const ACCION = {
  cerebro: "Revisar carga mental, tiempos de desconexión y el clima del equipo.",
  corazon: "Proteger pausas y el ritmo de la jornada. La energía diaria está baja.",
  estomago: "Asegurar tiempo y acceso real para comer durante el turno.",
  higado: "La alimentación y el descanso se están arrastrando juntos. Conviene ajustar ambos.",
  musculos: "Revisar esfuerzo físico, postura, pausas y rotación de tareas.",
  inmune: "Hay varios frentes bajos a la vez. Una semana con menos carga ayuda a recuperar.",
};

const EXTRAS = {
  operaciones: [4, 4, 2, 4],
  comercial: [2, 2, 0, 2],
  tecnologia: [2, 4, 2, 0],
  atencion: [2, 2, 0],
  finanzas: [0, 0, 0],
  direccion: [0, 0, 2],
};

const USUARIOS = [
  { correo: "empleado@latidos.demo", clave: "latidos", rol: "empleado", nombre: "Ana López", departamento: "operaciones" },
  { correo: "rrhh@latidos.demo", clave: "latidos", rol: "rrhh", nombre: "Mariana Ruiz", departamento: null },
];

const PERFILES = {
  operaciones: [
    { animo: 5, alimentacion: 5, lesiones: 1, psicologico: 5, descanso: 1 },
    { animo: 5, alimentacion: 10, lesiones: 1, psicologico: 5, descanso: 5 },
    { animo: 10, alimentacion: 5, lesiones: 1, psicologico: 10, descanso: 1 },
    { animo: 5, alimentacion: 5, lesiones: 1, psicologico: 5, descanso: 5 },
  ],
  comercial: [
    { animo: 1, alimentacion: 10, lesiones: 10, psicologico: 1, descanso: 5 },
    { animo: 1, alimentacion: 5, lesiones: 10, psicologico: 1, descanso: 5 },
    { animo: 5, alimentacion: 10, lesiones: 5, psicologico: 1, descanso: 1 },
    { animo: 1, alimentacion: 10, lesiones: 10, psicologico: 5, descanso: 5 },
  ],
  tecnologia: [
    { animo: 5, alimentacion: 5, lesiones: 10, psicologico: 5, descanso: 1 },
    { animo: 5, alimentacion: 5, lesiones: 10, psicologico: 1, descanso: 1 },
    { animo: 1, alimentacion: 10, lesiones: 10, psicologico: 5, descanso: 1 },
    { animo: 5, alimentacion: 5, lesiones: 5, psicologico: 5, descanso: 5 },
  ],
  atencion: [
    { animo: 5, alimentacion: 1, lesiones: 10, psicologico: 5, descanso: 5 },
    { animo: 5, alimentacion: 1, lesiones: 10, psicologico: 1, descanso: 5 },
    { animo: 1, alimentacion: 5, lesiones: 10, psicologico: 5, descanso: 1 },
  ],
  finanzas: [
    { animo: 10, alimentacion: 10, lesiones: 10, psicologico: 10, descanso: 10 },
    { animo: 10, alimentacion: 10, lesiones: 10, psicologico: 5, descanso: 10 },
    { animo: 10, alimentacion: 5, lesiones: 10, psicologico: 10, descanso: 10 },
  ],
  direccion: [
    { animo: 10, alimentacion: 10, lesiones: 10, psicologico: 10, descanso: 5 },
    { animo: 10, alimentacion: 10, lesiones: 5, psicologico: 10, descanso: 10 },
    { animo: 5, alimentacion: 10, lesiones: 10, psicologico: 10, descanso: 10 },
  ],
};

const CLAVE = "pulso-v2";
const FLAG = "pulso-v2-listo";
const CLAVE_ULTIMA = "pulso-ultima-v2";
const CLAVE_SESION = "pulso-sesion";
const UMBRAL = 5;
const VISTAS = ["panel", "encuesta", "resultado", "respuestas"];
const TEXTOS = {
  panel: ["RRHH", "Elige un departamento", "El color del cuerpo es el promedio del equipo. Rojo pide atención."],
  encuesta: ["Paso 1 de 2", "Responde y envía", "Cinco preguntas y las horas extra. Después ves tu cuerpo."],
  resultado: ["Paso 2 de 2", "Así quedó tu cuerpo", "Rojo es la zona más baja. Puedes girar el modelo."],
  respuestas: ["RRHH", "Respuestas sin nombre", "Cada fila suma al departamento. No hay nombres."],
};

let filtro = "todos";
let vista = "panel";
let zonaElegida = null;
let ultima = null;
let sesionActual = null;
let visorPanel = null;
let visorPersonal = null;

function iniciar() {
  prepararDatos();
  llenarSelect(document.querySelector("#filtro-departamento"), true);
  llenarSelect(document.querySelector("#departamento"), false);
  dibujarPreguntas();
  ultima = leerUltima();
  document.querySelector("#fecha").value = hoy();
  enlazar();
  const guardada = leerSesion();
  if (guardada) entrar(guardada);
}

function vistasDe(rol) {
  return rol === "rrhh" ? ["panel", "respuestas"] : ["encuesta", "resultado"];
}

function entrar(usuario) {
  sesionActual = usuario;
  sessionStorage.setItem(CLAVE_SESION, JSON.stringify(usuario));
  document.body.dataset.rol = usuario.rol;
  document.querySelector("#acceso").hidden = true;
  document.querySelector("#aplicacion").hidden = false;
  document.querySelectorAll("nav [data-vista]").forEach((boton) => {
    boton.hidden = !vistasDe(usuario.rol).includes(boton.dataset.vista);
  });
  const campo = document.querySelector("#campo-departamento");
  const nota = document.querySelector("#nota-departamento");
  if (usuario.rol === "empleado") {
    document.querySelector("#departamento").value = usuario.departamento;
    campo.hidden = true;
    nota.hidden = false;
    nota.textContent = `Se guarda en ${nombreDepartamento(usuario.departamento)}, sin tu nombre.`;
  } else {
    campo.hidden = false;
    nota.hidden = true;
  }
  asegurarVisores();
  mostrarVista(vistaInicial(usuario.rol));
  pintar();
}

function vistaInicial(rol) {
  const permitidas = vistasDe(rol);
  const pedida = vistaDesdeHash();
  if (!permitidas.includes(pedida)) return permitidas[0];
  if (pedida === "resultado" && !ultima) return "encuesta";
  return pedida;
}

function salir() {
  sesionActual = null;
  sessionStorage.removeItem(CLAVE_SESION);
  delete document.body.dataset.rol;
  visorPanel?.setActivo(false);
  visorPersonal?.setActivo(false);
  document.querySelector("#aplicacion").hidden = true;
  document.querySelector("#acceso").hidden = false;
  try { history.replaceState(null, "", location.pathname); } catch { /* file:// */ }
}

function asegurarVisores() {
  if (!visorPanel) visorPanel = PulsoCuerpo.crear(document.querySelector("#visor-panel"));
  if (!visorPersonal) visorPersonal = PulsoCuerpo.crear(document.querySelector("#visor-personal"));
}

function modeloPara(zona) {
  return zona === "musculos" ? "musculos" : "organos";
}

function prepararDatos() {
  if (!localStorage.getItem(FLAG)) {
    guardar(construirDemo());
    localStorage.setItem(FLAG, "1");
  }
}

function construirDemo() {
  const fechas = ["2026-11-19", "2026-11-21"];
  const registros = [];
  for (const [departamento, variantes] of Object.entries(PERFILES)) {
    variantes.forEach((base, indice) => {
      for (const fecha of fechas) {
        registros.push({
          id: `${departamento}-${indice}-${fecha}`,
          persona: `${departamento}-${indice}`,
          fecha,
          departamento,
          horasExtra: versionHoras(EXTRAS[departamento][indice], fecha),
          respuestas: versionDia(base, fecha),
        });
      }
    });
  }
  return registros;
}

function versionHoras(horas, fecha) {
  if (fecha === "2026-11-21") return horas;
  return Math.max(0, horas - 2);
}

function versionDia(base, fecha) {
  const copia = { ...base };
  if (fecha === "2026-11-21") return copia;
  for (const id of ["animo", "psicologico", "descanso", "alimentacion"]) {
    if (copia[id] === 1) copia[id] = 5;
  }
  return copia;
}

function enlazar() {
  document.querySelectorAll("nav [data-vista]").forEach((boton) => {
    boton.addEventListener("click", () => mostrarVista(boton.dataset.vista));
  });

  document.querySelector("#form-acceso").addEventListener("submit", (evento) => {
    evento.preventDefault();
    const datos = new FormData(evento.target);
    intentarAcceso(String(datos.get("correo") || ""), String(datos.get("clave") || ""));
  });

  document.querySelectorAll(".cuenta-demo").forEach((boton) => {
    boton.addEventListener("click", () => {
      document.querySelector("#correo").value = boton.dataset.correo;
      document.querySelector("#clave").value = boton.dataset.clave;
      intentarAcceso(boton.dataset.correo, boton.dataset.clave);
    });
  });

  document.querySelector("#salir").addEventListener("click", salir);

  document.querySelector("#filtro-departamento").addEventListener("change", (evento) => {
    filtro = evento.target.value;
    visorPanel?.soltar();
    pintar();
  });

  document.querySelector("#formulario").addEventListener("submit", guardarDesdeFormulario);
  document.querySelector("#ejemplo").addEventListener("click", cargarEscenario);
  document.querySelector("#borrar").addEventListener("click", borrarTodo);

  document.querySelector("#tabla-historial").addEventListener("click", (evento) => {
    const boton = evento.target.closest("[data-id]");
    if (!boton) return;
    guardar(leer().filter((registro) => registro.id !== boton.dataset.id));
    mostrarAviso("Respuesta eliminada.");
    pintar();
  });

  document.addEventListener("click", (evento) => {
    const depto = evento.target.closest("[data-depto]");
    if (depto) {
      filtro = depto.dataset.depto;
      document.querySelector("#filtro-departamento").value = filtro;
      visorPanel?.soltar();
      pintar();
      document.querySelector("#vista-panel .escenario")?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      return;
    }
    const zona = evento.target.closest("[data-zona]");
    if (!zona) return;
    zonaElegida = zona.dataset.zona;
    pintar();
  });

  document.addEventListener("keydown", (evento) => {
    if (evento.key !== "Enter" && evento.key !== " ") return;
    const zona = evento.target.closest?.("[data-zona]");
    if (!zona) return;
    evento.preventDefault();
    zonaElegida = zona.dataset.zona;
    pintar();
  });

  window.addEventListener("hashchange", () => {
    const pedida = vistaDesdeHash();
    mostrarVista(pedida === "resultado" && !ultima ? "encuesta" : pedida);
  });
}

function guardarDesdeFormulario(evento) {
  evento.preventDefault();
  const datos = new FormData(evento.target);
  const fecha = datos.get("fecha");
  const departamento = sesionActual?.rol === "empleado"
    ? sesionActual.departamento
    : datos.get("departamento");
  const horasExtra = Number(datos.get("horasExtra"));
  if (!fecha || !DEPARTAMENTOS.some((item) => item.id === departamento)) {
    mostrarAviso("Elige departamento y fecha.", true);
    return;
  }
  if (![0, 2, 4].includes(horasExtra)) {
    mostrarAviso("Indica las horas extra.", true);
    return;
  }

  const respuestas = {};
  for (const pregunta of PREGUNTAS) {
    const valor = Number(datos.get(pregunta.id));
    if (!ESCALA.some((opcion) => opcion.valor === valor)) {
      mostrarAviso("Responde las cinco preguntas.", true);
      return;
    }
    respuestas[pregunta.id] = valor;
  }

  const registro = {
    id: crearId(),
    persona: crearId(),
    fecha,
    departamento,
    horasExtra,
    respuestas,
  };
  const registros = leer();
  registros.push(registro);
  guardar(registros);
  ultima = registro;
  sessionStorage.setItem(CLAVE_ULTIMA, JSON.stringify(registro));
  zonaElegida = peorSistema([registro])?.id || null;
  evento.target.reset();
  document.querySelector("#fecha").value = hoy();
  document.querySelector("#departamento").value = departamento;
  mostrarAviso("Registro guardado.");
  mostrarVista("resultado");
  pintar();
}

function cargarEscenario() {
  const actuales = leer();
  const demo = construirDemo();
  const ids = new Set(demo.map((registro) => registro.id));
  const puro = actuales.length === demo.length && actuales.every((registro) => ids.has(registro.id));
  if (!puro && actuales.length && !window.confirm("¿Reemplazar las respuestas actuales por el escenario de demostración?")) return;
  guardar(demo);
  localStorage.setItem(FLAG, "1");
  filtro = "todos";
  document.querySelector("#filtro-departamento").value = "todos";
  zonaElegida = null;
  mostrarAviso("Escenario de demostración listo.");
  mostrarVista("panel");
  pintar();
}

function borrarTodo() {
  if (!leer().length) return;
  if (!window.confirm("¿Borrar todas las respuestas guardadas en este navegador?")) return;
  guardar([]);
  mostrarAviso("Datos borrados.");
  mostrarVista("panel");
  pintar();
}

function mostrarVista(nombre) {
  if (!sesionActual) return;
  const permitidas = vistasDe(sesionActual.rol);
  if (!permitidas.includes(nombre)) nombre = permitidas[0];
  if (nombre === "resultado" && !ultima) nombre = "encuesta";
  vista = nombre;
  for (const id of VISTAS) {
    document.querySelector(`#vista-${id}`).hidden = id !== vista;
  }
  document.querySelectorAll("nav [data-vista]").forEach((boton) => {
    boton.classList.toggle("activo", boton.dataset.vista === vista);
  });
  document.querySelector("#filtro-campo").hidden = vista === "encuesta" || vista === "resultado";
  const [kicker, titulo, guia] = TEXTOS[vista];
  document.querySelector("#kicker-vista").textContent = kicker;
  document.querySelector("#titulo-vista").textContent = titulo;
  document.querySelector("#guia").textContent = guia;
  if (location.hash !== `#${vista}`) {
    try { history.replaceState(null, "", `#${vista}`); } catch { /* file:// */ }
  }
  visorPanel?.setActivo(vista === "panel");
  visorPersonal?.setActivo(vista === "resultado");
}

function vistaDesdeHash() {
  const id = location.hash.slice(1);
  return VISTAS.includes(id) ? id : "panel";
}

function pintar() {
  const todos = leer();
  const crudos = filtro === "todos" ? todos : todos.filter((registro) => registro.departamento === filtro);
  const visibles = registrosVisibles(todos, filtro);
  const mostrar = filtro === "todos" ? visibles.length >= UMBRAL : crudos.length >= UMBRAL;
  const promedios = mostrar ? calcular(visibles) : [];
  const peor = peorDe(promedios);
  const zonaMostrada = zonaElegida && SISTEMAS.some((sistema) => sistema.id === zonaElegida)
    ? zonaElegida
    : peor?.id;

  const persona = sesionActual?.rol === "empleado";
  document.querySelector("#stats-aside").textContent = persona
    ? `${sesionActual.nombre} · ${nombreDepartamento(sesionActual.departamento)}`
    : todos.length
      ? `${todos.length} respuestas en este navegador`
      : "Sin respuestas guardadas";

  pintarIndice(visibles, promedios, mostrar, crudos.length);
  pintarInsight(todos, visibles, crudos, promedios, mostrar);
  pintarDetalle(document.querySelector("#detalle-zona"), mostrar ? promedios.find((sistema) => sistema.id === zonaMostrada) : null);
  pintarListas(promedios, mostrar, zonaMostrada);
  pintarRanking(todos);
  pintarCuerpo(document.querySelector("#vista-panel"), promedios, mostrar, zonaMostrada);
  document.querySelector("#caption-cuerpo").textContent = mostrar
    ? textoZona(promedios, zonaMostrada)
    : "El mapa espera más respuestas.";
  if (visorPanel && sesionActual?.rol === "rrhh") {
    visorPanel.pintar(nivelesDe(promedios, mostrar), zonaMostrada);
    if (mostrar) visorPanel.seguir(modeloPara(zonaMostrada));
  }
  pintarPersonal(zonaMostrada);
  pintarHistorial(todos);
}

function nivelesDe(promedios, mostrar) {
  if (!mostrar) return {};
  return Object.fromEntries(promedios.map((sistema) => [sistema.id, nivelDe(sistema.promedio)]));
}

function pintarExtras(todos) {
  const destino = document.querySelector("#extras");
  const texto = document.querySelector("#insight-extras");
  const filas = DEPARTAMENTOS.map((departamento) => {
    const subset = todos.filter((registro) => registro.departamento === departamento.id);
    const abierto = subset.length >= UMBRAL;
    return {
      ...departamento,
      n: subset.length,
      horas: abierto ? promedioHoras(subset) : null,
      peor: abierto ? peorSistema(subset) : null,
    };
  }).filter((departamento) => departamento.n > 0).sort((a, b) => (b.horas || 0) - (a.horas || 0));

  const visible = filas.filter((departamento) => departamento.horas != null);
  if (!visible.length) {
    texto.textContent = "Las horas extra aparecen cuando un departamento junta 5 respuestas.";
    destino.innerHTML = "";
    return;
  }
  const tope = visible[0];
  texto.textContent = `${tope.nombre} concentra la jornada más larga (${formato(tope.horas)} h en promedio) y su zona más comprometida es ${tope.peor.nombre.toLowerCase()}.`;
  destino.innerHTML = visible.map((departamento) => `
    <button type="button" class="fila-depto${filtro === departamento.id ? " activo" : ""}" data-depto="${departamento.id}">
      <span>${departamento.nombre}<span class="meta">${departamento.peor.nombre}</span></span>
      <span class="mini-barra" aria-hidden="true"><i style="width:${(departamento.horas / 4) * 100}%"></i></span>
      <strong>${formato(departamento.horas)}</strong>
      <em>h extra</em>
    </button>
  `).join("");
}

function promedioHoras(registros) {
  if (!registros.length) return 0;
  return registros.reduce((suma, registro) => suma + registro.horasExtra, 0) / registros.length;
}

function pintarIndice(visibles, promedios, mostrar, crudos) {
  const indice = document.querySelector("#indice");
  const nota = document.querySelector("#indice-nota");
  const tendencia = document.querySelector("#tendencia");
  indice.className = "resumen-valor";
  if (!mostrar) {
    indice.textContent = "—";
    nota.textContent = crudos ? `${crudos} ${crudos === 1 ? "respuesta" : "respuestas"} · mapa oculto` : "Sin respuestas todavía.";
    tendencia.textContent = "";
    return;
  }
  const general = promedios.reduce((suma, sistema) => suma + sistema.promedio, 0) / promedios.length;
  indice.textContent = formato(general);
  indice.classList.add(nivelDe(general));
  const personas = new Set(visibles.map((registro) => registro.persona)).size;
  const dias = new Set(visibles.map((registro) => registro.fecha)).size;
  nota.textContent = `${personas} ${personas === 1 ? "persona" : "personas"} · ${visibles.length} respuestas · ${dias} ${dias === 1 ? "día" : "días"} · ${etiqueta(general)}`;
  tendencia.textContent = textoTendencia(visibles);
}

function pintarInsight(todos, visibles, crudos, promedios, mostrar) {
  const insight = document.querySelector("#insight");
  const bloqueo = document.querySelector("#bloqueo");
  if (!crudos.length) {
    insight.textContent = "No hay respuestas en este corte. Envía la encuesta o carga el escenario de demostración.";
    bloqueo.hidden = true;
    return;
  }
  if (!mostrar) {
    const nombre = nombreDepartamento(filtro);
    insight.textContent = `${nombre} tiene ${crudos.length} ${crudos.length === 1 ? "respuesta" : "respuestas"}. El mapa se abre desde 5 para que un equipo pequeño no quede expuesto.`;
    bloqueo.hidden = false;
    bloqueo.textContent = "Los números de este departamento permanecen ocultos hasta juntar 5 reportes anónimos.";
    return;
  }
  bloqueo.hidden = true;
  insight.textContent = redactarInsight(todos, visibles, promedios);
}

function redactarInsight(todos, visibles, promedios) {
  const general = promedios.reduce((suma, sistema) => suma + sistema.promedio, 0) / promedios.length;
  const orden = [...promedios].sort((a, b) => a.promedio - b.promedio);
  const peor = orden[0];
  const mejor = orden[orden.length - 1];
  if (filtro === "todos") {
    const deptos = DEPARTAMENTOS.map((departamento) => {
      const subset = todos.filter((registro) => registro.departamento === departamento.id);
      return { ...departamento, indice: subset.length >= UMBRAL ? indiceDe(subset) : null };
    }).filter((departamento) => departamento.indice != null).sort((a, b) => a.indice - b.indice);
    if (!deptos.length) return "Todavía no hay un departamento con suficientes respuestas.";
    const critico = deptos[0];
    return `Empieza por ${critico.nombre}. Es el departamento más bajo (${formato(critico.indice)}).`;
  }
  const nombre = nombreDepartamento(filtro);
  if (peor.promedio >= 8) return `${nombre} está estable (${formato(general)}).`;
  const contraste = peor.promedio < 4 && mejor.promedio >= 8 ? ` ${mejor.nombre} sigue bien.` : "";
  return `${nombre}: la zona baja es ${peor.nombre} (${formato(peor.promedio)}).${contraste} ${ACCION[peor.id]}`;
}

function pintarDetalle(elemento, sistema) {
  if (!sistema) {
    elemento.hidden = true;
    elemento.innerHTML = "";
    return;
  }
  elemento.hidden = false;
  const accion = sistema.promedio >= 8
    ? "No pide intervención. Conviene sostener lo que ya está funcionando."
    : ACCION[sistema.id];
  elemento.className = `detalle ${nivelDe(sistema.promedio)}`;
  elemento.innerHTML = `
    <p class="kicker">${etiqueta(sistema.promedio)}</p>
    <h3>${sistema.nombre}</h3>
    <p class="valor">${formato(sistema.promedio)}</p>
    <p>${sistema.detalle}</p>
    <div class="pills">${sistema.preguntas.map((id) => `<span class="pill">${nombrePregunta(id)}</span>`).join("")}</div>
    <p class="detalle-accion">${accion}</p>
  `;
}

function pintarListas(promedios, mostrar, zonaMostrada) {
  const afectadas = document.querySelector("#afectadas");
  const organos = document.querySelector("#organos");
  const riesgo = promedios.filter((sistema) => sistema.promedio < 8).sort((a, b) => a.promedio - b.promedio);
  const estables = mostrar ? promedios.filter((sistema) => sistema.promedio >= 8) : [];
  document.querySelector("#titulo-afectadas").hidden = !mostrar;
  document.querySelector("#titulo-estables").hidden = estables.length === 0;
  if (!mostrar) {
    afectadas.innerHTML = `<p class="vacio">Sin mapa todavía.</p>`;
    organos.innerHTML = "";
    return;
  }
  afectadas.innerHTML = riesgo.length
    ? riesgo.map((sistema) => htmlTarjeta(sistema, zonaMostrada)).join("")
    : `<p class="vacio">Ninguna zona afectada en este corte.</p>`;
  organos.innerHTML = estables.map((sistema) => htmlTarjeta(sistema, zonaMostrada)).join("");
}

function htmlTarjeta(sistema, zonaMostrada) {
  const nivel = nivelDe(sistema.promedio);
  const activa = sistema.id === zonaMostrada;
  return `
    <article class="organo ${nivel}${activa ? " activa" : ""}" data-zona="${sistema.id}" tabindex="0" role="button" aria-pressed="${activa}">
      <h3>${sistema.nombre}</h3>
      <p class="valor">${formato(sistema.promedio)}</p>
      <div class="barra" aria-hidden="true"><span style="width:${(sistema.promedio / 10) * 100}%"></span></div>
      <p class="etiqueta">${etiqueta(sistema.promedio)}</p>
    </article>
  `;
}

function pintarRanking(todos) {
  const filas = DEPARTAMENTOS.map((departamento) => {
    const subset = todos.filter((registro) => registro.departamento === departamento.id);
    const abierto = subset.length >= UMBRAL;
    const indice = abierto ? indiceDe(subset) : null;
    const peor = abierto ? peorSistema(subset) : null;
    return { ...departamento, n: subset.length, indice, peor, horas: abierto ? promedioHoras(subset) : null };
  }).sort((a, b) => {
    if (a.indice == null && b.indice == null) return a.nombre.localeCompare(b.nombre, "es");
    if (a.indice == null) return 1;
    if (b.indice == null) return -1;
    return a.indice - b.indice;
  });

  document.querySelector("#ranking").innerHTML = filas.map((departamento) => {
    if (departamento.indice == null) {
      return `
        <button type="button" class="fila-depto${filtro === departamento.id ? " activo" : ""}" data-depto="${departamento.id}">
          <span>${departamento.nombre}<span class="meta">${departamento.n} ${departamento.n === 1 ? "respuesta" : "respuestas"}</span></span>
          <span class="mini-barra" aria-hidden="true"><i style="width:0%"></i></span>
          <strong>—</strong>
          <em>${departamento.n ? "Oculto hasta 5" : "Sin respuestas"}</em>
        </button>
      `;
    }
    const nivel = nivelDe(departamento.indice);
    return `
      <button type="button" class="fila-depto ${nivel}${filtro === departamento.id ? " activo" : ""}" data-depto="${departamento.id}">
        <span>${departamento.nombre}<span class="meta">${departamento.enfoque}</span></span>
        <span class="mini-barra" aria-hidden="true"><i style="width:${(departamento.indice / 10) * 100}%"></i></span>
        <strong>${formato(departamento.indice)}</strong>
        <em>${departamento.peor.nombre} · ${formato(departamento.horas)} h extra</em>
      </button>
    `;
  }).join("");
}

function pintarCuerpo(raiz, promedios, mostrar, zonaMostrada) {
  raiz.querySelectorAll("[data-zona]").forEach((elemento) => {
    const sistema = promedios.find((item) => item.id === elemento.dataset.zona);
    elemento.classList.remove("bueno", "regular", "malo", "vacio", "activa");
    if (!mostrar || !sistema) elemento.classList.add("vacio");
    else elemento.classList.add(nivelDe(sistema.promedio));
    if (elemento.dataset.zona === zonaMostrada) elemento.classList.add("activa");
    const nombre = nombreSistema(elemento.dataset.zona);
    elemento.setAttribute("aria-label", sistema && mostrar ? `${nombre}: ${formato(sistema.promedio)}` : nombre);
  });
}

function pintarPersonal(zonaMostrada) {
  const insight = document.querySelector("#insight-personal");
  const lista = document.querySelector("#organos-personal");
  const caption = document.querySelector("#caption-personal");
  if (!ultima) {
    insight.textContent = "Todavía no envías un reporte en esta sesión.";
    lista.innerHTML = "";
    caption.textContent = "";
    pintarDetalle(document.querySelector("#detalle-personal"), null);
    pintarCuerpo(document.querySelector("#vista-resultado"), [], false, null);
    return;
  }
  const promedios = calcular([ultima]);
  const peor = peorDe(promedios);
  const zona = zonaElegida && promedios.some((sistema) => sistema.id === zonaElegida) ? zonaElegida : peor.id;
  const afectadas = promedios.filter((sistema) => sistema.promedio < 8);
  const extra = ultima.horasExtra ? ` ${ultima.horasExtra} h extra hoy.` : "";
  insight.textContent = afectadas.length
    ? `Tu zona más baja es ${peor.nombre}.${extra}`
    : `Hoy no hay zonas bajas.${extra}`;
  pintarDetalle(document.querySelector("#detalle-personal"), promedios.find((sistema) => sistema.id === zona));
  lista.innerHTML = promedios.map((sistema) => htmlTarjeta(sistema, zona)).join("");
  pintarCuerpo(document.querySelector("#vista-resultado"), promedios, true, zona);
  caption.textContent = textoZona(promedios, zona);
  if (visorPersonal) {
    visorPersonal.pintar(nivelesDe(promedios, true), zona);
    visorPersonal.seguir(modeloPara(zona));
  }
}

function pintarHistorial(todos) {
  const historial = document.querySelector("#tabla-historial");
  if (!todos.length) {
    historial.innerHTML = `<p class="vacio">Todavía no hay respuestas guardadas.</p>`;
    return;
  }
  const encabezados = PREGUNTAS.map((pregunta) => `<th>${pregunta.nombre}</th>`).join("");
  const filas = [...todos].sort((a, b) => b.fecha.localeCompare(a.fecha) || a.departamento.localeCompare(b.departamento)).map((registro) => `
    <tr>
      <td>${formatearFecha(registro.fecha)}</td>
      <td>${nombreDepartamento(registro.departamento)}</td>
      <td>${registro.horasExtra}</td>
      ${PREGUNTAS.map((pregunta) => `<td>${registro.respuestas[pregunta.id]}</td>`).join("")}
      <td><button type="button" class="enlace" data-id="${escaparAttr(registro.id)}">Quitar</button></td>
    </tr>
  `).join("");
  historial.innerHTML = `
    <div class="tabla-wrap">
      <table>
        <thead>
          <tr><th>Fecha</th><th>Departamento</th><th>Horas extra</th>${encabezados}<th></th></tr>
        </thead>
        <tbody>${filas}</tbody>
      </table>
    </div>
  `;
}

function registrosVisibles(todos, filtroActual) {
  if (filtroActual === "todos") {
    return DEPARTAMENTOS.flatMap((departamento) => {
      const subset = todos.filter((registro) => registro.departamento === departamento.id);
      return subset.length >= UMBRAL ? subset : [];
    });
  }
  return todos.filter((registro) => registro.departamento === filtroActual);
}

function calcular(registros) {
  return SISTEMAS.map((sistema) => ({
    ...sistema,
    promedio: promedioSistema(sistema, registros),
  }));
}

function promedioSistema(sistema, registros) {
  if (!registros.length) return null;
  const suma = registros.reduce((total, registro) => {
    const parcial = sistema.preguntas.reduce((acumulado, id) => acumulado + registro.respuestas[id], 0);
    return total + parcial / sistema.preguntas.length;
  }, 0);
  return suma / registros.length;
}

function indiceDe(registros) {
  if (!registros.length) return null;
  const valores = SISTEMAS.map((sistema) => promedioSistema(sistema, registros));
  return valores.reduce((suma, valor) => suma + valor, 0) / valores.length;
}

function peorSistema(registros) {
  return peorDe(calcular(registros));
}

function peorDe(promedios) {
  return [...promedios].filter((sistema) => sistema.promedio != null).sort((a, b) => a.promedio - b.promedio)[0] || null;
}

function textoTendencia(registros) {
  const fechas = [...new Set(registros.map((registro) => registro.fecha))].sort();
  if (fechas.length < 2) return "Hace falta otro día para ver la tendencia.";
  const reciente = indiceDe(registros.filter((registro) => registro.fecha === fechas.at(-1)));
  const previa = indiceDe(registros.filter((registro) => registro.fecha === fechas.at(-2)));
  const delta = reciente - previa;
  const dia = formatearFecha(fechas.at(-1));
  if (Math.abs(delta) < 0.15) return `Sin cambio relevante hacia el ${dia}.`;
  if (delta < 0) return `El índice bajó ${formato(Math.abs(delta))} hacia el ${dia}.`;
  return `El índice subió ${formato(delta)} hacia el ${dia}.`;
}

function textoZona(promedios, id) {
  const sistema = promedios.find((item) => item.id === id);
  if (!sistema || sistema.promedio == null) return "Elige una zona del cuerpo.";
  return `${sistema.nombre} · ${formato(sistema.promedio)} · ${etiqueta(sistema.promedio)}`;
}

function nivelDe(valor) {
  if (valor >= 8) return "bueno";
  if (valor >= 4) return "regular";
  return "malo";
}

function etiqueta(valor) {
  if (valor >= 8) return "Estable";
  if (valor >= 4) return "En observación";
  return "Crítica";
}

function formato(valor) {
  return valor.toLocaleString("es-MX", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
}

function nombrePregunta(id) {
  return PREGUNTAS.find((pregunta) => pregunta.id === id).nombre;
}

function nombreSistema(id) {
  return SISTEMAS.find((sistema) => sistema.id === id)?.nombre || "Zona";
}

function nombreDepartamento(id) {
  return DEPARTAMENTOS.find((departamento) => departamento.id === id)?.nombre || "Departamento";
}

function dibujarPreguntas() {
  document.querySelector("#preguntas").innerHTML = PREGUNTAS.map((pregunta) => `
    <fieldset class="pregunta">
      <legend>${pregunta.nombre}</legend>
      <p>${pregunta.texto}</p>
      <div class="opciones">
        ${ESCALA.map((opcion) => `
          <label>
            <input type="radio" name="${pregunta.id}" value="${opcion.valor}" required>
            <strong>${opcion.valor}</strong>
            <span>${opcion.nombre}</span>
          </label>
        `).join("")}
      </div>
    </fieldset>
  `).join("");
}

function dibujarMapa() {
  const filas = SISTEMAS.map((sistema) => `
    <tr>
      <th scope="row">${sistema.nombre}</th>
      <td>${sistema.preguntas.map((id) => `<span class="pill">${nombrePregunta(id)}</span>`).join("")}</td>
    </tr>
  `).join("");
  document.querySelector("#mapa").innerHTML = `
    <div class="tabla-wrap">
      <table>
        <thead><tr><th>Zona</th><th>Preguntas que la encienden</th></tr></thead>
        <tbody>${filas}</tbody>
      </table>
    </div>
  `;
}

function llenarSelect(select, incluirTodos) {
  const opciones = [];
  if (incluirTodos) opciones.push(`<option value="todos">Toda la empresa</option>`);
  for (const departamento of DEPARTAMENTOS) {
    opciones.push(`<option value="${departamento.id}">${departamento.nombre}</option>`);
  }
  select.innerHTML = opciones.join("");
}

function leer() {
  try {
    const datos = JSON.parse(localStorage.getItem(CLAVE));
    return Array.isArray(datos) ? datos.filter(registroValido) : [];
  } catch {
    return [];
  }
}

function registroValido(registro) {
  if (!registro || typeof registro !== "object") return false;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(registro.fecha || "")) return false;
  if (!DEPARTAMENTOS.some((departamento) => departamento.id === registro.departamento)) return false;
  if (!registro.respuestas || !registro.id || !registro.persona) return false;
  if (![0, 2, 4].includes(registro.horasExtra)) return false;
  return PREGUNTAS.every((pregunta) => [1, 5, 10].includes(registro.respuestas[pregunta.id]));
}

function intentarAcceso(correo, clave) {
  const aviso = document.querySelector("#aviso-acceso");
  const usuario = USUARIOS.find((item) => item.correo === correo.trim().toLowerCase() && item.clave === clave);
  if (!usuario) {
    aviso.textContent = "Esas credenciales no están en la demostración.";
    aviso.classList.add("error");
    return;
  }
  aviso.textContent = "";
  aviso.classList.remove("error");
  entrar(usuario);
}

function leerSesion() {
  try {
    const datos = JSON.parse(sessionStorage.getItem(CLAVE_SESION));
    return USUARIOS.find((item) => item.correo === datos?.correo && item.rol === datos?.rol) || null;
  } catch {
    return null;
  }
}

function guardar(registros) {
  localStorage.setItem(CLAVE, JSON.stringify(registros));
}

function leerUltima() {
  try {
    const registro = JSON.parse(sessionStorage.getItem(CLAVE_ULTIMA));
    return registroValido(registro) ? registro : null;
  } catch {
    return null;
  }
}

function mostrarAviso(texto, esError = false) {
  const aviso = document.querySelector("#aviso");
  aviso.textContent = texto;
  aviso.classList.toggle("error", esError);
}

function crearId() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

function escaparAttr(valor) {
  return String(valor).replaceAll("&", "&amp;").replaceAll('"', "&quot;");
}

function hoy() {
  const fecha = new Date();
  const mes = String(fecha.getMonth() + 1).padStart(2, "0");
  const dia = String(fecha.getDate()).padStart(2, "0");
  return `${fecha.getFullYear()}-${mes}-${dia}`;
}

function formatearFecha(iso) {
  const [anio, mes, dia] = iso.split("-").map(Number);
  return new Date(anio, mes - 1, dia).toLocaleDateString("es-MX", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

if (typeof document === "undefined") {
  const registros = construirDemo();
  const empresa = indiceDe(registros);
  console.log("empresa", empresa.toFixed(2), "n", registros.length);
  for (const departamento of DEPARTAMENTOS) {
    const subset = registros.filter((registro) => registro.departamento === departamento.id);
    const sistemas = SISTEMAS.map((sistema) => `${sistema.id}:${promedioSistema(sistema, subset).toFixed(1)}`).join(" ");
    console.log(departamento.nombre, indiceDe(subset).toFixed(2), "n", subset.length, sistemas);
  }
} else {
  iniciar();
}
