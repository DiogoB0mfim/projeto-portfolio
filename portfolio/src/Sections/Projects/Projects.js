import "./projectsStyles.css"
import projectOne from "../../Assets/projectRappi.png"
import projectThree from "../../Assets/projectPokedex.png"
import projectTwo from "../../Assets/projectFoodJP.png"
import github from "../../Assets/github.png"
import deploy from "../../Assets/deploy.png"
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

    return (
        <div className="div-projects-section">
            <div className="title">
                <h1>PROJETOS</h1>
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
                                <button className="btn-git"><img src={github} alt="icone-github"/>GitHub</button>
                                <button className="btn-deploy"><img src={deploy} alt="icone-deploy"/>Visualizar</button>
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
                                <button className="btn-git"><img src={github} alt="icone-github"/>GitHub</button>
                                <button className="btn-deploy"><img src={deploy} alt="icone-deploy"/>Visualizar</button>
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
                                <button className="btn-git"><img src={github} alt="icone-github"/>GitHub</button>
                                <button className="btn-deploy"><img src={deploy} alt="icone-deploy"/>Visualizar</button>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Projects;