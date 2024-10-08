import {
  AffinityLogo,
  CSharpLogo,
  D3Logo,
  FigmaIcon, HighchartsLogo,
  MiroIcon,
  PowerBiLogo,
  PythonLogo,
  TypescriptLogo
} from "./icons"
import { FaGithub, FaLinkedinIn, FaPhone, FaUnity } from "react-icons/fa6"
import { IoIosMail } from "react-icons/io"
import { PiDatabaseFill } from "react-icons/pi"
import { SiArcgis, SiGodotengine, SiJira, SiUnrealengine } from "react-icons/si"
import { VscAzureDevops } from "react-icons/vsc"
import { Background } from "./background";
import ResumePDF from "./Ben Kelly - Software Engineer and Games Developer.pdf"
import { BsDownload } from "react-icons/bs";

function App() {
  const contacts = (
    <div className="contacts text-sm">
      <h2 className="mb-sm">Contacts</h2>
      <div className="gap-sm items-center hidden print:flex">
        <FaPhone/>
        <a href="tel:+61450580772">0450 580 772</a>
      </div>
      <div className="flex gap-sm items-center">
        <IoIosMail/>
        <a href={links.email} target="_blank">
          benkellysoftware@gmail.com
        </a>
      </div>
      <div className="flex gap-sm items-center">
        <FaGithub/>
        <a href={links.github}>github.com/benkellysoftware</a>
      </div>
      <div className="flex gap-sm items-center">
        <FaLinkedinIn/>
        <a href={links.linkedin} target="_blank">linkedin.com/in/ben-kelly-software</a>
      </div>
    </div>
  )

  return <>
    <Background/>
    <div className="w-screen min-h-screen p-md flex flex-col justify-center items-center md:p-lg print:p-0">
      <div className="bg-white z-10 flex flex-col text-primary w-full shadow-2xl print:shadow-none md:aspect-a4 md:w-page print:w-screen print:h-screen">
        <div className="md:grid print:grid grid-cols-5 flex-grow">
          <div className="col-span-3 p-lg">
            <div className="header">
              <div className="flex justify-between items-center">
                <h1>Ben Kelly</h1>
                <a href={ResumePDF} download className="print:hidden">
                  <button className="download-pdf"><span>Download PDF</span><BsDownload style={{minWidth: 16, height: 16}} /></button>
                </a>
              </div>
              <div className="text-lg">
                I'm an engineer and designer with 8+ years working in start-ups and consultancy and a passion for building top‑notch user experiences
              </div>
            </div>
            <div className="md:hidden print:hidden mt-md">{contacts}</div>
            <div className="work-experience mt-md">
              <h2>Work Experience</h2>

              <div className="flex justify-between flex-wrap">
                <h3>McKinsey Build / Quantum Black</h3>
                <span className="text-tertiary">2021 - Present</span>
              </div>
              <ul>
                <li>
                  Led development and client implementation of the react component library for the Quantum Black Design
                  System
                </li>
                <li>
                  Deployed production code in multiple industries such as finance, insurance, agriculture, and retail
                </li>
                <li>
                  Worked in cross functional teams of engineers, designers, and product owners to
                  deliver market ready solutions in 2-6 months
                </li>
              </ul>
              <hr/>
              <div className="flex justify-between flex-wrap">
                <h3>Caps Collective</h3>
                <span className="text-tertiary">2019 - Present</span>
              </div>
              <ul>
                <li>
                  {"Co-founded "}
                  <a href={links.capsCollective} target="_blank">Caps Collective</a>
                  {", managing a part-time team creating open-source games and software"}
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
                  {" and nominee for the "}
                  <a href={links.agda} target="_blank">
                    Australian Game Development Awards
                  </a>
                  {" for Excellence In Emerging Games"}
                </li>
                <li>
                  {"Released the short-form narrative game "}
                  <a href={links.hyet} target="_blank">
                    Have You Eaten Yet?
                  </a>
                  {" in collaboration with "}
                  <a href={links.hyetDigital} target="_blank">
                    4A Digital
                  </a>
                </li>
              </ul>
              <hr/>
              <div className="flex justify-between flex-wrap">
              <h3>Hypothesis</h3>
                <span className="text-tertiary">2020 - 2021</span>
              </div>
              <ul>
                <li>Simplified property development process for farmers by developing mapping software and codifying
                  government legislation
                </li>
                <li>Developed team agility analytics tools for client development</li>
              </ul>
              <hr/>
              <div className="flex justify-between flex-wrap">
                <h3>Impulse Screen Media</h3>
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
            <div className="education mt-md">
              <h2>Education</h2>
              <div className="flex justify-between flex-wrap">
                <h3>Bachelor of Software Engineering</h3>
                <span className="text-tertiary">2016 - 2021</span>
              </div>
              <ul>
                <li>Graduated first class honours from the University of Technology Sydney</li>
                <li>Thesis on agile project management in user experience led projects</li>
                <li>President of the UTS Programmers Society 2019-2020</li>
                <li>Head of Publications for the UTS Engineering Society 2018</li>
                <li>WiseTech Global Senior Programming Prize 2018 for C Fundamentals</li>
              </ul>
            </div>
          </div>
          <div className="sidebar col-span-2 text-white p-lg">
            <div className="hidden md:block print:block">{contacts}</div>
            <div className="skills md:mt-sm print:mt-sm">
              <h2>Skills</h2>
              <h3>Game Engines</h3>
              <ul>
                <li>Design and development of games, edutainment, and logistics software across multiple engines</li>
              </ul>
              <div className="grid grid-cols-3 justify-center gap-md mt-md text-xs">
                <div className="flex flex-col items-center">
                  <FaUnity className="h-lg w-lg"/>
                  <span>Unity</span>
                </div>
                <div className="flex flex-col items-center">
                  <SiUnrealengine className="h-lg w-lg"/>
                  <span>Unreal</span>
                </div>
                <div className="flex flex-col items-center">
                  <SiGodotengine className="h-lg w-lg" fill="rgb(88,138,187)"/>
                  <span className="text-center">Godot</span>
                </div>
              </div>
              <hr/>
              <h3>Experience Design</h3>
              <ul>
                <li>Development and usage of design systems</li>
                <li>Branding and marketing alignment of white-labeled products</li>
                <li>Persona creation, customer research, and user story mapping</li>
              </ul>
              <div className="grid grid-cols-3 justify-center gap-md mt-md text-xs">
                <div className="flex flex-col items-center">
                  <FigmaIcon className="h-lg"/>
                  <span>Figma</span>
                </div>
                <div className="flex flex-col items-center">
                  <MiroIcon className="h-lg"/>
                  <span>Miro</span>
                </div>
                <div className="flex flex-col items-center">
                  <AffinityLogo className="h-lg"/>
                  <span className="text-center">Affinity Design</span>
                </div>
              </div>
              <hr/>
              <h3>Agile Project Management</h3>
              <ul>
                <li>Facilitation of agile ceremonies such as retros, backlog refinement, and stand-ups</li>
                <li>Administration and configuration of project management tools</li>
                <div className="grid grid-cols-3 justify-center gap-md mt-md text-xs">
                  <div className="flex flex-col items-center">
                    <SiJira className="h-lg w-lg" fill="#0082FF"/>
                    <span>Jira</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <VscAzureDevops className="h-lg w-lg" fill="#008AD7"/>
                    <span>Azure DevOps</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <FaGithub className="h-lg w-lg"/>
                    <span className="text-center">Github</span>
                  </div>
                </div>
              </ul>
              <hr/>
              <h3>Full Stack Engineering</h3>
              <ul>
                <li>Flexible solutions such as web apps, APIs, and internal tooling</li>
                <li>Cloud deployment with AWS and Azure</li>
              </ul>
              <div className="grid grid-cols-4 justify-center gap-md mt-md text-xs">
                <div className="flex flex-col items-center">
                  <TypescriptLogo className="h-lg"/>
                  <span>Typescript</span>
                </div>
                <div className="flex flex-col items-center">
                  <CSharpLogo className="h-lg"/>
                  <span>C#</span>
                </div>
                <div className="flex flex-col items-center">
                  <PythonLogo className="h-lg"/>
                  <span className="text-center">Python</span>
                </div>
                <div className="flex flex-col items-center">
                  <PiDatabaseFill className="w-lg h-lg"/>
                  <span className="text-center">Databases</span>
                </div>
              </div>
              <hr/>
              <h3>Analytics and Data Visualisation</h3>
              <ul>
                <li>Creation of data analytics dashboards</li>
                <li>Building bespoke charts and mapping software using spatial data APIs</li>
              </ul>
              <div className="grid grid-cols-4 justify-center gap-md mt-md text-xs">
                <div className="flex flex-col items-center">
                  <PowerBiLogo className="h-lg"/>
                  <span>PowerBI</span>
                </div>
                <div className="flex flex-col items-center">
                  <D3Logo className="h-lg"/>
                  <span>D3</span>
                </div>
                <div className="flex flex-col items-center">
                  <HighchartsLogo className="h-lg"/>
                  <span className="text-center">Highcharts</span>
                </div>
                <div className="flex flex-col items-center">
                  <SiArcgis className="h-lg w-lg" fill="rgb(75,130,230)"/>
                  <span className="text-center">ArcGIS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}

const links = {
  email: "mailto:benkellysoftware@gmail.com",
  github: "https://github.com/BenKellySoftware",
  linkedin: "https://linkedin.com/in/ben-kelly-software",
  fantasyTown: "https://store.steampowered.com/app/1524530/Fantasy_Town_Regional_Manager/",
  capsCollective: "https://capscollective.com",
  agda: "https://agdas.com.au/2022-finalists-announced/",
  kotaku: "https://kotaku.com.au/2021/12/best-australian-games-2021/",
  hyet: "https://capscollective.itch.io/have-you-eaten-yet",
  hyetDigital: "https://4a.com.au/digital/"
}

export default App
