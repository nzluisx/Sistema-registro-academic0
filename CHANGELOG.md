# Changelog

Los cambios notables del proyecto se registran en este archivo.
Los cambios de esta sección siguen en ramas de trabajo y no se consideran integrados en `main` hasta que sus Pull Requests sean aprobadas y fusionadas.

## [Unreleased]

### Añadido
- Registro de estudiantes con validación de código y DNI únicos.
- Búsqueda y edición de estudiantes, conservando las notas vinculadas al cambiar su código.
- Edición de calificaciones y exportación de reportes académicos a CSV.
- Persistencia local de estudiantes, cursos y calificaciones.
- Consulta del promedio académico por estudiante.

### Mejorado
- Validación para impedir calificaciones duplicadas para el mismo estudiante y curso.
- Renderizado de datos con nodos de texto para evitar interpretar entradas como HTML.
- Neutralización de fórmulas en los valores de texto exportados a CSV.

## Próxima versión planeada

La segunda guía solicita `release/1.1.0` y tag `v1.1.0`. Esta versión todavía no está publicada: primero deben revisarse e integrarse las Pull Requests y completarse las pruebas finales.