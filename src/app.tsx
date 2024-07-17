function App() {
  return (
    <div className="w-screen animated-background bg-gradient-to-r from-blue-500 via-blue-500 to-indigo-500 overflow-y-scroll p-lg flex justify-center min-h-screen items-center">
      <div className="bg-white shadow-lg flex flex-col text-primary md:w-[860px] w-full md:aspect-a4">
        <div className="md:grid grid-cols-5 gap-md flex-grow">
          <div className="col-span-3 p-lg">
            <div className="header mb-lg">
              <h1>Ben Kelly</h1>
              <div>
                I am a software engineer and designer with 7+ years working in start-ups and consultancy. I have a
                passion for building top-notch customer experiences.
              </div>
            </div>
            <div className="work-experience">
              <h2>Work Experience</h2>
              <h3>McKinsey Build / Quantum Black - 2021-Present</h3>
              <ul>
                <li>Software engineer and user experience specialist</li>
                <li>
                  Digital product design and development for clients in the financial, insurance, government, and retail
                  sectors
                </li>
                <li>Lead developer on the Quantum Black design system and react component library</li>
              </ul>
              <hr />
              <h3>Hypothesis - 2020-2021</h3>
              <ul>
                <li>Software engineer</li>
                <li>Acquired by McKinsey Digital in April 2021</li>
              </ul>
              <hr />
              <h3>Caps Collective - 2019-Present</h3>
              <ul>
                <li>Co-founder of Caps Collective in 2019, focused on open-source games and tooling</li>
                <li>Released Fantasy Town Regional Manager on Steam in 2021</li>
                <li>Listed in Kotaku AU’s top 10 Australian Games of 2021</li>
                <li>Nominated for 2022 Australian Game Development Awards for Best Emerging Game</li>
              </ul>
              <hr />
              <h3>Impulse Screen Media - 2016-2018</h3>
              <ul>
                <li>Full-stack software engineer for an advertising analytics platform</li>
              </ul>
            </div>
            <hr />
            <div className="education">
              <h2>Education</h2>
              <h3>University of Technology Sydney - 2016-2021</h3>
              <ul>
                <li>
                  Graduated First-Class Honours, Bachelor of Engineering in ICT (Software), Diploma in Engineering
                  Practice
                </li>
                <li>President of the UTS Programmers Society 2019-2020</li>
                <li>Head of Publications for the UTS Engineering Society 2018</li>
                <li>WiseTech Global Senior Programming Prize 2018 for C Fundamentals</li>
              </ul>
            </div>
          </div>
          <div className="col-span-2 bg-sidebar text-white p-lg">
            <div className="contacts">
              <h2>Contacts</h2>
              <ul className="text-sm font-semibold">
                <li>
                  <a href="mailto:benkellysoftware@gmail.com ">benkellysoftware@gmail.com</a>
                </li>
                <li>
                  <a href="https://github.com/benkellysoftware">github.com/benkellysoftware</a>
                </li>
                <li>0450 580 772</li>
              </ul>
            </div>
            <hr />
            <div className="skills">
              <h2>Skills</h2>
              <h3>User Experience</h3>
              <ul>
                <li>Development and usage of design systems</li>
                <li>Branding and marketing alignment of white-labeled products</li>
                <li>Persona creation, customer research, and user story mapping</li>
                <li>Tools include: Figma, Miro, Affinity Designer</li>
              </ul>
              <hr />
              <h3>Full Stack Engineering</h3>
              <ul>
                <li>Web apps, APIs, internal tooling etc.</li>
                <li>Cloud deployment and infra with AWS and Azure</li>
                <li>Tools Include: Typescript, React, C#, Python, SQL</li>
              </ul>
              <hr />
              <h3>Analytics and data visualisation</h3>
              <ul>
                <li>Experience building multiple projects with data analytics dashboards</li>
                <li>Creation of bespoke charts and mapping software</li>
                <li>PowerBI, Tableau, D3, Highcharts, ArcGIS etc.</li>
                <li></li>
              </ul>
              <hr />
              <h3>Agile project management</h3>
              <ul>
                <li>Facilitation of agile ceremonies e.g. Retros, backlog refinement, stand-ups etc.</li>
                <li>Management of project management tools e.g. Jira, Azure Dev-ops, Github Projects etc.</li>
              </ul>
              <hr />
              <h3>Game Engines and 3D Software</h3>
              <ul>
                <li>Development of multiple projects and games in Unity, Unreal, and Godot</li>
                <li>Development of edutainment and logistics software in Unity</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
