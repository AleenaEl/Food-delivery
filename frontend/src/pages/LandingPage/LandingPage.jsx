import { useEffect } from "react";
import "./LandingPage.css";
// import React from 'react'
import tomato from "../../assets/landing/tomato.gif";
import { useNavigate } from "react-router-dom";
import AppDownload from "../../components/AppDownload/AppDownload";

function LandingPage() {
    const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      const heroFish = document.querySelector(".hero__fish");
      const heroMoon = document.querySelector(".hero__moon");
      const heroContent = document.querySelector(".hero__content");

      heroMoon.style.transform = `translateY(${window.scrollY / 1.35}px)`;
      heroContent.style.transform = `translateY(${window.scrollY / 2}px)`;
      heroFish.style.transform = `translateY(-${window.scrollY / 2}px)`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  
    
   
  return (
    <>
      <div className="hero">
        <div className="hero-overlay"></div>
        <img src={tomato} alt="" className="hero__moon" />
        <div className="hero__content">
          <h1>Tomato</h1>

          <p>From kitchen to doorstep, taste the difference</p>
        </div>

        <button
          onClick={()=>navigate('/home')}
          className="hero__fish btn btn-outline-light"
        >
          <i className="fa-solid fa-arrow-right-to-bracket"></i>
          {/* <img src={fish} alt="" className="hero__fish" onClick={clik}/> */}
        </button>
      </div>
      <article>
        <h1>Article title</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dicta
          dolor animi quis in, aperiam nesciunt nulla possimus velit, omnis aut
          quia accusantium, sed nemo. Saepe praesentium odit quisquam iure.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          molestias explicabo sunt, alias minus quidem dolor voluptatibus
          distinctio doloribus repellendus! At distinctio in nam eos? Tempora
          quibusdam a hic odit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Vel asperiores quaerat voluptate ipsum alias quos
          dolore, cupiditate sint pariatur omnis, adipisci dolor, in
          consequuntur aliquam suscipit minus rem. Error, atque!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          molestias explicabo sunt, alias minus quidem dolor voluptatibus
          distinctio doloribus repellendus! At distinctio in nam eos? Tempora
          quibusdam a hic odit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Vel asperiores quaerat voluptate ipsum alias quos
          dolore, cupiditate sint pariatur omnis, adipisci dolor, in
          consequuntur aliquam suscipit minus rem. Error, atque!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          molestias explicabo sunt, alias minus quidem dolor voluptatibus
          distinctio doloribus repellendus! At distinctio in nam eos? Tempora
          quibusdam a hic odit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Vel asperiores quaerat voluptate ipsum alias quos
          dolore, cupiditate sint pariatur omnis, adipisci dolor, in
          consequuntur aliquam suscipit minus rem. Error, atque!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          molestias explicabo sunt, alias minus quidem dolor voluptatibus
          distinctio doloribus repellendus! At distinctio in nam eos? Tempora
          quibusdam a hic odit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Vel asperiores quaerat voluptate ipsum alias quos
          dolore, cupiditate sint pariatur omnis, adipisci dolor, in
          consequuntur aliquam suscipit minus rem. Error, atque!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          molestias explicabo sunt, alias minus quidem dolor voluptatibus
          distinctio doloribus repellendus! At distinctio in nam eos? Tempora
          quibusdam a hic odit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Vel asperiores quaerat voluptate ipsum alias quos
          dolore, cupiditate sint pariatur omnis, adipisci dolor, in
          consequuntur aliquam suscipit minus rem. Error, atque!
        </p>
          </article>
          <AppDownload/>
    </>
  );
}

export default LandingPage;
