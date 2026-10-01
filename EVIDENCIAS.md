# Evidencias de trabajo

Repositorio público: https://github.com/nzluisx/Sistema-registro-academic0

## Pull Requests por crear

Los enlaces llevan al formulario de comparación desde `main`. Inicia sesión en GitHub, revisa el diff, completa descripción y pruebas, y solicita la revisión de otro integrante.

- Estudiantes: https://github.com/nzluisx/Sistema-registro-academic0/compare/main...feature-registro-estudiantes?expand=1
- Notas: https://github.com/nzluisx/Sistema-registro-academic0/compare/main...feature-registro-notas?expand=1
- Reportes: https://github.com/nzluisx/Sistema-registro-academic0/compare/main...feature-reporte-promedios?expand=1
- Conflicto resuelto: https://github.com/nzluisx/Sistema-registro-academic0/compare/main...feature-resolver-conflicto?expand=1

Las PRs, sus revisiones y aprobaciones todavía no se han creado. Quien abra cada PR debe asignar un revisor distinto del autor y adjuntar evidencia de las pruebas.

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
- [ ] Tres Pull Requests creadas.
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
