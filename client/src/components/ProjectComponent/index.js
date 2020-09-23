import React, {useState} from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

function ProjectCard() {
  const [projectDetails] = useState({
    project: [
      {
      projectName: "I'm Bored!",
      description: "Random movie, book, and video game generator.",
      repoLink: "https://github.com/Mirandor/team-sith",
      liveLink: "https://mirandor.github.io/team-sith/",
      imageLink: "/Images/ImBored.png"
    },
    {
      projectName: "Password Generator",
      description: "Create simple passwords.",
      repoLink: "https://github.com/Mirandor/pwdgen",
      liveLink: "https://mirandor.github.io/team-sith/",
      imageLink: "/Images/PasswordGenerator.png",
    },
    {
      projectName: "Burger Love",
      description: "Keep track of burgers you want to eat.",
      repoLink: "https://github.com/Mirandor/burgerlove",
      liveLink: "https://rocky-sierra-19969.herokuapp.com/",
      imageLink: "/Images/ForTheLoveOfBurgers.png"
    },
    {
      projectName: "Workday Scheduler",
      description: "Plan your day.",
      repoLink: "https://github.com/Mirandor/workdayscheduler",
      liveLink: "https://mirandor.github.io/workdayscheduler/",
      imageLink: "/Images/WorkDayScheduler.png"
    },
    {
      projectName: "Journey",
      description: "Record your itinerary and share it.",
      repoLink: "https://github.com/Mirandor/Last-dance",
      liveLink: "https://lastdance-journey.herokuapp.com/",
      imageLink: "/Images/Journey.png"
    },
    {
      projectName: "Note Taker",
      description: "A place to take quick simple notes.",
      repoLink: "https://github.com/Mirandor/notetaker",
      liveLink: "https://notetaker-darthmirandor.herokuapp.com/",
      imageLink: "/Images/NoteTaker.png"
    }
   ]
  })
  return (
    <div>
      <Card.Group fluid itemsPerRow={3}>
      {projectDetails.project.map ( project =>{
        return(
          <Card raised >
            <Image src={project.imageLink} wrapped ui={false} />
          <Card.Content >
            <Card.Header>
              {project.projectName}
            </Card.Header>
            <Card.Description>
              {project.description}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div>
              <Button.Group>
                <Button color='black' href={project.repoLink} target="_blank">
                  Repo Link
                </Button>
                <Button.Or />
                <Button color='purple' href={project.liveLink} target="_blank">
                  Live Link
                </Button>
              </Button.Group>
            </div>
          </Card.Content>
          </Card>
            )
          }
        )
      }
      </Card.Group>
    </div>
  )
}

export default ProjectCard;