# EduNotas: Sistema de Registro Académico

Aplicación web sencilla para gestionar estudiantes, cursos y calificaciones, y consultar promedios académicos. Está construida con HTML, CSS y JavaScript sin dependencias externas.

## Ejecutar

Abre `index.html` en un navegador. Los registros se guardan en el almacenamiento local de ese navegador y equipo; no se comparten entre usuarios ni navegadores.

## Funcionalidades

- Registrar estudiantes con código y DNI únicos.
- Registrar cursos con código único.
- Registrar y editar calificaciones de 0 a 20 vinculadas a un estudiante y un curso existentes.
- Consultar calificaciones y promedio general por estudiante.
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

Actualiza `CHANGELOG.md` con los cambios aprobados, prueba el flujo completo y crea la rama `release/1.1.0`. Tras la revisión final e integración en `main`, crea y publica el tag `v1.1.0` como Release en GitHub. No publiques una versión hasta verificar las funcionalidades y evidencias exigidas por el equipo.
