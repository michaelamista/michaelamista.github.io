import roomfinderImage from "../../images/roomfinder-project.jpg";
import gameometryImage from "../../images/gameometry-project.png";
import wimImage from "../../images/wim-project.png";
import cpsImage from "../../images/cps-project.png";
import atcnsImage from "../../images/atcns-project.jpg";
import wnmaImage from "../../images/wnma-project.png";
import dochubImage from "../../images/dochub-project.png";

export const featuredProject = {
  title: "RoomFinder",
  description:
    "The project consists of developing RoomFinder, a mobile application that respects all the common principles of mobile design and usability to ease the user experience. The app was developed using Flutter and provides a way for students to search for house rentals in Italy.",
  href: "https://github.com/michaelamista/MPM-Project",
  image: roomfinderImage,
  imageAlt: "RoomFinder preview"
};

export const projects = [
  {
    title: "Gameometry",
    href: "https://github.com/TechWebProject/Gameometry-webSite",
    image: gameometryImage,
    imageAlt: "Gameometry preview",
    description:
      "Development of a website related to the gaming world, covering the latest releases, news, reviews from critics and the public, and much more. The website was developed using key web technologies such as HTML, CSS, JavaScript, and PHP."
  },
  {
    title: "Web Usability Analysis",
    href: "https://github.com/michaelamista/WIM-Project",
    image: wimImage,
    imageAlt: "Web Usability Analysis preview",
    description:
      "The aim of this project is to study the usability of a real website to understand if it respects the usability standard. The analysed website is Rotten Tomatoes."
  },
  {
    title: "BusOff attack simulation",
    href: "https://github.com/michaelamista/CPS-Mid-term-Project",
    image: cpsImage,
    imageAlt: "BusOff attack simulation preview",
    description:
      "The aim of this project is to simulate a Bus-Off attack on a simple CAN (Controller Area Network) bus, showcasing the dynamics of error handling and frame arbitration in a vehicle communication system. The attack is aimed at forcing a victim ECU (Electronic Control Unit) into a bus-off state, rendering it incapable of communication."
  },
  {
    title: "Bluetooth Authentication",
    href: "https://github.com/michaelamista/ATCNS-Project",
    image: atcnsImage,
    imageAlt: "Bluetooth Authentication overview",
    description:
      "The project consists in studying a PLA (Physical Layer Authentication) approach effectiveness in a Bluetooth channel. This has been done by implementing an effective decoding algorithm able to classify messages as legitimate or non legitimate, authenticating so the sender."
  },
  {
    title: "A study on edge computing",
    href: "https://github.com/michaelamista/WNMA-Project",
    image: wnmaImage,
    imageAlt: "Edge Computing overview",
    description:
      "The survey explores the role of edge computing in addressing challenges associated with traditional cloud-based IoT architectures, such as high latency, bandwidth constraints, and scalability limitations."
  },
  {
    title: "DocHub Startup",
    href: "https://github.com/michaelamista/STARTUP-IN-ICT-Project",
    image: dochubImage,
    imageAlt: "DocHub project overview",
    description:
      "The project consists in launching DocHub, a startup with the aim of simplifying the retrieval of digital documents in Italy by developing a platform that collects in one place all the digital documents of a person, simplifying the daily life of people."
  }
];
