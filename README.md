# EduNotas: Sistema de Registro Académico

Aplicación web sencilla para gestionar estudiantes, cursos y calificaciones, y consultar promedios académicos. Está construida con HTML, CSS y JavaScript sin dependencias externas.

## Ejecutar

Abre `index.html` en un navegador. Los registros se guardan en el almacenamiento local de ese navegador y equipo; no se comparten entre usuarios ni navegadores.

## Funcionalidades

- Registrar estudiantes con código y DNI únicos.
- Buscar estudiantes por nombre, código o DNI y editar sus datos sin perder las calificaciones relacionadas.
- Registrar cursos con código único.
- Registrar y editar calificaciones de 0 a 20 vinculadas a un estudiante y un curso existentes.
- Evitar notas duplicadas para el mismo estudiante y curso.
- Consultar calificaciones y promedio general por estudiante.
- Exportar reportes académicos a CSV.
- Conservar los registros al cerrar y volver a abrir la aplicación en el mismo navegador.

## Flujo colaborativo

Trabaja cada funcionalidad en una rama propia y abre una Pull Request hacia `main`. Solicita al menos una revisión, describe el cambio y adjunta evidencia de pruebas antes de integrar.

```bash
git switch -c feature-registro-estudiantes
git add index.html app.js estilos.css
git commit -m "feat: validar estudiantes por DNI"
git push -u origin feature-registro-estudiantes
```

Usa nombres equivalentes para las ramas de notas y reportes. Para demostrar la resolución de conflictos, coordina cambios sobre la misma línea en una rama de práctica, resuelve el archivo, ejecuta las pruebas y registra la decisión en la Pull Request.

## Preparar una versión

La rama candidata `release/1.1.0` reúne los cambios para pruebas integradas. Antes de fusionarla a `main`, revisa y aprueba las Pull Requests de funcionalidad. Después de la integración final y las comprobaciones, actualiza `CHANGELOG.md`, crea el tag `v1.1.0` y publica la Release en GitHub. Esta candidata todavía no es una versión publicada.
