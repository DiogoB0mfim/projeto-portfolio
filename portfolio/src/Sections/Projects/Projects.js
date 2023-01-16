import "./projectsStyles.css"
import projectOne from "../../Assets/projectRappi.png"
import projectThree from "../../Assets/projectPokedex.png"
import projectTwo from "../../Assets/projectFoodJP.png"
import projectFour from "../../Assets/shopper.png"
import projectFive from "../../Assets/wirecard.png"
import github from "../../Assets/github.png"
import deploy from "../../Assets/deploy.png"
import typescript from "../../Assets/typescript-projects.png"
import mysql from "../../Assets/mysql.png"
import expressjs from "../../Assets/expressjs.png"
// Import Icons 
import react from "../../Assets/react-icon.svg"
import html from "../../Assets/html-icon.svg"
import js from "../../Assets/js-icon.svg"
import css from "../../Assets/css-icon.svg"
import styled from "../../Assets/styled-icon.png"
import material from "../../Assets/material-icon.png"
// Import Swiper 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode} from "swiper";
import { useState } from "react"

const Projects = () => {
   const [showIconP1, setShowIconP1] = useState("opacity0")
   const [showIconP2, setShowIconP2] = useState("opacity0")
   const [showIconP3, setShowIconP3] = useState("opacity0")
   const [showIconP4, setShowIconP4] = useState("opacity0")
   const [showIconP5, setShowIconP5] = useState("opacity0")

    return (
        <div id="project-section" className="div-projects-section">
            <div className="title">
                <h1>{"PROJETOS ->"}</h1>
            </div>
            <div className="container-projetos">
                <Swiper 
                    breakpoints={{
                        600: {
                            slidesPerView: 1,
                        },

                        750: {
                            slidesPerView: 2,
                        },

                        1185: {
                            slidesPerView: 3,
                            width: 1185
                        }
                    }}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{clickable: true,}}
                    modules={[FreeMode]}
                    className="mySwiper">
                    <SwiperSlide>
                        <div className="project">
                            <div className={showIconP1}>
                                <img src={react} className="img-hover" alt="icone-react"/>
                                <img src={styled} className="img-hover" alt="icone-styled"/>
                                <img src={material} className="img-hover" alt="icone-material"/>
                            </div>
                            <div className="project-img">
                                <img 
                                    src={projectOne}
                                    onMouseOver={() => setShowIconP1("opacity1")}
                                    onMouseOut={() => setShowIconP1("opacity0")}
                                    alt="icone-projeto"
                                />
                            </div>
                            <div className="container-btn">
                                <a href="https://github.com/DiogoB0mfim/hooks-labe-food4" target="blank">
                                    <button className="btn-git"><img src={github} alt="icone-github"/>GitHub</button>
                                </a>
                                <a href="https://nostalgic-fear.surge.sh/" target="blank">
                                    <button className="btn-deploy"><img src={deploy} alt="icone-deploy"/>Visualizar</button>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="project">
                            <div className={showIconP2}>
                                <img src={html} className="img-hover" alt="icone-html"/>
                                <img src={css} className="img-hover" id="css-icon" alt="icone-css"/>
                                <img src={js} className="img-hover" alt="icone-js"/>
                            </div>
                            <div className="project-img">
                                <img 
                                    src={projectTwo}
                                    onMouseOver={() => setShowIconP2("opacity1")}
                                    onMouseOut={() => setShowIconP2("opacity0")}
                                    alt="icone-projeto"
                                />
                            </div>
                            <div className="container-btn">
                                <a href="https://github.com/DiogoB0mfim/Projeto-FoodJP" target="blank">
                                    <button className="btn-git"><img src={github} alt="icone-github"/>GitHub</button>
                                </a>
                                <a href="https://projeto-foodjp.vercel.app/" target="blank">
                                    <button className="btn-deploy"><img src={deploy} alt="icone-deploy"/>Visualizar</button>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="project">
                            <div className={showIconP3}>
                                <img src={react} className="img-hover" alt="icone-react"/>
                                <img src={material} className="img-hover" alt="icone-material"/>
                                <img src={css} className="img-hover" id="css-icon" alt="icone-css"/>
                            </div>

                            <div className="project-img">
                                <img 
                                    src={projectThree}
                                    onMouseOver={() => setShowIconP3("opacity1")}
                                    onMouseOut={() => setShowIconP3("opacity0")}
                                    alt="icone-projeto"
                                />
                            </div>
                            
                            <div className="container-btn">
                                <a href="https://github.com/DiogoB0mfim/Projeto-pokedex" target="blank">
                                    <button className="btn-git"><img src={github} alt="icone-github"/>GitHub</button>
                                </a>
                                <a href="https://pokedex-project-one.vercel.app/" target="blank">
                                    <button className="btn-deploy"><img src={deploy} alt="icone-deploy"/>Visualizar</button>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="project">
                            <div className={showIconP4}>
                                <img src={react} className="img-hover" alt="icone-react"/>
                                <img src={styled} className="img-hover" alt="icone-styled"/>
                                <img src={material} className="img-hover" id="css-icon" alt="icone-material"/>
                            </div>

                            <div className="project-img">
                                <img 
                                    src={projectFour}
                                    onMouseOver={() => setShowIconP4("opacity1")}
                                    onMouseOut={() => setShowIconP4("opacity0")}
                                    alt="icone-projeto"
                                />
                            </div>
                            
                            <div className="container-btn">
                                <a href="https://github.com/DiogoB0mfim/teste-tecnico-shopper" target="blank">
                                    <button className="btn-git"><img src={github} alt="icone-github"/>GitHub</button>
                                </a>
                                <a href="https://github.com/DiogoB0mfim/teste-tecnico-shopper" target="blank">
                                    <button className="btn-deploy"><img src={deploy} alt="icone-deploy"/>Visualizar</button>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="project">
                            <div className={showIconP5}>
                                <img src={typescript} className="img-hover" alt="icone-typescript"/>
                                <img src={mysql} className="img-hover" alt="icone-mysql"/>
                                <img src={expressjs} className="img-hover" id="css-icon" alt="icone-expressjs"/>
                            </div>

                            <div className="project-img">
                                <img 
                                    src={projectFive}
                                    onMouseOver={() => setShowIconP5("opacity1")}
                                    onMouseOut={() => setShowIconP5("opacity0")}
                                    alt="icone-projeto"
                                />
                            </div>
                            
                            <div className="container-btn">
                                <a href="https://github.com/DiogoB0mfim/case-wirecard" target="blank">
                                    <button className="btn-git"><img src={github} alt="icone-github"/>GitHub</button>
                                </a>
                                <a href="https://github.com/DiogoB0mfim/case-wirecard" target="blank">
                                    <button className="btn-deploy"><img src={deploy} alt="icone-deploy"/>Visualizar</button>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Projects;