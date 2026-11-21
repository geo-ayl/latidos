# Latidos

El corazón de tu organización. Un pulso diario para que Recursos Humanos vea, por departamento, dónde se está quebrando el equipo antes de que alguien renuncie o se enferme.

**Demo:** [geo-ayl.github.io/latidos](https://geo-ayl.github.io/latidos/)

![Latidos](logo.png)

## Qué resuelve

Una encuesta de clima que termina en una hoja de cálculo esconde el problema dentro del promedio. Latidos convierte cinco respuestas y las horas extra en un cuerpo. El color dice qué zona hay que atender. El texto dice qué hacer el lunes.

No es un diagnóstico médico. Es una señal para priorizar.

## Dos entradas

| Rol | Ve | No ve |
| --- | --- | --- |
| Empleado | La encuesta y su propio cuerpo | Otros departamentos, el ranking ni la tabla de respuestas |
| RRHH | Departamentos, zonas afectadas, horas extra y respuestas anónimas | El nombre de quien respondió |

En la demo basta con pulsar **Soy empleado** o **Soy de RRHH**.

| Correo | Clave | Entra como |
| --- | --- | --- |
| `empleado@latidos.demo` | `latidos` | Ana López, Operaciones |
| `rrhh@latidos.demo` | `latidos` | Mariana Ruiz, RRHH |

## Recorrido de la demo

1. Entra como RRHH. La primera frase señala el departamento más bajo.
2. Abre **Operaciones**. Músculos queda en rojo y las horas extra son las más altas de la empresa.
3. Cambia entre **Órganos**, **Músculos** y **Esqueleto**. Es el mismo equipo, visto en tres cuerpos.
4. Vuelve a toda la empresa. El índice general se ve aceptable. Finanzas y Dirección están bien. El promedio esconde a Operaciones.
5. Sal y entra como empleado. Responde, envía y mira solo tu cuerpo.

**Restaurar demo** devuelve el escenario si alguien cargó respuestas de prueba. **Borrar** vacía el navegador.

## Cómo se lee

Cada persona responde del 1 al 10: **1** malo, **5** regular, **10** bueno. Las preguntas cubren ánimo, alimentación, lesiones, estado psicológico y descanso. Las horas extra se registran aparte (0, hasta 2, o 3 o más) y no se mezclan con el índice del cuerpo.

Una zona es el promedio de las preguntas que la alimentan. El índice del departamento es el promedio de las seis zonas.

| Puntaje | Estado | Color |
| --- | --- | --- |
| Menor de 4 | Crítica | Rojo |
| De 4 a menos de 8 | En observación | Ámbar |
| 8 o más | Estable | Verde |

Un departamento no se muestra hasta juntar **5 respuestas anónimas**. Así un equipo pequeño no queda expuesto. El consolidado de la empresa tampoco incluye departamentos por debajo de ese umbral.

## Ejecutar en local

Los modelos 3D no cargan si se abre `index.html` como archivo. Hay que servirlo por HTTP.

En Windows, doble clic en `iniciar.bat`. Abre [http://127.0.0.1:8765/](http://127.0.0.1:8765/).

Con Node en el PATH:

```bash
node servidor.js 8765
```

La primera visita siembra el escenario de demostración en el navegador. Los datos quedan en `localStorage` de ese origen. Cerrar sesión no los borra.

## Estructura

```
index.html      interfaz
estilos.css     estilo
app.js          encuesta, roles, índices y escenario
cuerpo3d.js     visor Three.js de los tres modelos
servidor.js     servidor estático local
src/            cuerpos en glTF (.glb)
vendor/         Three.js r147
```

## Aviso

Latidos ordena señales de un reporte propio. No sustituye una valoración clínica ni una decisión laboral sobre una persona.
