let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("excel");
        habilidades[1].classList.add("power_bi");
        habilidades[2].classList.add("tableau");
        habilidades[3].classList.add("mysql_postgresql");
        habilidades[4].classList.add("python");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
};

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 


document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada

    // Recoger los datos del formulario
    const form = event.target;
    const formData = new FormData(form);

    // Enviar el formulario usando Fetch
    fetch(form.action, {
        method: form.method,
        headers: {
            'Accept': 'application/json'
        },
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Mostrar mensaje de confirmación al usuario
        alert('Message sent succesfully!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while sending the message. Please try again.');
    });
});

function openModal(projectId) {
    let modal = document.getElementById("modal");
    let modalImg = document.getElementById("modal-img");
    let modalText = document.getElementById("modal-text");

    // Customize the content based on the project
    if (projectId === 'proyecto1') {
        modalImg.innerHTML = `
            <a href="https://github.com/Shritibehura/Moto_sales-dashboard" target="_blank">
                <img src="img/twitteranalysis.png" alt="Insumos Clinicos">
            </a>`;
        modalText.innerHTML = `
            <h2>Motorola Sales Dashboard</h2>
            <p class="tecnologias">Tools used:</p>
            <ul class="tecnologias">
                <li>Power BI</li>
            </ul>
            <p class="descripcion">
An interactive Power BI dashboard visualizing Motorola’s mobile sales performance across India. Designed to provide actionable insights into sales trends, customer behavior, transaction methods, and regional distribution—empowering data-driven decision-making across business functions.                <br><br>
                <a href="https://github.com/Shritibehura/Moto_sales-dashboard" target="_blank">To learn more, click here.</a>
            </p>
        `;
    } else if (projectId === 'proyecto2') {
        modalImg.innerHTML = `
            <a href="https://github.com/Shritibehura/Hospital-data-dashboard" target="_blank">
                <img src="img/Hospital emergency room dashboard.png">
            </a>`;
        modalText.innerHTML = `
            <h2>Hospital Emergency Room Dashboard</h2>
            <p class="tecnologias">Tools used:</p>
            <ul class="tecnologias">
                <li>Excel</li>
            </ul>
            <p class="descripcion">
This project is a Monthly Emergency Room (ER) Report Dashboard built using Microsoft Excel, designed to visualize key metrics related to patient flow, wait times, satisfaction levels, and departmental performance for February.                <br><br>
                <a href="https://github.com/Shritibehura/Hospital-data-dashboard" target="_blank">To learn more, click here. </a>
            </p>
        `;  
    } else if (projectId === 'proyecto3') {
        modalImg.innerHTML = `
            <a href="https://github.com/Shritibehura/uber_data_analysis" target="_blank">
                <img src="img/tdgh.PNG" alt="R.S Project">
            </a>`;
        modalText.innerHTML = `
            <h2>Uber NYC Ride Data Analysis</h2>
            <p class="tecnologias">Tools used:</p>
            <ul class="tecnologias">
                <li>Python</li>
            </ul>
            <p class="descripcion">
This project presents a detailed exploratory data analysis (EDA) on Uber ride data collected in New York City during 2014 and 2015. The dataset includes millions of ride records with timestamps and locations, allowing for temporal, geographic, and behavioral insights into ride demand and dispatch patterns.                <br><br>
                <a href="https://github.com/Shritibehura/uber_data_analysis" target="_blank">To learn more, click here.</a>
            </p>
        `;
    } else if (projectId === 'proyecto4') {
        modalImg.innerHTML = `
            <a href="https://github.com/mateofrancop/Pereira-Economy" target="_blank">
                <img src="img/Captura.PNG" alt="Pereira Economy">
            </a>`;
        modalText.innerHTML = `
            <h2>Hotel Booking Demand Analysis</h2>
            <p class="tecnologias">Tools used:</p>
            <ul class="tecnologias">
                <li>Python</li>
                <li>MySQL</li>
                <li>Excel</li>
                <li>Tableau</li>
            </ul>
            <p class="descripcion">
                In this project, we evaluate the economic conditions of the city of Pereira, aiming to find patterns and behaviors that help determine the feasibility of investing in the city.
                <br><br>
                <a href="https://github.com/mateofrancop/Pereira-Economy" target="_blank">If you want to know more, click here</a>
            </p>
        `;
    } else if (projectId === 'proyecto5') {
        modalImg.innerHTML = `
            <a href="https://github.com/Shritibehura/Hospital-data-dashboard" target="_blank">
                <img src="img/Dispercion1.PNG" alt="Investment Portfolio">
            </a>`;
        modalText.innerHTML = `
            <h2>Hotel Booking Demand Analysis</h2>
            <p class="tecnologias">Tools used:</p>
            <ul class="tecnologias">
                <li>Python</li>
            </ul>
            <p class="descripcion">
This project is a Monthly Emergency Room (ER) Report Dashboard built using Microsoft Excel, designed to visualize key metrics related to patient flow, wait times, satisfaction levels, and departmental performance for February.                <br><br>
                <a href="https://github.com/Shritibehura/Hospital-data-dashboard" target="_blank">If you want to know more, click here</a>
            </p>
        `;
    } else if (projectId === 'proyecto6') {
        modalImg.innerHTML = `
            <a href="https://github.com/mateofrancop/Portfolio_Optimization" target="_blank">
                <img src="img/R.PNG" alt="Portfolio Optimization">
            </a>`;
        modalText.innerHTML = `
            <h2>Portfolio Optimization</h2>
            <p class="tecnologias">Tools used:</p>
            <ul class="tecnologias">
                <li>R</li>
                <li>Excel</li>
            </ul>
            <p class="descripcion">
                In this project, the goal is to optimize the investment portfolio for a person in Colombia by selecting various companies available in the Tree app, consisting of national and international stocks and ETFs.
                <br><br>
                <a href="https://github.com/mateofrancop/Portfolio_Optimization" target="_blank">If you want to know more, click here</a>
            </p>
        `;
    } else if (projectId === 'proyecto7') {
        modalImg.innerHTML = `
            <a href="https://github.com/mateofrancop/Customer-s-Complaints" target="_blank">
                <img src="img/tegd.PNG" alt="Customer's Complaints">
            </a>`;
        modalText.innerHTML = `
            <h2>Customer's Complaints</h2>
            <p class="tecnologias">Tools used:</p>
            <ul class="tecnologias">
                <li>Power BI</li>
            </ul>
            <p class="descripcion">
                This project aims to analyze the complaints received by a company in the Risaralda department.
                <br><br>
                <a href="https://github.com/mateofrancop/Customer-s-Complaints" target="_blank">If you want to know more, click here</a>
            </p>
        `;
    } else if (projectId === 'proyecto8') {
        modalImg.innerHTML = `
            <a href="https://github.com/mateofrancop/Black-Litterman_Markowitz" target="_blank">
                <img src="img/Frontier.PNG" alt="Markowitz and Black-Litterman">
            </a>`;
        modalText.innerHTML = `
            <h2>Markowitz and Black-Litterman</h2>
            <p class="tecnologias">Tools used:</p>
            <ul class="tecnologias">
                <li>Python</li>
                <li>Excel</li>
            </ul>
            <p class="descripcion">
                This project compares two portfolio optimization models (Markowitz and Black-Litterman) to discover which one is more reliable for investing. For this, Colombian companies are selected.
                <br><br>
                <a href="https://github.com/mateofrancop/Black-Litterman_Markowitz" target="_blank">If you want to know more, click here</a>
            </p>
        `;
    } else if (projectId === 'proyecto9') {
        modalImg.innerHTML = `
            <a href="https://github.com/mateofrancop/Tesis" target="_blank">
                <img src="img/tdgh.PNG" alt="Tesis">
            </a>`;
        modalText.innerHTML = `
            <h2>Tesis</h2>
            <p class="tecnologias">Tools used:</p>
            <ul class="tecnologias">
                <li>Python</li>
                <li>Word</li>
            </ul>
            <p class="descripcion">
                Este proyecto de investigación se centra en abordar la crisis del sistema pensional a nivel mundial, analizando los desafíos futuros que enfrentará y proponiendo estrategias innovadoras para garantizar una jubilación estable y segura. La investigación explorará varias estrategias de inversión, incluyendo la optimización de portafolios, la implementación de modelos avanzados de machine learning, y el uso combinado de la estrategia de DCA (Dollar-Cost Averaging) con el interés compuesto.
                <br><br>
                <a href="https://github.com/mateofrancop/Tesis" target="_blank">Para saber mas, haga clic aqui </a>
            </p>
        `;
    }



    modal.style.display = "block";
}

function closeModal() {
    let modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Cierra el modal cuando el usuario hace clic fuera del contenido del modal
window.onclick = function(event) {
    let modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


