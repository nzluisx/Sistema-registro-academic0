# Preguntas de reflexión

1. **¿Para qué se usan ramas en Git?** Para aislar cambios y desarrollar funcionalidades sin alterar directamente la rama estable.
2. **¿En qué se diferencian `git merge` y una Pull Request?** `git merge` integra historiales desde Git; una PR es el proceso colaborativo en GitHub para describir, revisar y aprobar esa integración.
3. **¿Por qué ocurren conflictos?** Porque dos ramas cambiaron de forma incompatible una misma parte y Git no puede decidir automáticamente cuál intención conservar.
4. **¿Cómo se resolvió el conflicto?** Se compararon las dos propuestas para el encabezado, se eligió una versión que conservó la marca y el alcance general, se quitaron los marcadores y se verificó el HTML.
5. **¿Por qué revisar una PR?** Para comprobar que el cambio cumple el requisito, detectar errores y compartir responsabilidad antes de integrarlo.
6. **¿Qué ventajas tienen las Releases?** Identifican una versión estable, hacen accesibles sus notas y permiten relacionar el producto con un tag reproducible.
7. **¿Qué debe incluir una nota de Release?** Número y fecha, funcionalidades nuevas, correcciones, cambios incompatibles conocidos e instrucciones relevantes.
8. **¿Qué problemas aparecen al editar el mismo archivo a la vez?** Conflictos, pérdida accidental de cambios y divergencia entre lo que cada integrante cree que contiene la rama.
9. **¿Cómo ayuda GitHub?** Aloja el remoto, facilita ramas, PRs, revisiones, comentarios, etiquetas y publicaciones de versiones.
10. **¿Qué buenas prácticas aplicar en un proyecto real?** Cambios pequeños, nombres claros, commits descriptivos, pruebas reproducibles, PRs revisadas por otra persona, resolución documentada de conflictos y Releases basadas en código aprobado.
