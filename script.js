document.addEventListener("DOMContentLoaded", function () {
    fetch('data/programas.json')
        .then(response => response.json())
        .then(data => {
            const tablaComparacion = document.getElementById('tabla-comparacion');
            data.candidatos.forEach(candidato => {
                const card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = `
                    <h3>${candidato.nombre}</h3>
                    <p><strong>Partido:</strong> ${candidato.partido}</p>
                    <p><strong>Educación:</strong> ${candidato.programa.educacion}</p>
                    <p><strong>Salud:</strong> ${candidato.programa.salud}</p>
                    <p><strong>Economía:</strong> ${candidato.programa.economia}</p>
                `;
                tablaComparacion.appendChild(card);
            });
        })
        .catch(error => console.error('Error al cargar los datos:', error));
});
