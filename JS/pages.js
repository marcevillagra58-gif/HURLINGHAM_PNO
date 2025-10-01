const pageContent = {
    'Entrada': `
        <div class="container-infinito">
            <div class="wrapper">
                <div class="swirl">
                    <span>B</span>
                    <span>I</span>
                    <span>E</span>
                    <span>N</span>
                    <span>V</span>
                    <span>E</span>
                    <span>N</span>
                    <span>I</span>
                    <span>D</span>
                    <span>O</span>
                    <span>S</span>
                    <span> </span>
                    <span>A</span>
                    <span> </span>
                    <span>H</span>
                    <span>U</span>
                    <span>R</span>
                    <span>L</span>
                    <span>I</span>
                    <span>N</span>
                    <span>G</span>
                    <span>H</span>
                    <span>A</span>
                    <span>M</span>
                </div>
                <div class="center-content">
                    <img src="./ASSETS/escudo.jpeg" alt="Logo" class="logo-infinito">
                </div>
            </div>
            <div class="wrapper">
                <div class="swirl">
                    <span>B</span>
                    <span>I</span>
                    <span>E</span>
                    <span>N</span>
                    <span>V</span>
                    <span>E</span>
                    <span>N</span>
                    <span>I</span>
                    <span>D</span>
                    <span>O</span>
                    <span>S</span>
                    <span> </span>
                    <span>A</span>
                    <span> </span>
                    <span>H</span>
                    <span>U</span>
                    <span>R</span>
                    <span>L</span>
                    <span>I</span>
                    <span>N</span>
                    <span>G</span>
                    <span>H</span>
                    <span>A</span>
                    <span>M</span>
                </div>
                <div class="center-content">
                    <button class="nav-btn" data-target="page1">Ingresar</button>
                </div>
            </div>
        </div>
    `,
    'page1': `
        <div class="container">
            <div class="main-content">
                <h1 class="title">Bienvenidos a Hurlingham</h1>
                <img class="imagen-principal" src="./ASSETS/Municipio-de-Hurlingham-HOME.jpg" alt="Municipalidad">
            </div>
        </div>
    `,
    'page2': `
        <div class="container">
            <div class="main-content">
                <h1 class="oswald-title">HURLINGHAM: SU HISTORIA</h1>
                <p>La historia de Hurlingham se centra en su creación a fines del siglo XIX, ligada al Hurlingham Club fundado por la comunidad anglo-argentina y el crecimiento de asentamientos como Villa Tesei. El nombre Hurlingham proviene del club, mientras que la ciudad se formalizó como municipio en 1994 por la Ley Provincial N.º 11.610, integrando las localidades de Hurlingham, Villa Tesei y William Morris. </p>

                <div class="map-container">
                    <img class="mapa" src="./ASSETS/mapa.jpg" alt="Mapa de ciudades">
                    <div class="hotspot" data-target="hurlingham-info" style="top: 33%; left: 55%; width: 20%; height: 18%;"></div>
                    <div class="hotspot" data-target="tesei-info" style="top: 65%; left: 53%; width: 20%; height: 18%;"></div>
                    <div class="hotspot" data-target="morris-info" style="top: 28%; left: 25%; width: 20%; height: 18%;"></div>
                </div>
            </div>
        </div>

        <!-- Information Modals (hidden by default) -->
        <div id="hurlingham-info" class="info-modal">
            <div>
                <button class="close-btn">&times;</button>
                <h2>Hurlingham</h2>
                <p>La historia de Hurlingham se origina a mediados del siglo XIX con el desarrollo de un molino y un almacén, pero su nombre proviene del Hurlingham Club, fundado por británicos en 1888, que homenajea a un club homónimo en Londres. El partido se creó formalmente en 1994, pero ya existía una comunidad con aportes de inmigrantes británicos, alemanes, italianos y españoles. Hoy, Hurlingham se caracteriza por sus espacios verdes y es una de las localidades más jóvenes de la provincia de Buenos Aires. </p>
                <img src="./ASSETS/historia/hist-hurl-1.jpg" alt="foto-historica Hurlingham 1">
                <img src="./ASSETS/historia/hist-hurl-2.jpg" alt="foto-historica Hurlingham 2">         
            </div>
        </div>

        <div id="tesei-info" class="info-modal">
            <div>
                <button class="close-btn">&times;</button>
                <h2>Villa Tesei</h2>
                <p>Villa Tesei tiene sus orígenes en las tierras cercanas al arroyo de Morón, donde el inmigrante italiano Santos Tesei se estableció en 1909 y se convirtió en un pionero local. La zona, que antiguamente pertenecía al Partido de Morón, fue declarada ciudad el 13 de noviembre de 1974, en homenaje a Don Santos. Posteriormente, con la creación del Municipio de Hurlingham en 1994, Villa Tesei pasó a formar parte de este nuevo partido como una de sus principales localidades. </p>
                <img src="./ASSETS/historia/hist-tes-1.jpg" alt="foto-historica Tesei 1">
                <img src="./ASSETS/historia/hist-tes-2.jpg" alt="foto-historica Tesei 2">        
            </div>
        </div>

        <div id="morris-info" class="info-modal">
            <div>
                <button class="close-btn">&times;</button>
                <h2>William Morris</h2>
                <p>La historia de William Morris se centra en la instalación de una estación ferroviaria en 1958 en el Barrio Roca, anteriormente una zona rural de Morón. El nombre de la localidad honra a William Case Morris, un misionero y educador británico conocido por su labor filantrópica y educativa en Argentina a finales del siglo XIX y principios del XX. </p>
                <img src="./ASSETS/historia/hist-morr-1.jpg" alt="foto-historica Morris 1">
                <img src="./ASSETS/historia/hist-morr-2.jpg" alt="foto-historica Morris 2">
            </div>
        </div>
    `,
    'page3': `
        <div class="container">
            <div class="swiper-container">
                <div class="swiper-wrapper"></div>
                <div class="swiper-pagination"></div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </div>
        </div>
    `,
    'page4': `
        <div class="container">
            <h1 class="title-culture" >Cultura</h1>
            <h2 class="title-culture-h2" >Estos son algunos de los grandes exponentes de la musica en Hurlingham</h2>
            <div class="links">
                <a target="_blank" href="https://www.google.com/search?gs_ssp=eJzj4tTP1TcwtzA2Mzdg9GIpLs3NBwAkNQRh&q=sumo&oq=sumo&gs_lcrp=EgZjaHJvbWUqCggBEC4YsQMYgAQyBwgAEAAYjwIyCggBEC4YsQMYgAQyCggCEC4YsQMYgAQyBwgDEAAYgAQyBwgEEAAYgAQyBwgFEAAYgAQyBwgGEAAYgAQyBwgHEAAYgAQyBwgIEAAYgAQyBwgJEC4YgATSAQgyMzExajBqN6gCB7ACAfEFa-csmX9iM9s&sourceid=chrome&ie=UTF-8">
                    <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTuXaae0v5eCbuH3-yYp25ePYucAyRM8-iuVZ_DCXOepic1-JZ1_fC637AMfHXQJth4SsFmMREvRz4KBrv3zY9T5GBahTcuXBUkzqnCghvh" alt="Logo SUMO">
                    <span class="link-text">Sumo</span>
                </a>
                <a target="_blank" href="https://www.google.com/search?q=las+pelotas&sca_esv=764700c983d0c1df&sxsrf=AE3TifN83S6g-c5i2G95fL53E5ig346y_w%3A1759272583358&ei=h17caKjUFc3a1sQP2M6nuQs&gs_ssp=eJzj4tLP1TcwLMgzNkwyYPTizkksVihIzckvSSwGAFuvB8M&oq=las+pelotas&gs_lp=Egxnd3Mtd2l6LXNlcnAiC2xhcyBwZWxvdGFzKgIIADINEC4YgAQYsQMYQxiKBTIFEAAYgAQyBRAAGIAEMgoQLhiABBhDGIoFMgUQABiABDIFEC4YgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMhwQLhiABBixAxhDGIoFGJcFGNwEGN4EGN8E2AEBSO0YUABY9g1wAHgBkAEAmAFsoAGICKoBAzguM7gBAcgBAPgBAZgCC6ACvgjCAgQQIxgnwgIKECMYgAQYJxiKBcICCxAAGIAEGLEDGIMBwgILEC4YgAQYsQMYgwHCAhMQLhiABBjHARgnGIoFGI4FGK8BwgIKEAAYgAQYQxiKBcICIBAuGIAEGMcBGIoFGI4FGK8BGJcFGNwEGN4EGOAE2AEBwgIIEC4YgAQYsQPCAggQABiABBixA8ICDhAuGIAEGLEDGMcBGK8BwgILEC4YgAQYxwEYrwHCAg4QLhiABBixAxjRAxjHAcICDhAAGIAEGLEDGIMBGIoFwgIOEC4YgAQYxwEYjgUYrwGYAwC6BgYIARABGBSSBwM3LjSgB_qAArIHAzcuNLgHvgjCBwQyLTExyAcr&sclient=gws-wiz-serp">
                    <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgsTPr7dr2z5T-QqEEZYcznmY12iDn7ghKkJ16fASDUAfElChvU8EzmMl96y4fvDysadmCJ9biPh9-8cGe1p8qP7HxUAWKWxSBwLcKkZnk8j-ieANu-NYnNLLCsAAszpZrM1xp4PdZ8wuo/s1600/LasPelotas5.jpg" alt="Logo Las Pelotas">
                    <span class="link-text">Las Pelotas</span>
                </a>
                <a target="_blank" href="https://www.google.com/search?q=divididos&sca_esv=764700c983d0c1df&biw=1920&bih=911&sxsrf=AE3TifP7k_XWX3ZIR59HSHLcyk4lTHAQvg%3A1759273367140&ei=l2HcaO6dCKuZ1sQPqffgwAk&gs_ssp=eJzj4tTP1TcwLzGpSDNg9OJMySzLTMlMyS8GAEoRBw8&oq=divididos&gs_lp=Egxnd3Mtd2l6LXNlcnAiCWRpdmlkaWRvcyoCCAAyCBAuGIAEGLEDMgoQABiABBhDGIoFMgUQABiABDIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTIKEC4YgAQYQxiKBTIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyFxAuGIAEGLEDGJcFGNwEGN4EGN8E2AEBSPcjUABYtRFwAHgAkAEAmAFpoAHsBqoBAzUuNLgBAcgBAPgBAZgCCqACvBnCAgoQIxiABBgnGIoFwgINEAAYgAQYsQMYQxiKBcICCxAAGIAEGLEDGIMBwgIIEAAYgAQYsQPCAg4QLhiABBixAxjRAxjHAcICBBAjGCfCAhAQLhiABBjRAxjHARgnGIoFwgINEC4YgAQYsQMYQxiKBcICEBAAGIAEGLEDGEMYgwEYigXCAhwQLhiABBixAxhDGIoFGJcFGNwEGN4EGN8E2AEBmAMAugYGCAEQARgUkgcHNC41LjgtMaAHwYsBsgcDNC41uAeTB8IHBTAuMi44yAcf&sclient=gws-wiz-serp">
                    <img src="https://cartelera.montevideo.com.uy/imagenes_espectaculos/musicdetail13/21132.jpg" alt="Logo Divididos">
                    <span class="link-text">Divididos</span>
                </a>
                <a target="_blank" href="https://www.hurlingham.gob.ar/cultura/agenda/la-ruta-de-sumo/">
                    <img src="https://www.hurlingham.gob.ar/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-17-at-11.52.59.jpeg" alt="Logo la ruta de Sumo">
                    <span class="link-text">La Ruta de Sumo</span>
                </a>
                <a target="_blank" href="https://www.hurlinghamaldia.com/la-orquesta-tipica-jose-massa-y-sus-elegantes-del-tango-la-elegancia-tanguera-que-vistio-el-oeste/">
                    <img src="https://www.hurlinghamaldia.com/wp-content/uploads/2025/09/2.jpg" alt="Logo Jose Massa">
                    <span class="link-text">Orquesta Típica José Massa</span>
                </a>
            </div>
            <h1 class="title-murales" >Murales por las ciudades</h1>
            <h2 class="title-culture-h2" >Si recorres las calles del partido, podés apreciar obras como estas</h2>
            <div class="parent">
                <div class="div1"> <img src="./ASSETS/Murales/mural 1.jpg" alt="Mural Paisano"></div>
                <div class="div2"> <img src="./ASSETS/Murales/mural 2.jpg" alt="Mural mi lugar"></div>
                <div class="div3"> <img src="./ASSETS/Murales/mural 3.jpg" alt="Mural dictadura"></div>
                <div class="div4"> <img src="./ASSETS/Murales/mural 4.jpg" alt="Mural de trabajadores"></div>
                <div class="div5"> <img src="./ASSETS/Murales/mural 5.jpg" alt="Mural de ave"></div>
                <div class="div6"> <img src="./ASSETS/Murales/mural 6.jpg" alt="Mural de edificio"></div>
                <div class="div7"> <img src="./ASSETS/Murales/mural 7.webp" alt="Mural mujer con flores"></div>
                <div class="div8"> <img src="./ASSETS/Murales/mural 8.jpg" alt="Mural pareja"></div>
            </div>
        </div>
    `,
    'page5': `
        <div class="container" style="justify-content: center;">
            <img class="proximamente"  src="./ASSETS/proximamente.png" alt="proximamente">
        </div>
    `
};