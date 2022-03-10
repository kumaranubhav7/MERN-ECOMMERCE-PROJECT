import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
    const visitInstagram = () => {
        window.location = "https://instagram.com/kumaranubhav7";
    };
    return (
        <div className="aboutSection">
            <div></div>
            <div className="aboutSectionGradient"></div>
            <div className="aboutSectionContainer">
                <Typography component="h1">About Us</Typography>

                <div>
                    <div>
                        <Avatar
                            style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
                            src="../../images/1.jpg"
                            alt="Founder"
                        />
                        <Typography>Anubhav Kumar</Typography>
                        <Button onClick={visitInstagram} color="primary">
                            Visit Instagram
                        </Button>
                        <span>
                            This is my first E-Commerce website -- "FLIPCHART" -- using MERN Stack.
                        </span>
                    </div>
                    <div className="aboutSectionContainer2">
                        <Typography component="h2">Our Brands</Typography>
                        <a
                            href="https://www.youtube.com/channel/UCabb8qhUaBHz-0h-MJHR4Bw/featured"
                            target="blank"
                        >
                            <YouTubeIcon className="youtubeSvgIcon" />
                        </a>

                        <a href="https://instagram.com/kumaranubhav7" target="blank">
                            <InstagramIcon className="instagramSvgIcon" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
