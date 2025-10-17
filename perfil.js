document.addEventListener('DOMContentLoaded', () => {
    // Selectores iniciales
    const companyCards = document.querySelectorAll('.card.profile-card-clickable');
    const mainContainer = document.querySelector('.main-container');

    // 1. Asignar el Event Listener a cada tarjeta de empresa
    companyCards.forEach(card => {
        card.addEventListener('click', (event) => {
            // Evita abrir el perfil si se hizo clic en un botón o enlace interno
            if (event.target.closest('button') || event.target.closest('a')) { 
                return;
            }
            
            const companyId = card.dataset.id;
            loadCompanyProfile(companyId);
        });
    });

    // 2. Función para cargar y mostrar el perfil de la empresa
    function loadCompanyProfile(id) {
        
        // Ocultar la vista principal y limpiar cualquier perfil anterior
        if (mainContainer) {
            mainContainer.style.display = 'none';
        }
        document.querySelector('.cv-page')?.remove();
        
        // Obtener los datos (SIMULACIÓN DE BASE DE DATOS)
        const companyData = getCompanyData(id);

        if (!companyData || !companyData.companyName) {
            alert('Error: Datos de la empresa no encontrados.');
            if (mainContainer) {
                mainContainer.style.display = 'flex';
            }
            return;
        }

        // Crear y poblar el elemento de la página de perfil
        const cvPage = document.createElement('div');
        cvPage.classList.add('cv-page');
        
        // INYECCIÓN DEL HTML DEL PERFIL DETALLADO
        cvPage.innerHTML = `
            <div class="cv-header">
                <div class="cv-avatar">Logo/Avatar</div>
                <div class="cv-personal-info">
                    <h1 id="cv-name">${companyData.companyName}</h1>
                    <p>Sector: ${companyData.sector}</p>
                    <p>Web: <a href="http://${companyData.website}" target="_blank" style="color:#1972ca;">${companyData.website}</a></p>
                    <p>Teléfono: ${companyData.phone}</p>
                    <p>Sede Principal: ${companyData.headquarters}</p>
                </div>
            </div>

            <div class="cv-section">
                <h2>Descripción</h2>
                <p>${companyData.description}</p>
            </div>
            
            <div class="cv-section">
                <h2>Tecnologías / Herramientas Clave</h2>
                <ul>
                    ${companyData.technologies.map(tech => `<li>${tech}</li>`).join('')}
                </ul>
            </div>

            <div class="cv-section">
                <h2>Proyectos Recientes</h2>
                <ul>
                    ${companyData.projects.map(proj => `
                        <li>
                            <strong>${proj.title}</strong> (${proj.year})
                            <p>${proj.description}</p>
                        </li>`).join('')}
                </ul>
            </div>

            <div class="cv-section">
                <h2>Cultura y Beneficios</h2>
                <ul>
                    ${companyData.culture.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>

            <button class="back-button">← Volver a Empresas</button>
        `;

        // Adjuntar y mostrar el perfil
        document.body.appendChild(cvPage);
        cvPage.style.display = 'block';

        // Asignar evento al botón de retorno
        const backButton = cvPage.querySelector('.back-button');
        backButton.addEventListener('click', () => {
            cvPage.remove(); // Elimina la vista de perfil
            if (mainContainer) {
                mainContainer.style.display = 'flex'; // Muestra de nuevo la lista
            }
        });
    }

    // 3. Función de simulación de datos (Mock Data)
    function getCompanyData(id) {
        const companies = {
            '1': {
                companyName: 'Celusoluciono',
                sector: 'Tecnología y Desarrollo de Software',
                website: 'www.celusoluciono.com',
                phone: '+57 1 789 0000',
                headquarters: 'Cali, Colombia',
                description: 'Líder en la creación de soluciones SaaS para el sector financiero en Latinoamérica. Buscamos desarrolladores, UX/UI y analistas.',
                technologies: ['React', 'Node.js', 'AWS/Azure', 'Kubernetes'],
                projects: [
                    { title: 'Plataforma de Trading Móvil', year: '2023', description: 'Desarrollo de una app móvil para transacciones rápidas y seguras.' },
                    { title: 'Sistema de IA para Riesgos', year: '2022', description: 'Implementación de un modelo de machine learning para predecir riesgos crediticios.' }
                ],
                culture: ['Trabajo remoto flexible', 'Bonos por desempeño', 'Capacitación constante', 'Oficinas modernas con cafetería gratuita']
            },
            '2': {
                companyName: 'Construcciones Atlas',
                sector: 'Construcción e Infraestructura',
                website: 'www.atlasconstruct.com',
                phone: '+57 4 567 1111',
                headquarters: 'Medellín, Colombia',
                description: 'Empresa dedicada a la construcción de proyectos de vivienda y obras públicas. Fuerte enfoque en seguridad y sostenibilidad.',
                technologies: ['AutoCAD', 'BIM (Revit)', 'Project Management Software', 'Normas ISO 9001'],
                projects: [
                    { title: 'Eco-Torres del Parque', year: '2024', description: 'Complejo de vivienda certificado por sostenibilidad ambiental.' },
                    { title: 'Puente Vial Metropolitano', year: '2023', description: 'Obra de infraestructura pública de alto impacto en la región.' }
                ],
                culture: ['Seguro de vida superior', 'Subsidio de transporte', 'Días libres extra por antigüedad', 'Planes de carrera para ingenieros y arquitectos']
            },
            '3': {
                companyName: 'Bancolombia',
                sector: 'Finanzas y Banca',
                website: 'www.bancolombia.com',
                phone: '+57 2 345 2222',
                headquarters: 'Bogotá, Colombia',
                description: 'Institución financiera con más de 50 años en el mercado. Ofrecemos oportunidades en áreas de riesgo, tecnología y atención al cliente.',
                technologies: ['SAP FICO', 'SQL Server', 'Blockchain (exploración)', 'Herramientas de BI'],
                projects: [
                    { title: 'Digitalización de Sucursales', year: '2024', description: 'Migración de procesos internos a plataformas 100% digitales.' }
                ],
                culture: ['Fondo de empleados con alta rentabilidad', 'Auxilios educativos', 'Jornada laboral reducida los viernes', 'Programas de bienestar financiero']
            },
        };

        return companies[id];
    }
});