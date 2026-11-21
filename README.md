# Latidos

El corazón de tu organización. Monitoreo de la salud de los empleados por departamento.

El empleado responde una encuesta diaria. Al enviarla, ve las zonas afectadas en un modelo del cuerpo. Recursos Humanos ve las estadísticas por departamento, las zonas afectadas y las horas extra.

**Demo:** [geo-ayl.github.io/latidos](https://geo-ayl.github.io/latidos/)

![Latidos](logo.png)

## Acceso

| Rol | Qué muestra |
| --- | --- |
| Empleado | La encuesta y su propio cuerpo |
| RRHH | Estadísticas por departamento, zonas afectadas, horas extra y respuestas sin nombre |

| Correo | Clave |
| --- | --- |
| `empleado@latidos.demo` | `latidos` |
| `rrhh@latidos.demo` | `latidos` |

También se puede entrar con los botones **Soy empleado** y **Soy de RRHH**.

## Encuesta

Cinco preguntas, de 1 a 10:

| Valor | Significado |
| --- | --- |
| 1 | Malo |
| 5 | Regular |
| 10 | Bueno |

Las preguntas son ánimo, alimentación, lesiones, estado psicológico, y descanso y energía. Después se registran las horas extra del día: ninguna, hasta dos, o tres o más. Las horas extra no entran en el promedio de las zonas.

## Zonas

Cada zona sale del promedio de las preguntas que le corresponden.

| Zona | Preguntas |
| --- | --- |
| Cerebro | Ánimo, estado psicológico, descanso |
| Corazón | Ánimo, descanso |
| Estómago | Alimentación |
| Hígado | Alimentación, descanso |
| Músculos y articulaciones | Lesiones, descanso |
| Sistema inmune | Alimentación, lesiones, descanso, ánimo |

| Puntaje | Estado | Color |
| --- | --- | --- |
| Menor de 4 | Crítica | Rojo |
| De 4 a menos de 8 | En observación | Ámbar |
| 8 o más | Estable | Verde |

El índice del departamento es el promedio de las seis zonas. El cuerpo se puede ver en órganos, músculos o esqueleto.

Un departamento se muestra a partir de 5 respuestas. Por debajo de ese número los datos quedan ocultos para no señalar a una persona. Las respuestas no guardan nombre.

## Ejecutar en local

Los modelos no cargan al abrir `index.html` directo. Hay que usar un servidor.

En Windows, doble clic en `iniciar.bat`. Queda en [http://127.0.0.1:8765/](http://127.0.0.1:8765/).

```bash
node servidor.js 8765
```

La primera visita carga un escenario de demostración en el navegador. **Restaurar demo** lo vuelve a poner. **Borrar** elimina las respuestas guardadas en ese navegador.

## Estructura

```
index.html      páginas
estilos.css     estilos
app.js          encuesta, roles y cálculos
cuerpo3d.js     modelos 3D
servidor.js     servidor local
src/            archivos .glb
vendor/         Three.js
```

Latidos no es un diagnóstico.
