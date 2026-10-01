# Informe técnico: EduNotas

**Estado:** Borrador de trabajo; completar los campos y evidencias pendientes antes de entregar.

## Portada

- Universidad: [completar]
- Facultad: [completar]
- Curso: Herramientas de Desarrollo
- Tema: Pull Requests, resolución de conflictos y Release
- Integrantes: [completar los nombres de los cuatro estudiantes]
- Docente: [completar]
- Fecha: [completar]

## 1. Introducción

El control de versiones permite conservar la historia de un proyecto, identificar qué cambio introdujo un comportamiento y recuperar versiones anteriores. En un equipo, las ramas separan el trabajo de cada funcionalidad y las Pull Requests ofrecen un espacio para explicar, probar y revisar los cambios antes de integrarlos. La revisión entre compañeros reduce errores y ayuda a que las decisiones técnicas sean compartidas. Las etiquetas y Releases, finalmente, identifican una versión estable que se puede consultar y distribuir.

## 2. Objetivos

El objetivo general es desarrollar EduNotas y practicar un flujo de colaboración basado en Git y GitHub. Como objetivos específicos se busca mantener funcionalidades aisladas en ramas, validar los datos académicos, revisar cambios antes de integrarlos, resolver un conflicto de forma manual y documentar una versión estable con pruebas y notas de publicación.

## 3. Desarrollo

### Repositorio y funcionalidades

El repositorio público es [nzluisx/Sistema-registro-academic0](https://github.com/nzluisx/Sistema-registro-academic0). La aplicación usa HTML, CSS y JavaScript, y no requiere servidor de base de datos. Estudiantes, cursos y calificaciones se guardan en `localStorage` del navegador; por ello, los datos de prueba pertenecen al navegador y equipo donde se ejecuta la app.

La rama `main` contiene la estructura inicial y las funciones base: registro de estudiantes con código y DNI únicos, registro de cursos, ingreso y edición de calificaciones de 0 a 20, y consulta de promedios. Se publicaron tres ramas de trabajo adicionales:

- `feature-registro-estudiantes`: filtro por nombre, código o DNI; edición de estudiantes y actualización de las referencias de sus calificaciones si cambia el código.
- `feature-registro-notas`: evita registrar más de una calificación para el mismo estudiante y curso; la nota existente se puede editar.
- `feature-reporte-promedios`: exporta un reporte CSV con los datos académicos y neutraliza valores de texto que podrían interpretarse como fórmulas.

Cada rama tiene un commit descriptivo y está publicada en GitHub. Se abrieron cuatro PRs: tres de funcionalidad y una para documentar la resolución del conflicto. Sus revisiones y aprobaciones de compañeros siguen pendientes; no se registra una aprobación hasta que un revisor real la complete.

### Conflicto y resolución

Se reprodujo un conflicto real de Git en el encabezado de `index.html`. `conflict-dev1-branding` propuso “EduNotas | Gestión de Estudiantes”; `conflict-dev2-branding` propuso “Portal Universitario de Registro Académico”. Al integrar las ramas sobre `feature-resolver-conflicto`, Git marcó la misma línea con `<<<<<<<`, `=======` y `>>>>>>>`. Se decidió conservar ambos conceptos en “EduNotas | Sistema de Registro Académico”. El HTML se volvió a cargar en el navegador y se confirmó que el encabezado aparece correctamente y no quedan marcadores. El procedimiento y los comandos están en `EVIDENCIAS.md`.

### Pruebas realizadas

Se comprobaron en navegador el registro de estudiante y curso, la edición de una calificación, el cálculo del promedio y la persistencia al recargar. En las ramas nuevas se probó el filtro/edición de estudiantes y que el cambio de código conserve la relación de sus notas; también se verificó el rechazo de calificaciones duplicadas. La exportación CSV incluyó el promedio y trató como texto un nombre que comenzaba con `=`. Se ejecutó `node --check app.js` y `git diff --check` en los cambios correspondientes. Los registros creados durante las pruebas se eliminaron al terminar.

### Release

La segunda guía solicita `release/1.1.0`, tag `v1.1.0` y notas en `CHANGELOG.md`. Se preparó `release/1.1.0` como rama candidata que integra las tres funcionalidades y la resolución del conflicto. La prueba conjunta pasó. Esta rama aún no se ha fusionado a `main`: faltan las revisiones y aprobaciones de compañeros. No se ha creado el tag ni publicado una Release.

## 4. Problemas encontrados y soluciones

1. Se podía intentar registrar más de una nota para el mismo estudiante y curso. Se añadió una validación que rechaza la duplicada y orienta a editar la nota existente.
2. Dos ramas cambiaron la misma línea del encabezado y Git no pudo elegir automáticamente. Se compararon ambas propuestas, se acordó un título combinado, se eliminaron los marcadores y se comprobó el resultado en el navegador.
3. El cambio del código de un estudiante podía dejar notas con el identificador anterior. La edición ahora actualiza también las calificaciones relacionadas y vuelve a renderizar la lista.

## 5. Conclusiones

La actividad permitió comprobar que una rama organiza el trabajo, pero la Pull Request y su revisión son las que hacen visible y controlable la integración del equipo. Un conflicto requiere entender la intención de ambas versiones; aceptar una de ellas sin análisis puede perder funcionalidad. La Release debe hacerse después de la revisión y las pruebas, no solamente porque exista un tag planeado.

## 6. Enlace y estado de entrega

Repositorio: https://github.com/nzluisx/Sistema-registro-academic0

Pendiente para cerrar el informe: completar nombres y datos institucionales, crear y aprobar las PRs con revisión de compañeros, adjuntar capturas, integrar la candidata a `main` tras la revisión y publicar la Release `v1.1.0`.
