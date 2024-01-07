/* eslint-disable react/prop-types */
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import "./jorney.css"
import { Cicle } from "../cicle/cicle";

import mage from "../../assets/imagens/heroImgs/perfil.jpg"
import loja_8 from "../../assets/imagens/cardsImgs/loja-8-bits.jpeg"


const ParallaxSection = (props) => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"]
    });

    /* variaveis para o background de encaixe */
    const backgrounds1y = useTransform(scrollYProgress, [0, 0.3, 0.35, 0.5, 0.7, 1], ["200%", "100%", "100%", "100%", "100%", "200%"]);
    const backgrounds2y = useTransform(scrollYProgress, [0, 0.3, 0.35, 0.5, 0.7, 1], ["200%", "100%", "100%", "100%", "100%", "200%"]);
    const backgrounds3t = useTransform(scrollYProgress, [0, 0.3, 0.35, 0.5, 0.7, 1], ["-57%", "-0%", "-0%", "-0%", "-0%", "-57%"])

    /* variaveis para o background geral */
    const background1y = useTransform(scrollYProgress, [0, 0.3, 0.35, 0.5, 0.7, 1], ["200%", "100%", "0%", "0%", "0%", "200%"]);
    const background2y = useTransform(scrollYProgress, [0, 0.3, 0.4, 0.55, 0.7, 1], ["150%", "150%", "0%", "0%", "0%", "250%"]);
    const background3y = useTransform(scrollYProgress, [0, 0.3, 0.50, 0.6, 0.7, 1], ["150%", "150%", "0%", "0%", "70%", "250%"]);


    const showcard = useTransform(scrollYProgress, [0, 0.2, 0.21, 0.75, 0.76, 1], [0 , 0, 5, 5, 0 , 0])

    return (
        <motion.div className={`parallax-container parallax${props.number}`} ref={ref}>
            <motion.div className="card" style={{zIndex : showcard}}>
                {props.card}
            </motion.div>

            <div className="center-link" id={props.section} >
                <div id={`${props.section}s`} >

                </div>
            </div>

            {props.type == "around" ? <motion.div className="parallax-img parallax-img1" id={`parallax${props.number}-img1`} style={{ width: backgrounds1y, height: backgrounds2y, left : backgrounds3t, top : backgrounds3t }} /> : <motion.div className="parallax-img parallax-img1" id={`parallax${props.number}-img1`} style={{ y: background1y}} />}
            <motion.div className="parallax-img parallax-img2" id={`parallax${props.number}-img2`} style={{ y: background2y }} />
            <motion.div className="parallax-img parallax-img3" id={`parallax${props.number}-img3`} style={{ y: background3y}} />
        </motion.div>
    );
};

export const Jorney = () => {
    return (
        <motion.div className="jorney-container">

            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item"><a href="#hero" className="nav-link">Home</a></li>
                    <li className="nav-item"><a href="#abouts" className="nav-link">Sobre</a></li>
                    <li className="nav-item"><a href="#projectss" className="nav-link">Projetos</a></li>
                    <li className="nav-item"><a href="#contacts" className="nav-link">Contato</a></li>
                </ul>
            </nav>

            <div className="hero" id="hero">
                <div className="hero-descript">
                    <div className="texts">
                        <h1>Bem vindo ao meu portifolio</h1>
                        <h3>Desenvolvedor front-end</h3>
                        <p>Eduardo Santos</p>
                    </div>
                    <div className="scrollAnimation">
                        <h3>Arraste para baixo</h3>
                        <div className="scroll">
                        <div className="scrollBall"></div>
                    </div>
                    </div>
                </div>
                <div className="hero-img">
                    <div className="hero-photo">
                        <img src={mage} className="photo" alt="" />
                    </div>

                </div>
            </ div>

            <ParallaxSection
            number="1"
            type="around"
            section="about"
            card={<motion.div className="card-content" id="about">
                    <div className="about-text">
                    <h1>Sobre</h1>
                    <p>
                        Meu nome é Eduardo e estou começando minha jornada como desenvolvedor. Tenho conhecimentos em Python, CSS, HTML, JavaScript e React. Estou muito entusiasmado em aprender e crescer na área de desenvolvimento web.
                    </p>
                    <p>
                        Estou em busca de oportunidades para aplicar e expandir meus conhecimentos. Adoro criar coisas novas e resolver desafios por meio da programação.
                    </p>
                    <p>
                        Além de desenvolvimento front-end crio jogos digitais como hobby
                    </p>

                    <a href ="https://drive.google.com/file/d/1XBoqLZFIN1tmrZZ0FxLa_euJoIo6EkeI/view?usp=drive_link"  > Visualizar currículo </a>  
                    </div>
                </motion.div>}
            ></ParallaxSection>
            
            <ParallaxSection
            type="bottom"
            number="2"
            section="projects"
            card={<motion.div className="card-content" id="projects">
                <h1 className="title">Projetos</h1>
                <div className="all-projects">
                    <div className="project">
                        <h1 className="projectTitle">Loja 8 bits</h1>
                        <a href="https://edson233.github.io/projeto_loja_8_bits" target="_blank" rel="noopener noreferrer" className="projectLink">
                        <img src={loja_8} alt="" className="projectImg" /></a>
                    </div>
                </div>
                </motion.div>}
            ></ParallaxSection>

            <ParallaxSection
            type="bottom"
            number="4"
            section="contact"
            card={<motion.div className="card-content" id="contact">
                <form action="https://formspree.io/f/mzbnpkaj" method="post" Redirect="http://localhost:5173" >
                    <h1 id="contact-label">Entre em contato</h1>
                    <div className="upper">
                        <input type="text" id="contact-name" placeholder="Nome" name="name" required />
                        <input type="email" id="contact-email" placeholder="Email" name="_replyto" required />
                    </div>
                    <input type="text" id="contact-subject" placeholder="Asunto" name="_subject" required />
                    <input type="hidden" name="_next" value="http://localhost:5173l" />
                    <textarea name="description" id="contact-text" cols="30" rows="10" placeholder="Mensagem"></textarea>
                    <div className="contact-links">
                        <a href="https://github.com/Edson233" target="_blank" className="contact-link">Github </a>
                        <input type="submit" id="contact-submit" value="Enviar" />
                        <a href="https://www.linkedin.com/in/eduardo-santos-846970232/" target="_blank" className="contact-link">Linkedin </a>
                    </div>
                </form>
                </motion.div>}
            ></ParallaxSection>

            <footer className="footer">
            <a href="https://www.linkedin.com/in/eduardo-santos-846970232/" target="_blank" className="footer-link">Linkedin </a>
            <h2>Eduardo Santos Feitosa</h2>
            <a href="https://github.com/Edson233" target="_blank" className="footer-link">Github </a>

            </footer>

            <Cicle></Cicle>

        </motion.div>
    )
}
