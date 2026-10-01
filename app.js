
function cargarRegistros(clave) {
    try {
        const registros = JSON.parse(localStorage.getItem(clave) || "[]");
        return Array.isArray(registros) ? registros : [];
    } catch {
        return [];
    }
}

const estudiantes = cargarRegistros("eduNotas.estudiantes");
const cursos = cargarRegistros("eduNotas.cursos");
const calificaciones = cargarRegistros("eduNotas.calificaciones");
const formulario = document.getElementById("formEstudiante");
const formularioCurso = document.getElementById("formCurso");
const formularioNota = document.getElementById("formNota");
const resultadoEstudiantes = document.getElementById("resultado");
const resultadoCursos = document.getElementById("resultadoCursos");
const resultadoNotas = document.getElementById("resultadoNotas");
const botonGuardarNota = formularioNota.querySelector("button[type='submit']");
const botonCancelarEdicion = document.getElementById("btnCancelarEdicion");
let indiceNotaEnEdicion = null;

function guardarRegistros(clave, registros) {
    localStorage.setItem(clave, JSON.stringify(registros));
}

function claveNormalizada(valor) {
    return valor.trim().toLocaleLowerCase("es");
}

function limpiarLista(contenedor) {
    const titulo = contenedor.querySelector("h2");
    contenedor.replaceChildren(titulo);
}

function renderizarEstudiantes() {
    limpiarLista(resultadoEstudiantes);
    estudiantes.forEach(estudiante => {
        const elemento = document.createElement("p");
        elemento.textContent = `${estudiante.nombre} ${estudiante.apellido} | Código: ${estudiante.codigo} | DNI: ${estudiante.dni}`;
        resultadoEstudiantes.appendChild(elemento);
    });
}

function renderizarCursos() {
    limpiarLista(resultadoCursos);
    cursos.forEach(curso => {
        const elemento = document.createElement("p");
        elemento.textContent = `Código: ${curso.codigo} | Curso: ${curso.nombre}`;
        resultadoCursos.appendChild(elemento);
    });
}

function renderizarCalificaciones() {
    limpiarLista(resultadoNotas);
    calificaciones.forEach((calificacion, indice) => {
        const fila = document.createElement("div");
        fila.className = "registro-nota";

        const detalle = document.createElement("p");
        detalle.textContent = `Estudiante: ${calificacion.codigo} | Curso: ${calificacion.curso} | Nota: ${calificacion.nota}`;

        const botonEditar = document.createElement("button");
        botonEditar.type = "button";
        botonEditar.dataset.editarNota = indice;
        botonEditar.textContent = "Editar";

        fila.append(detalle, botonEditar);
        resultadoNotas.appendChild(fila);
    });
}

function cancelarEdicionNota() {
    indiceNotaEnEdicion = null;
    formularioNota.reset();
    botonGuardarNota.textContent = "Registrar calificación";
    botonCancelarEdicion.hidden = true;
}

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const codigo = document.getElementById("codigo").value.trim();
    const dni = document.getElementById("dni").value.trim();

    if (estudiantes.some(estudiante =>
        claveNormalizada(estudiante.codigo) === claveNormalizada(codigo) ||
        estudiante.dni === dni
    )) {
        alert("El código o DNI del estudiante ya está registrado.");
        return;
    }

    estudiantes.push({ nombre, apellido, codigo, dni });
    guardarRegistros("eduNotas.estudiantes", estudiantes);
    renderizarEstudiantes();
    formulario.reset();
});

formularioCurso.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombreCurso").value.trim();
    const codigo = document.getElementById("codigoCurso").value.trim();

    if (cursos.some(curso =>
        claveNormalizada(curso.codigo) === claveNormalizada(codigo)
    )) {
        alert("El código del curso ya existe.");
        return;
    }

    cursos.push({ nombre, codigo });
    guardarRegistros("eduNotas.cursos", cursos);
    renderizarCursos();
    formularioCurso.reset();
});

formularioNota.addEventListener("submit", function(event) {
    event.preventDefault();

    const codigo = document.getElementById("codigoEstudianteNota").value.trim();
    const curso = document.getElementById("cursoNota").value.trim();
    const nota = Number(document.getElementById("calificacion").value);

    if (!estudiantes.some(estudiante =>
        claveNormalizada(estudiante.codigo) === claveNormalizada(codigo)
    )) {
        alert("El estudiante no está registrado.");
        return;
    }

    const cursoRegistrado = cursos.find(elemento =>
        claveNormalizada(elemento.nombre) === claveNormalizada(curso)
    );
    if (!cursoRegistrado) {
        alert("El curso no está registrado.");
        return;
    }

    if (!Number.isFinite(nota) || nota < 0 || nota > 20) {
        alert("La nota debe estar entre 0 y 20.");
        return;
    }

    const registro = {
        codigo: estudiantes.find(estudiante =>
            claveNormalizada(estudiante.codigo) === claveNormalizada(codigo)
        ).codigo,
        curso: cursoRegistrado.nombre,
        nota
    };

    if (indiceNotaEnEdicion === null) {
        calificaciones.push(registro);
    } else {
        calificaciones[indiceNotaEnEdicion] = registro;
    }

    guardarRegistros("eduNotas.calificaciones", calificaciones);
    renderizarCalificaciones();
    cancelarEdicionNota();
});

resultadoNotas.addEventListener("click", function(event) {
    const boton = event.target.closest("button[data-editar-nota]");
    if (!boton) return;

    indiceNotaEnEdicion = Number(boton.dataset.editarNota);
    const calificacion = calificaciones[indiceNotaEnEdicion];
    document.getElementById("codigoEstudianteNota").value = calificacion.codigo;
    document.getElementById("cursoNota").value = calificacion.curso;
    document.getElementById("calificacion").value = calificacion.nota;
    botonGuardarNota.textContent = "Guardar cambios";
    botonCancelarEdicion.hidden = false;
    formularioNota.scrollIntoView({ behavior: "smooth", block: "center" });
});

botonCancelarEdicion.addEventListener("click", cancelarEdicionNota);

document.getElementById("btnMostrarInformacion")
    .addEventListener("click", function() {
        const reporte = document.getElementById("reporteAcademico");
        reporte.replaceChildren();

        if (estudiantes.length === 0) {
            reporte.textContent = "No hay estudiantes registrados.";
            return;
        }

        estudiantes.forEach(function(estudiante) {
            const notasEstudiante = calificaciones.filter(
                calificacion => claveNormalizada(calificacion.codigo) ===
                    claveNormalizada(estudiante.codigo)
            );
            const bloque = document.createElement("div");
            const titulo = document.createElement("h3");
            titulo.textContent = `${estudiante.nombre} ${estudiante.apellido}`;

            const detalle = document.createElement("ul");
            notasEstudiante.forEach(function(calificacion) {
                const item = document.createElement("li");
                item.textContent = `${calificacion.curso}: ${calificacion.nota}`;
                detalle.appendChild(item);
            });

            const resumen = document.createElement("p");
            const promedio = notasEstudiante.length > 0
                ? notasEstudiante.reduce((suma, calificacion) =>
                    suma + calificacion.nota, 0) / notasEstudiante.length
                : null;
            resumen.textContent = promedio === null
                ? "Sin calificaciones registradas."
                : `Promedio general: ${promedio.toFixed(2)}`;

            bloque.append(titulo, detalle, resumen);
            reporte.appendChild(bloque);
        });
    });

renderizarEstudiantes();
renderizarCursos();
renderizarCalificaciones();