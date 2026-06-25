import ResumePDF from "./Ben Kelly - Software Engineer and Games Developer.pdf"
import { Background } from "./background"
import {
  AffinityLogo,
  CSharpLogo,
  D3Logo,
  FigmaIcon,
  HighchartsLogo,
  MiroIcon,
  PowerBiLogo,
  PythonLogo,
  TypescriptLogo,
} from "./icons"
import { BiLogoAws } from "react-icons/bi"
import { BsDownload } from "react-icons/bs"
import { FaGithub, FaLinkedinIn, FaPhone, FaUnity } from "react-icons/fa6"
import { IoIosMail } from "react-icons/io"
import { MdSmartDisplay } from "react-icons/md"
import { SiArcgis, SiGodotengine, SiJira, SiUnrealengine } from "react-icons/si"
import { VscAzure, VscAzureDevops } from "react-icons/vsc"

function App() {
  const contacts = (
    <div className="contacts text-sm">
      <h2>Contacts</h2>
      <div className="flex justify-between">
        <div className="gap-sm items-center hidden print:flex">
          <FaPhone />
          <a href="tel:+61450580772">0450 580 772</a>
        </div>
        <div className="flex gap-sm items-center">
          <IoIosMail />
          <a href={links.email} target="_blank">
            benkellysoftware@gmail.com
          </a>
        </div>
        <div className="flex gap-sm items-center">
          <FaLinkedinIn />
          <a href={links.linkedin} target="_blank">
            linkedin.com/in/ben-kelly-software
          </a>
        </div>
        <div className="flex gap-sm items-center">
          <FaGithub />
          <a href={links.github}>github.com/benkellysoftware</a>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <Background />
      <div className="w-screen min-h-screen p-md flex flex-col justify-center items-center md:p-lg print:p-0">
        <div className="bg-white z-10 flex flex-col text-primary w-full shadow-2xl print:shadow-none md:aspect-a4 md:w-page print:w-screen">
          <div className="flex-grow">
            <div className="p-lg print:pb-md">
              <div className="header">
                <div className="flex justify-between items-center">
                  <h1>Ben Kelly</h1>
                  <div className="flex gap-sm print:hidden">
                    <a href={links.portfolio} download>
                      <button className="expand-btn portfolio-btn">
                        <span>Video Portfolio</span>
                        <MdSmartDisplay style={{ minWidth: 16, height: 16 }} />
                      </button>
                    </a>
                    <a href={ResumePDF} download>
                      <button className="expand-btn download-pdf">
                        <span>Download PDF</span>
                        <BsDownload style={{ minWidth: 16, height: 16 }} />
                      </button>
                    </a>
                  </div>
                </div>
                <div className="text-lg">
                  I'm an engineer and designer with 10+ years working in software and games development, with a passion
                  for building useful and unique experiences
                </div>
              </div>
              <br />
              {contacts}
              <div className="work-experience mt-md">
                <h2>Work Experience</h2>
                <div className="flex justify-between flex-wrap">
                  <h3>Caps Collective - Self Employed</h3>
                  <span className="text-tertiary">2019 - Present</span>
                </div>
                <ul>
                  <li>
                    {"Co-founder of "}
                    <a href={links.capsCollective} target="_blank">
                      Caps Collective
                    </a>
                    {", managing teams of 3-8 creating games and software for contracts and commercial release"}
                  </li>
                  <li>
                    {"Led development and design on the 3D city builder "}
                    <a href={links.fantasyTown} target="_blank">
                      Fantasy Town Regional Manager
                    </a>
                    {", featured in "}
                    <a href={links.kotaku} target="_blank">
                      Kotaku AU’s Top 10 Australian Games
                    </a>
                    {" and nominated for the "}
                    <a href={links.agda} target="_blank">
                      Australian Game Development Awards
                    </a>
                    {" for Excellence In Emerging Games"}
                  </li>
                  <li>
                    {"Lead Unity developer for "}
                    <a href={links.hyet} target="_blank">
                      Have You Eaten Yet?
                    </a>
                    {", in collaboration with "}
                    <a href={links.hyetDigital} target="_blank">
                      4A Center for Contemporary Asian Art
                    </a>
                  </li>
                  <li>
                    {"Unreal developer for "}
                    <a href={links.smileBaby} target="_blank">
                      Smile Baby Interactive Experience
                    </a>
                    {", an interactive music album"}
                  </li>
                </ul>
                <hr />
                <div className="flex justify-between flex-wrap">
                  <h3>Big Sand - Technical Designer</h3>
                  <span className="text-tertiary">2025 - Present</span>
                </div>
                <ul>
                  <li>
                    {"Unreal development for "}
                    <a href={links.bigSand} target="_blank">
                      Big Sand
                    </a>
                    {", a virtual band utilising audio and motion capture technology for their performances"}
                  </li>
                  <li>
                    {
                      "Developed networking solutions to connect audio, visual, and OSC control devices across the venue"
                    }
                  </li>
                  <li>
                    {
                      "Lead developer on the Big Sand video game, utilising Unreal Metasounds to create responsive and dynamic audio"
                    }
                  </li>
                </ul>
                <hr />
                <div className="flex justify-between flex-wrap">
                  <h3>NSW Department of Primary Industries - Senior Software Engineer</h3>
                  <span className="text-tertiary">2024 - 2025</span>
                </div>
                <ul>
                  <li>
                    {"Consulting senior engineer for "}
                    <a href={links.myFarmPlanner} target="_blank">
                      myFarmPlanner
                    </a>
                    {", a form and mapping tool for primary producers, from beta to release"}
                  </li>
                  <li>
                    myFarmPlanner utilises ArcGIS with a NodeJS API hosted on AWS with external government APIs for
                    interactive drawing and realtime feedback
                  </li>
                  <li>Conducted on-location outreach interviews and demonstrations with farmers in regional NSW</li>
                  <li>Winner of the Planning Institute of Australia's 2025 Award for Planning Excellence</li>
                </ul>
                <hr />
                <div className="flex justify-between flex-wrap">
                  <h3>McKinsey Build / Quantum Black - Senior Digital Analyst</h3>
                  <span className="text-tertiary">2021 - 2024</span>
                </div>
                <ul>
                  <li>
                    Worked as a software developer in cross functional teams of engineers, designers, and product owners
                  </li>
                  <li>
                    Deployed production code in multiple industries such as finance, agriculture, and retail in projects
                    ranging from 2-8 months
                  </li>
                  <li>
                    Led development and client implementation of the React component library for the Quantum Black
                    Design System
                  </li>
                </ul>
                <hr />
                <div className="flex justify-between flex-wrap">
                  <h3>Hypothesis - Software Engineer</h3>
                  <span className="text-tertiary">2020 - 2021</span>
                </div>
                <ul>
                  <li>Developed the beta release of myFarmPlannner for the NSW Department of Primary Industries</li>
                  <li>Developed team agility analytics data capture and visualisation tools with Highcharts and D3</li>
                </ul>
                <hr />
                <div className="flex justify-between flex-wrap">
                  <h3>Impulse Screen Media - Software Engineer</h3>
                  <span className="text-tertiary">2016 - 2018</span>
                </div>
                <ul>
                  <li>Full-stack software engineer for an advertising analytics platform</li>
                  <li>
                    Created custom video editing software built on FFmpeg for ad collection, enabling the company to
                    outsource the process
                  </li>
                  <li>On-site installation and configuration of servers for remote control</li>
                </ul>
              </div>
              <div className="page-break" />
              <div className="education mt-md">
                <h2>Education</h2>
                <div className="flex justify-between flex-wrap">
                  <h3>Bachelor of Software Engineering - University of Technology Sydney</h3>
                  <span className="text-tertiary">2016 - 2021</span>
                </div>
                <ul>
                  <li>
                    Bachelor of Engineering in Information and Communications Technology (Software), Diploma in
                    Professional Engineering Practice with First Class Honours
                  </li>
                  <li>President of the UTS Programmers Society 2019-2020</li>
                  {/*<li>Head of Publications for the UTS Engineering Society 2018</li>*/}
                  <li>UTS Dean's List 2020 & 2021 for outstanding student performance</li>
                  <li>WiseTech Global Senior Programming Prize 2018 for C Fundamentals</li>
                </ul>
              </div>
            </div>
            <div className="sidebar text-white p-lg print:pt-0">
              <div className="skills md:mt-sm print:mt-sm">
                <h2 className="mb-sm">Skills</h2>
                <h3>Full Stack Engineering</h3>
                <ul>
                  <li>
                    End to end development of solutions such as web apps, APIs, and internal tools. Usage of a wide
                    variety of frameworks including React, Node, .NET, FastAPI etc.
                  </li>
                  <li>Production cloud deployment with AWS and Azure, utilising Docker and CI/CD pipelines</li>
                </ul>
                <div className="skills-icons grid grid-cols-5 justify-center gap-md mt-md text-xs">
                  <div className="flex flex-col items-center">
                    <TypescriptLogo className="h-lg" />
                    <span>Typescript</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <CSharpLogo className="h-lg" />
                    <span>C#</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <PythonLogo className="h-lg" />
                    <span className="text-center">Python</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <BiLogoAws className="w-lg h-lg" />
                    <span className="text-center">AWS</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <VscAzure className="w-lg h-lg" />
                    <span className="text-center">Azure</span>
                  </div>
                </div>
                <hr />
                <h3>Experience Design</h3>
                <ul>
                  <li>
                    Creation of user interfaces for games and web, with a focus on accessibility and responsiveness
                  </li>
                  <li>
                    Development and usage of design systems, with branding and marketing alignment of white-labeled
                    products
                  </li>
                  <li>
                    Design discovery processes such as persona creation, customer research, and user story mapping
                  </li>
                </ul>
                <div className="skills-icons grid grid-cols-3 justify-center gap-md mt-md text-xs">
                  <div className="flex flex-col items-center">
                    <FigmaIcon className="h-lg" />
                    <span>Figma</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <MiroIcon className="h-lg" />
                    <span>Miro</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <AffinityLogo className="h-lg" />
                    <span className="text-center">Affinity Design</span>
                  </div>
                </div>
                <hr />
                <h3>Agile Project Management</h3>
                <ul>
                  <li>Facilitation of agile ceremonies such as retros, backlog refinement, and stand-ups</li>
                  <li>Administration and configuration of project management tools</li>
                  <div className="skills-icons grid grid-cols-3 justify-center gap-md mt-md text-xs">
                    <div className="flex flex-col items-center">
                      <SiJira className="h-lg w-lg" fill="#0082FF" />
                      <span>Jira</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <VscAzureDevops className="h-lg w-lg" fill="#008AD7" />
                      <span>Azure DevOps</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <FaGithub className="h-lg w-lg" />
                      <span className="text-center">Github</span>
                    </div>
                  </div>
                </ul>
                <hr />
                <h3>Analytics and Data Visualisation</h3>
                <ul>
                  <li>Creation of data analytics dashboards for internal and external use</li>
                  <li>Building bespoke charts and mapping software using spatial data APIs</li>
                </ul>
                <div className="skills-icons grid grid-cols-4 justify-center gap-md mt-md text-xs">
                  <div className="flex flex-col items-center">
                    <PowerBiLogo className="h-lg" />
                    <span>PowerBI</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <D3Logo className="h-lg" />
                    <span>D3</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <HighchartsLogo className="h-lg" />
                    <span className="text-center">Highcharts</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <SiArcgis className="h-lg w-lg" fill="rgb(75,130,230)" />
                    <span className="text-center">ArcGIS</span>
                  </div>
                </div>
                <hr />
                <h3>Game Engines and Realtime 3D Rendering</h3>
                <ul>
                  <li>
                    Design and development of games, live production, and logistics software across multiple engines
                  </li>
                </ul>
                <div className="skills-icons grid grid-cols-3 justify-center gap-md mt-md text-xs">
                  <div className="flex flex-col items-center">
                    <SiUnrealengine className="h-lg w-lg" />
                    <span>Unreal</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <FaUnity className="h-lg w-lg" />
                    <span>Unity</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <SiGodotengine className="h-lg w-lg" fill="rgb(88,138,187)" />
                    <span className="text-center">Godot</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const links = {
  portfolio: "https://www.youtube.com/playlist?list=PLY91QoioiXBDvCxbxd4nM3egtxvTJ1z5u",
  email: "mailto:benkellysoftware@gmail.com",
  github: "https://github.com/BenKellySoftware",
  linkedin: "https://linkedin.com/in/ben-kelly-software",
  fantasyTown: "https://store.steampowered.com/app/1524530/Fantasy_Town_Regional_Manager/",
  capsCollective: "https://capscollective.com",
  agda: "https://agdas.com.au/2022-finalists-announced/",
  kotaku: "https://kotaku.com.au/2021/12/best-australian-games-2021/",
  hyet: "https://capscollective.itch.io/have-you-eaten-yet",
  hyetDigital: "https://4a.com.au/digital/",
  bigSand: "https://bigSand.band",
  myFarmPlanner:
    "https://www.nsw.gov.au/ministerial-releases/new-planning-tool-to-fast-track-da-process-when-building-key-on-farm-infrastructure",
  smileBaby: "https://www.youtube.com/watch?v=UTTprfppg_w",
}

export default App
