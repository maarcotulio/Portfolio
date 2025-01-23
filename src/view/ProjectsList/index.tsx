import { Modal } from "./Modal";
import { ProjectCard } from "./ProjectCard";

import fincheckImage from "../../assets/images/fincheckLogo.png";
import splashWaiterApp from "../../assets/images/splashWaiterApp.png";
import ankiAddImage from "../../assets/images/ankiadd.png";

export function ProjectsList() {
  const techFincheck = ["TS", "Nest.js", "React", "Prisma", "PostgreSQL"];
  const techAnkiAdd = ["React", "API", "Nest.js"];
  const techWaiterApp = ["React Native", "React", "WebSockets", "MongoDB"];

  function handleCode(url: string) {
    window.open(url, "_blank");
  }

  function handleDemo(url: string) {
    window.open(url, "_blank");
  }

  return (
    <div className="flex flex-col mt-12 w-full gap-12 items-center justify-center p-12  lg:justify-evenly lg:flex-row">
      <ProjectCard>
        <Modal
          title="Fincheck"
          technologies={techFincheck}
          description="The project is built help users manage their finances in a simple and effective way. The project provides tools to record expenses and investments and track their transactions."
          code={() => handleCode("https://github.com/maarcotulio/fincheck")}
          demo={() => handleDemo("https://youtu.be/hZ3X3BL3XiI")}
        >
          <img
            src={fincheckImage}
            alt="Fincheck Image"
            loading="lazy"
            className="scale-[3.5] h-60 object-cover w-96"
          />
        </Modal>
      </ProjectCard>

      <ProjectCard>
        <Modal
          title="WaiterApp"
          technologies={techWaiterApp}
          description="WaiterApp is designed to facilitate the work of waiters by speeding up the process of taking and managing orders. The aim is to improve service efficiency in bars and restaurants."
          code={() => handleCode("https://github.com/maarcotulio/waiterapp")}
          demo={() => handleDemo("https://youtu.be/UQdr3bGw0g4")}
        >
          <img
            src={splashWaiterApp}
            alt="Waiter App Image"
            loading="lazy"
            className="scale-[2.5] h-60 object-cover w-96"
          />
        </Modal>
      </ProjectCard>

      <ProjectCard>
        <Modal
          title="AnkiAdd 2.0"
          technologies={techAnkiAdd}
          description="The project accelerated by 80% the process of adding flashcards in Anki, a spaced repetition program, for language learners. The project also have a version to use in the Google Extension."
          code={() => handleCode("https://github.com/maarcotulio/AnkiAdd2.0")}
          demo={() => handleDemo("https://youtu.be/mOshCmMTaAc")}
        >
          <img
            src={ankiAddImage}
            alt="Anki Add Image"
            className="scale-[1.2] h-60 w-96 object-cover"
            loading="lazy"
          />
        </Modal>
      </ProjectCard>
    </div>
  );
}
