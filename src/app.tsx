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
import { MdSmartDisplay } from "react-icons/md";

function App() {
  const contacts = (
    <div className="contacts text-sm">
      <h2>Contacts</h2>
      <div className="flex justify-between">
        <div className="flex gap-sm items-center">
          <IoIosMail/>
          <a href={links.email} target="_blank">
            benkellysoftware@gmail.com
          </a>
        </div>
        <div className="gap-sm items-center flex">
          <FaPhone/>
          <a href="tel:+61450580772">0450 580 772</a>
        </div>
        <div className="flex gap-sm items-center">
          <FaLinkedinIn/>
          <a href={links.linkedin} target="_blank">linkedin.com/in/ben-kelly-software</a>
        </div>
      </div>
    </div>
  )

  return <>
    <Background/>
    <div className="w-screen min-h-screen p-md flex flex-col justify-center items-center md:p-lg print:p-0">
      <div className="bg-white z-10 flex flex-col text-primary w-full shadow-2xl print:shadow-none md:aspect-a4 md:w-page print:w-screen">
        <div className="flex-grow">
          <div className="p-lg">
            <div className="header">
              <div className="flex justify-between items-center">
                <h1>Ben Kelly</h1>
                <div className="flex gap-sm print:hidden">
                  <a href={links.portfolio} download>
                    <button className="expand-btn portfolio-btn">
                      <span>Video Portfolio</span>
                      <MdSmartDisplay style={{minWidth: 16, height: 16}} />
                    </button>
                  </a>
                  <a href={ResumePDF} download>
                    <button className="expand-btn download-pdf">
                      <span>Download PDF</span>
                      <BsDownload style={{minWidth: 16, height: 16}} />
                    </button>
                  </a>
                </div>
              </div>
              <div className="text-lg">I am a freelance software engineer and game designer looking for casual work that will allow me to engage with my community</div>
            </div>
            <br/>
            {contacts}
            <div className="work-experience mt-md">
              <h2>Work Experience</h2>
              <div className="flex justify-between flex-wrap">
                <h3>Caps Collective</h3>
                <span className="text-tertiary">2019 - Present</span>
              </div>
              <ul>
                <li>
                  {"Co-founder of "}
                  <a href={links.capsCollective} target="_blank">
                    Caps Collective
                  </a>
                  {", a brand for the creation of games and interactive software"}</li>
                <li>Management of teams of 3-8 across multiple ongoing projects</li>
                <li>Freelance business development finding new clients</li>
              </ul>
              <hr/>
              <div className="flex justify-between flex-wrap">
                <h3>NSW Department of Primary Industries</h3>
                <span className="text-tertiary">2024 - 2025</span>
              </div>
              <ul>
                <li>
                  {"Designed and created mapping and form software for an agricultural development tool "}
                  <a href={links.myFarmPlanner} target="_blank">
                    myFarmPlanner
                  </a>
                </li>
                <li>Conducting outreach interviews with farmers in regional NSW</li>
                <li>myFarmPlanner won the Planning Institute of Australia's 2025 Award for Planning Excellence</li>
              </ul>
              <hr/>
              <div className="flex justify-between flex-wrap">
                <h3>McKinsey Build / Quantum Black</h3>
                <span className="text-tertiary">2021 - 2024</span>
              </div>
              <ul>
                <li>
                  Worked as a software developer in cross functional teams of engineers, designers, and product owners to
                  deliver market ready solutions in 3-6 months
                </li>
                <li>
                  Deployed production code in multiple industries such as finance, insurance, agriculture, and retail
                </li>
                <li>Performed data cleanup and analysis on large databases</li>
              </ul>
              <hr/>
              <div className="flex justify-between flex-wrap">
              <h3>Hypothesis</h3>
                <span className="text-tertiary">2020 - 2021</span>
              </div>
              <ul>
                <li>Built web forms and mapping tools for our clients including NSW DPIRD and Service NSW</li>
                <li>Creation and usage of internal survey tools to conduct team assessments for our clients based in PowerBI</li>
              </ul>
              <hr/>
              <div className="flex justify-between flex-wrap">
                <h3>Impulse Screen Media</h3>
                <span className="text-tertiary">2016 - 2018</span>
              </div>
              <ul>
                <li>Full-stack software engineer for an advertising analytics platform</li>
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
                <li>Graduated with first class honours from the University of Technology Sydney</li>
                <li>President of the UTS Programmers Society 2019 & 2020, hosting workshops and community events with up to 150 attendees, including budgeting and securing grants</li>
                <li>Head of Publications for the UTS Engineering Society 2018, creating outreach material for students</li>
                <li>WiseTech Global Senior Programming Prize for being the top in class for C Fundamentals 2018</li>
                <li>UTS Dean's list 2020 & 2021 for outstanding student performance based on academic achievement</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
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
  myFarmPlanner: "https://www.nsw.gov.au/ministerial-releases/new-planning-tool-to-fast-track-da-process-when-building-key-on-farm-infrastructure"
}

export default App
