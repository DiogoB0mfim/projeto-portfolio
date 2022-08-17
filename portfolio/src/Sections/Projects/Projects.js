import "./projectsStyles.css"
import projectOne from "../../Assets/projectRappi.png"
import projectThree from "../../Assets/projectPokedex.png"
import projectTwo from "../../Assets/projectFoodJP.png"
import github from "../../Assets/github.png"
import deploy from "../../Assets/deploy.png"
import { useState } from "react"
// Import Swiper 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode} from "swiper";


const Projects = () => {
    const [descriptionP1, setDescriptionP1] = useState("")
    const [descriptionP2, setDescriptionP2] = useState("")
    const [descriptionP3, setDescriptionP3] = useState("")
    
    return (
        <div className="div-projects-section">
            <div className="title">
                <h1>PROJETOS</h1>
            </div>
            <div className="container-projetos">
                <Swiper 
                    breakpoints={{
                        600: {
                            width: 600,
                            slidesPerView: 1,
                        },

                        601: {
                            width: 601,
                            slidesPerView: 2,
                        },

                        916: {
                            width: 916,
                            slidesPerView: 3,
                        }
                    }}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{clickable: true,}}
                    modules={[FreeMode]}
                    className="mySwiper">
                        
                    <SwiperSlide>
                        <div className="project">
                            <img 
                                src={projectOne}
                                onMouseOver={() => 
                                    setDescriptionP1("O Rappi4, foi proposto pela Labenu com intenção de colocar em prática o conhecimento do módulo front-end. Tem o intuito de simular uma aplicação web para pedidos.")}
                                onMouseOut={() => setDescriptionP1("")}
                                />
                            <p>{descriptionP1}</p>
                            <div className="container-btn">
                                <button className="btn-git"><img src={github}/>GitHub</button>
                                <button className="btn-deploy"><img src={deploy}/>Visualizar</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="project">
                            <img src={projectTwo}
                            onMouseOver={() => 
                                setDescriptionP2("O FoodJP é um projeto do desafio nº27 da comunidade Codelandia, com o design desenvolvido pelo Iuri Silva. Utilizei deste desafio para consolidar meu conhecimento em HTML, CSS e JS.")}
                            onMouseOut={() => setDescriptionP2("")}
                            />
                            <p>{descriptionP2}</p>
                            <div className="container-btn">
                                <button className="btn-git"><img src={github}/>GitHub</button>
                                <button className="btn-deploy"><img src={deploy}/>Visualizar</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="project">
                            <img src={projectThree}
                             onMouseOver={() => 
                                setDescriptionP3("O Pokédex foi feito com o intuito de simular um site com mais de 1000 pokémons extraidos da PokéAPI e com algumas funcionalidades, dentre elas adicionar, excluir e ver detalhes dos pokémons.")}
                            onMouseOut={() => setDescriptionP3("")}
                            />
                            <p>{descriptionP3}</p>
                            <div className="container-btn">
                                <button className="btn-git"><img src={github}/>GitHub</button>
                                <button className="btn-deploy"><img src={deploy}/>Visualizar</button>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Projects;