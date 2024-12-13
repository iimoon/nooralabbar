import React from "react";
import Navbar from "../Components/Navbar";
import styles from "./styles/about.module.css";
import alabbarFmLogo from "../assets/logos/alabbarfm.png"
import CTASection from "../Components/CTASection";
import Footer from "../Components/Footer";
const About = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.mainContainer}>
        <h1 id={styles.aboutHeader}>About Us</h1>
        <h1 id={styles.aboutSubHeader}>Our Story</h1>
        <p id={styles.para}>
          At Al Abbar FM Group, we’ve built a reputation for excellence with
          over two decades of experience in the industry. From humble
          beginnings, we have grown into a trusted name in facilities
          management, building maintenance, demolition, and more. Our passion
          lies in delivering high-quality services that meet and exceed client
          expectations.
        </p>
        <h1 id={styles.aboutSubHeader}>Our Mission</h1>
        <p id={styles.para}>
          To provide innovative, reliable, and sustainable solutions that
          enhance living and working environments while building long-lasting
          partnerships with our clients.
        </p>
        <img src={alabbarFmLogo} alt="alAbbarFmLogo"/>
        <h1 id={styles.aboutSubHeader}>Our Divisions</h1>
        <div className={styles.divisions}>
            <p id={styles.lblue}>Al Abbar Cleaning Services LLC</p>
            <p id={styles.dblue}>Al Abbar Building Maintenance LLC</p>
            <p id={styles.red}>Noor Al Abbar Trading</p>
            <p id={styles.green}>Crystal House Building Cleaning</p>
            <p id={styles.dpurple}>Al Waqar Demolition</p>
            <p id={styles.purple}>DS Wrecking and Demolition Works</p>
        </div>
      </div>
      <div className={styles.CTASection}>
        <CTASection/>
      </div>
      <div className={styles.footer}>
        <Footer/>
      </div>
    </div>
  );
};

export default About;
