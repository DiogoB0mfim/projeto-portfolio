import "./projectsStyles.css"
import projectOne from "../../Assets/projectRappi.png"
import projectThree from "../../Assets/projectPokedex.png"
import projectTwo from "../../Assets/projectFoodJP.png"
import github from "../../Assets/github.png"
import deploy from "../../Assets/deploy.png"
// Import Swiper 
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode} from "swiper";

const Projects = () => {
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
                            <img src={projectOne}/>
                            <div className="container-btn">
                                <button className="btn-git"><img src={github}/>GitHub</button>
                                <button className="btn-deploy"><img src={deploy}/>Visualizar</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="project">
                            <img src={projectTwo}/>
                            <div className="container-btn">
                                <button className="btn-git"><img src={github}/>GitHub</button>
                                <button className="btn-deploy"><img src={deploy}/>Visualizar</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="project">
                            <img src={projectThree}/>
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