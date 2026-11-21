const PulsoCuerpo = (() => {
  const ARCHIVOS = {
    organos: "src/Sistema cardiovascular, respiratorio, digestivo y urinario.glb",
    musculos: "src/Muscular system.glb",
    esqueleto: "src/Skeletal system.glb",
  };

  const REGLAS = {
    organos: [
      [/brain/, "cerebro"],
      [/heart/, "corazon"],
      [/liver|gallbladder|pancreas/, "higado"],
      [/stomach|intestine/, "estomago"],
      [/lung/, "inmune"],
    ],
    musculos: [
      [/head/, "cerebro"],
      [/leg|feet|foot|chest|abdomen|body/, "musculos"],
    ],
    esqueleto: [
      [/cranium|mandible/, "cerebro"],
      [/arm|leg|foot|femur|tibia|humero|radio|clavicle|rib|vertebra|hip/, "musculos"],
    ],
  };

  const COLORES = {
    malo: 0xef5d56,
    regular: 0xe2b23c,
    bueno: 0x6fbf8a,
    neutro: 0xc8c2b6,
    piel: 0xd7e0da,
  };

  const originales = {};

  function cargar(id) {
    if (!originales[id]) {
      originales[id] = new Promise((resolve, reject) => {
        const loader = new THREE.GLTFLoader();
        loader.load(encodeURI(ARCHIVOS[id]), (gltf) => resolve(gltf.scene), undefined, reject);
      });
    }
    return originales[id];
  }

  function crear(raiz) {
    const canvas = raiz.querySelector("canvas");
    const estado = raiz.querySelector(".visor-estado");
    const pestanas = (raiz.closest(".escenario") || raiz).querySelectorAll("[data-modelo]");
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    renderer.outputEncoding = THREE.sRGBEncoding;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(30, 1, 0.01, 50);
    const controles = new THREE.OrbitControls(camera, canvas);
    controles.enableDamping = true;
    controles.autoRotate = true;
    controles.autoRotateSpeed = 0.7;
    controles.enablePan = false;
    controles.minDistance = 1.2;
    controles.maxDistance = 6;
    scene.add(new THREE.HemisphereLight(0xfff8ee, 0x24352d, 1.1));
    const principal = new THREE.DirectionalLight(0xffffff, 0.9);
    principal.position.set(2.4, 4.2, 3.2);
    scene.add(principal);
    const relleno = new THREE.DirectionalLight(0xd5e2ff, 0.4);
    relleno.position.set(-3, 1.5, -2);
    scene.add(relleno);
    const suelo = new THREE.Mesh(
      new THREE.CircleGeometry(0.62, 48),
      new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.2 })
    );
    suelo.rotation.x = -Math.PI / 2;
    suelo.position.y = 0.002;
    scene.add(suelo);

    let modeloActual = "organos";
    let manual = false;
    let activo = false;
    let niveles = {};
    let zonaActiva = null;
    let grupo = null;
    const copias = {};

    function resize() {
      const ancho = Math.max(raiz.clientWidth, 240);
      const alto = raiz.classList.contains("visor-bajo") ? 420 : 560;
      renderer.setSize(ancho, alto, false);
      camera.aspect = ancho / alto;
      camera.updateProjectionMatrix();
    }

    function cadena(objeto) {
      const partes = [];
      let nodo = objeto;
      while (nodo && nodo !== grupo) {
        if (nodo.name) partes.push(nodo.name.toLowerCase());
        nodo = nodo.parent;
      }
      return partes.join(" ");
    }

    function sistemaDe(texto, modelo) {
      for (const [regla, id] of REGLAS[modelo]) {
        if (regla.test(texto)) return id;
      }
      return null;
    }

    function esPiel(texto) {
      return /body_lower|body_upper|(\bbody\b)/.test(texto);
    }

    function aplicar(objeto, modelo) {
      objeto.traverse((nodo) => {
        if (!nodo.isMesh) return;
        const texto = cadena(nodo);
        const piel = modelo === "organos" && esPiel(texto);
        const sistema = piel ? null : sistemaDe(texto, modelo);
        const nivel = sistema ? niveles[sistema] : null;
        const color = piel ? COLORES.piel : COLORES[nivel] || COLORES.neutro;
        const marcado = sistema && sistema === zonaActiva && nivel;
        const material = new THREE.MeshStandardMaterial({
          color,
          roughness: piel ? 0.7 : 0.42,
          metalness: 0.03,
          transparent: piel,
          opacity: piel ? 0.16 : 1,
          depthWrite: !piel,
          emissive: marcado ? color : 0x000000,
          emissiveIntensity: marcado ? 0.28 : 0,
        });
        nodo.material = material;
      });
    }

    function encajar(objeto) {
      objeto.position.set(0, 0, 0);
      objeto.rotation.set(0, 0, 0);
      objeto.scale.set(1, 1, 1);
      objeto.updateMatrixWorld(true);
      const caja = new THREE.Box3().setFromObject(objeto);
      const tam = caja.getSize(new THREE.Vector3());
      const centro = caja.getCenter(new THREE.Vector3());
      objeto.position.sub(centro);
      const mayor = Math.max(tam.x, tam.y, tam.z) || 1;
      const escala = 1.85 / mayor;
      objeto.scale.setScalar(escala);
      objeto.updateMatrixWorld(true);
      const ajustada = new THREE.Box3().setFromObject(objeto);
      objeto.position.y -= ajustada.min.y;
      const alto = ajustada.max.y - ajustada.min.y;
      controles.target.set(0, alto * 0.48, 0);
      camera.position.set(0, alto * 0.48, 2.85);
      controles.update();
    }

    async function mostrar(id) {
      modeloActual = id;
      marcarPestanas();
      if (!copias[id]) {
        estado.hidden = false;
        estado.textContent = "Cargando modelo…";
        try {
          const base = await cargar(id);
          const copia = base.clone(true);
          encajar(copia);
          copias[id] = copia;
        } catch (error) {
          estado.hidden = false;
          estado.textContent = "No se pudo abrir el modelo. Ábrelo con iniciar.bat.";
          console.error(error);
          return;
        }
      }
      if (grupo) scene.remove(grupo);
      grupo = copias[id];
      aplicar(grupo, id);
      scene.add(grupo);
      estado.hidden = true;
      if (activo) resize();
    }

    function marcarPestanas() {
      pestanas.forEach((boton) => {
        const activo = boton.dataset.modelo === modeloActual;
        boton.classList.toggle("activo", activo);
        boton.setAttribute("aria-selected", activo ? "true" : "false");
      });
    }

    pestanas.forEach((boton) => {
      boton.addEventListener("click", () => {
        manual = true;
        mostrar(boton.dataset.modelo);
      });
    });

    function frame() {
      requestAnimationFrame(frame);
      if (!activo || !grupo) return;
      controles.update();
      renderer.render(scene, camera);
    }
    frame();

    if (window.ResizeObserver) {
      new ResizeObserver(() => {
        if (activo) resize();
      }).observe(raiz);
    }

    return {
      pintar(siguientes, zona) {
        niveles = siguientes || {};
        zonaActiva = zona || null;
        if (grupo) aplicar(grupo, modeloActual);
      },
      seguir(id) {
        if (manual || !id || id === modeloActual) return;
        mostrar(id);
      },
      soltar() {
        manual = false;
      },
      setActivo(valor) {
        activo = valor;
        if (activo) {
          resize();
          if (!grupo) mostrar(modeloActual);
        }
      },
    };
  }

  return { crear };
})();
