# Evidencias de trabajo

Las PRs #1–#4 están abiertas. Las revisiones y aprobaciones de compañeros siguen pendientes.

## Contenido sugerido para las PRs

### Estudiantes

- Título: `feat: buscar y editar estudiantes`
- Descripción: Se añadió búsqueda por nombre, código o DNI y edición de datos del estudiante. Si cambia el código, las calificaciones asociadas se actualizan para conservar su relación.
- Pruebas: búsqueda por DNI; edición de nombre y código; verificación de que la calificación y el promedio siguen ligados al código nuevo.
- Revisor: [asignar otro integrante]

### Notas

- Título: `feat: impedir notas duplicadas por curso`
- Descripción: Se impide guardar más de una calificación para el mismo estudiante y curso. La nota existente se puede editar desde su registro.
- Pruebas: enviar una calificación y repetir la combinación; comprobar que queda una sola nota y aparece el aviso para editarla.
- Revisor: [asignar otro integrante]

### Reportes

- Título: `feat: exportar reportes academicos a CSV`
- Descripción: Se añadió exportación CSV con código, DNI, estudiante, curso, calificación y promedio general. Los valores de texto que podrían ejecutarse como fórmulas se neutralizan.
- Pruebas: descargar el archivo, comprobar el promedio, comas/comillas en valores y que un nombre que inicia con `=` se exporta como texto.
- Revisor: [asignar otro integrante]

### Resolución del conflicto

- Título: `docs: registrar resolución de conflicto en encabezado`
- Descripción: Se documenta el conflicto intencional entre dos propuestas de título y la decisión de combinar la marca con el nombre del sistema.
- Pruebas: abrir la aplicación y verificar el encabezado; confirmar que no quedan marcadores de conflicto.
- Revisor: [asignar otro integrante]
# Evidencias de trabajo

Repositorio público: https://github.com/nzluisx/Sistema-registro-academic0

## Pull Requests abiertas

Los enlaces abren las PRs existentes hacia `main`. Revisa el diff, asigna un revisor de otro equipo y comprueba que la descripción y las pruebas sean correctas.

- Estudiantes: https://github.com/nzluisx/Sistema-registro-academic0/pull/1
- Notas: https://github.com/nzluisx/Sistema-registro-academic0/pull/2
- Reportes: https://github.com/nzluisx/Sistema-registro-academic0/pull/3
- Conflicto resuelto: https://github.com/nzluisx/Sistema-registro-academic0/pull/4

Las cuatro PRs están abiertas; faltan las revisiones y aprobaciones de compañeros. Cada autor debe solicitar revisión a otro integrante y adjuntar evidencia verificable.

## Conflicto intencional

Ramas con propuestas divergentes:

- `conflict-dev1-branding`: `EduNotas | Gestión de Estudiantes`
- `conflict-dev2-branding`: `Portal Universitario de Registro Académico`

La integración de la segunda rama en `feature-resolver-conflicto` produjo un conflicto real en la misma línea de `index.html`. El bloque mostraba la propuesta HEAD (`EduNotas | Gestión de Estudiantes`), el separador `=======` y la propuesta entrante (`Portal Universitario de Registro Académico`), delimitados por `<<<<<<< HEAD` y `>>>>>>> conflict-dev2-branding`.

Decisión: usar `EduNotas | Sistema de Registro Académico`, que conserva la marca y describe el producto completo en lugar de privilegiar un módulo. El archivo quedó sin marcadores y el encabezado se comprobó en el navegador.

Comandos para reproducir desde el repositorio:

```bash
git switch main
git switch -c integracion-conflicto
git merge --no-ff conflict-dev1-branding
git merge --no-ff conflict-dev2-branding
# Resolver index.html, guardar y comprobar
git status
git add index.html
git commit -m "fix: resolver conflicto en encabezado"
```

## Lista de capturas solicitadas

- [ ] Repositorio creado y visible en GitHub.
- [ ] Estructura de archivos del proyecto.
- [ ] Ramas de funcionalidad publicadas.
- [ ] Commits de cada funcionalidad.
- [x] Tres Pull Requests de funcionalidad creadas.
- [ ] Revisiones y comentarios técnicos de compañeros.
- [ ] Aprobaciones y merges de las PRs.
- [x] Conflicto generado; las ramas divergentes están publicadas.
- [x] Versiones en conflicto y resolución documentadas arriba.
- [ ] Captura del conflicto abierto antes de resolverlo.
- [ ] Captura del archivo ya resuelto en el editor.
- [ ] Historial de Git con el commit de resolución.
- [ ] Tag `v1.1.0`.
- [ ] Release `v1.1.0` publicada con su changelog.

Las capturas marcadas como pendientes deben tomarse en GitHub/VS Code durante la revisión real; este documento no sustituye las evidencias visuales solicitadas por el docente.
