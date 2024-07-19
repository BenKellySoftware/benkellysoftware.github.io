import { AffinityLogo, CSharpLogo, D3Logo, FigmaIcon, MiroIcon, PowerBiLogo, PythonLogo, TypescriptLogo } from "./icons"
import { FaGithub, FaPhone, FaUnity } from "react-icons/fa6"
import { IoIosMail } from "react-icons/io"
import { PiDatabaseFill } from "react-icons/pi"
import { SiArcgis, SiGodotengine, SiJira, SiUnrealengine } from "react-icons/si"
import { VscAzureDevops } from "react-icons/vsc"

function App() {
  const contacts = (
    <div className="contacts">
      <h2>Contacts</h2>
      <ul className="text-sm font-semibold">
        <li></li>
        <li className="flex gap-sm items-center">
          <IoIosMail />
          <a href={links.email} target="_blank">
            benkellysoftware@gmail.com
          </a>
        </li>
        <li className="flex gap-sm items-center">
          <FaGithub />
          <a href={links.github}>github.com/benkellysoftware</a>
        </li>
        <li className="flex gap-sm items-center">
          <FaPhone />
          <a href="tel:+61450580772">0450 580 772</a>
        </li>
      </ul>
      <hr />
    </div>
  )

  return (
    <div className="w-screen animated-background bg-gradient-to-r from-blue-500 via-blue-500 to-indigo-500 p-lg flex flex-col justify-center min-h-screen items-center">
      <div className="bg-white shadow-lg flex flex-col text-primary md:w-[840px] w-full md:aspect-a4">
        <div className="md:grid grid-cols-5 flex-grow">
          <div className="col-span-3 p-lg">
            <div className="header mb-lg">
              <h1>Ben Kelly</h1>
              <div className="text-lg">
                I am a software engineer and designer with 7+ years working in start-ups and consultancy. I have a
                passion for building top-notch user experiences.
              </div>
            </div>
            <div className="md:hidden">{contacts}</div>
            <div className="work-experience">
              <h2>Work Experience</h2>

              <div className="flex justify-between flex-wrap">
                <h3>McKinsey Build / Quantum Black</h3>
                <span>2021 - Present</span>
              </div>
              <ul>
                <li>Software engineer and user experience specialist</li>
                <li>
                  Digital product design and development for clients in the financial, insurance, government, and retail
                  sectors
                </li>
                <li>
                  Worked in cross functional teams of engineers, designers, product owners, and strategy consultants to
                  deliver in market solutions in under 6 months
                </li>
                <li>
                  Lead developer on the Quantum Black Design System, a react component library used for numerous
                  internal and client projects
                </li>
              </ul>
              <hr />
              <div className="flex justify-between flex-wrap">
                <h3>Hypothesis</h3>
                <span>2020 - 2021</span>
              </div>
              <ul>
                <li>Consultant for digital product development and capability uplift</li>
                <li>Acquired into McKinsey Build in April 2021</li>
              </ul>
              <hr />
              <div className="flex justify-between flex-wrap">
                <h3>Caps Collective</h3>
                <span>2019 - Present</span>
              </div>
              <ul>
                <li>Co-founder of Caps Collective, developing on open-source games</li>
                <li>
                  Released{" "}
                  <a href={links.fantasyTown} target="_blank">
                    Fantasy Town Regional Manager
                  </a>{" "}
                  on Steam in 2021
                </li>
                <li>
                  Featured in{" "}
                  <a href={links.kotaku} target="_blank">
                    Kotaku AU’s Top 10 Australian Games of 2021
                  </a>
                </li>
                <li>
                  Nominee for the 2022{" "}
                  <a href={links.agda} target="_blank">
                    Australian Game Development Awards
                  </a>{" "}
                  for Excellence In Emerging Games
                </li>
              </ul>
              <hr />
              <div className="flex justify-between flex-wrap">
                <h3>Impulse Screen Media</h3>
                <span>2016 - 2018</span>
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
            <hr />
            <div className="education">
              <h2>Education</h2>
              <div className="flex justify-between flex-wrap">
                <h3>University of Technology Sydney</h3>
                <span>2016 - 2021</span>
              </div>
              <ul>
                <li>
                  Graduated First Class Honours, Bachelor of Engineering in ICT (Software), Diploma in Engineering
                  Practice
                </li>
                <li>President of the UTS Programmers Society 2019-2020</li>
                <li>Head of Publications for the UTS Engineering Society 2018</li>
                <li>WiseTech Global Senior Programming Prize 2018 for C Fundamentals</li>
              </ul>
            </div>
          </div>
          <div className="sidebar col-span-2 bg-sidebar text-white p-lg">
            <div className="hidden md:block">{contacts}</div>
            <div className="skills">
              <h2>Skills</h2>
              <h3>User Experience</h3>
              <ul>
                <li>Development and usage of design systems</li>
                <li>Branding and marketing alignment of white-labeled products</li>
                <li>Persona creation, customer research, and user story mapping</li>
              </ul>
              <div className="grid grid-cols-3 justify-center gap-md mt-md text-xs">
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
              <h3>Full Stack Engineering</h3>
              <ul>
                <li>Flexible solutions such as web apps, APIs, and internal tooling</li>
                <li>Cloud deployment with AWS and Azure</li>
              </ul>
              <div className="grid grid-cols-4 justify-center gap-md mt-md text-xs">
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
                  <PiDatabaseFill className="w-lg h-lg" />
                  <span className="text-center">Databases</span>
                </div>
              </div>
              <hr />
              <h3>Analytics and Data Visualisation</h3>
              <ul>
                <li>Experience building multiple projects with data analytics dashboards</li>
                <li>Creation of bespoke charts and mapping software</li>
              </ul>
              <div className="grid grid-cols-4 justify-center gap-md mt-md text-xs">
                <div className="flex flex-col items-center">
                  <PowerBiLogo className="h-lg" />
                  <span>PowerBI</span>
                </div>
                <div className="flex flex-col items-center">
                  <D3Logo className="h-lg" />
                  <span>D3</span>
                </div>
                <div className="flex flex-col items-center">
                  <PythonLogo className="h-lg" />
                  <span className="text-center">Highcharts</span>
                </div>
                <div className="flex flex-col items-center">
                  <SiArcgis className="h-lg w-lg" fill="rgb(75,130,230)" />
                  <span className="text-center">ArcGIS</span>
                </div>
              </div>
              <hr />
              <h3>Agile Project Management</h3>
              <ul>
                <li>Facilitation of agile ceremonies such as retros, backlog refinement, and stand-ups</li>
                <li>Administration and configuration of project management tools</li>
                <div className="grid grid-cols-3 justify-center gap-md mt-md text-xs">
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
              <h3>Game Engines and 3D Software</h3>
              <ul>
                <li>Development of multiple games, educational, and logistics software</li>
              </ul>
              <div className="grid grid-cols-3 justify-center gap-md mt-md text-xs">
                <div className="flex flex-col items-center">
                  <FaUnity className="h-lg w-lg" />
                  <span>Unity</span>
                </div>
                <div className="flex flex-col items-center">
                  <SiUnrealengine className="h-lg w-lg" />
                  <span>Unreal</span>
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
  )
}

const links = {
  email: "mailto:benkellysoftware@gmail.com",
  github: "https://github.com/BenKellySoftware",
  fantasyTown: "https://store.steampowered.com/app/1524530/Fantasy_Town_Regional_Manager/",
  capsCollective: "https://capscollective.com",
  agda: "https://agdas.com.au/2022-finalists-announced/",
  kotaku: "https://kotaku.com.au/2021/12/best-australian-games-2021/",
}

export default App
