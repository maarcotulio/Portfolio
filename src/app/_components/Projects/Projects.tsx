import fincheckImg from "@/assets/images/fincheckLogo.png";
import chateSportsImg from "@/assets/images/chat-e-sports.png";
import waiterAppImg from "@/assets/images/splashWaiterApp.png";
import { ProjectCard } from "./ProjectCard";
import { useState } from "react";
import { Modal } from "../Modal";

export function Projects() {
  const [isOpenFincheck, setIsOpenFincheck] = useState(false);
  const [isOpenWaiterApp, setIsOpenWaiterApp] = useState(false);
  const [isOpenChatESports, setIsOpenChatESports] = useState(false);

  const techFincheck = ["TS", "Nest.js", "React", "Prisma", "PostgreSQL"];
  const techChatESports = [
    "Supabase",
    "Next.js",
    "TailwindCSS",
    "Sockets.io",
    "Auth",
  ];
  const techWaiterApp = ["React Native", "React", "WebSockets", "MongoDB"];

  function handleCode(url: string) {
    window.open(url, "_blank");
  }

  function handleDemo(url: string) {
    window.open(url, "_blank");
  }

  return (
    <div className="flex flex-wrap gap-4">
      {/* FINCHECK */}
      <a
        target=""
        className="relative w-full md:w-[calc(33.333%-1rem)]"
        onClick={() => setIsOpenFincheck(!isOpenFincheck)}
      >
        <ProjectCard
          alt="Fincheck Project"
          shortDescription="Site para Finanças"
          title="Fincheck"
          src={fincheckImg}
          spotlightColor="rgba(0, 255, 85, 0.2)"
        />
      </a>

      {/* CHAT E-SPORTS */}
      <a
        target=""
        className="relative w-full md:w-[calc(33.333%-1rem)]"
        onClick={() => setIsOpenChatESports(!isOpenChatESports)}
      >
        <ProjectCard
          alt="Chat e-Sports Project"
          shortDescription="Chat em tempo real"
          title="Chat e-Sports"
          src={chateSportsImg}
          spotlightColor="rgba(0, 119, 255, 0.2)"
        />
      </a>

      {/* WAITER APP */}
      <a
        target=""
        className="relative w-full md:w-[calc(33.333%-1rem)]"
        onClick={() => setIsOpenWaiterApp(!isOpenWaiterApp)}
      >
        <ProjectCard
          alt="Waiter App Project"
          shortDescription="Aplicativo para Restaurantes"
          title="WaiterApp"
          src={waiterAppImg}
          spotlightColor="rgba(255, 0, 0, 0.2)"
        />
      </a>

      <Modal
        title="Fincheck"
        isOpen={isOpenFincheck}
        setCloseModal={() => setIsOpenFincheck(false)}
        technologies={techFincheck}
        description="O projeto foi desenvolvido para ajudar os usuários a gerir as suas finanças de uma forma simples e eficaz. O projeto fornece ferramentas para registar despesas e investimentos e acompanhar as suas transacções."
        code={() => handleCode("https://github.com/maarcotulio/fincheck")}
        demo={() => handleDemo("https://youtu.be/7DP4fzJ8uFE")}
      />

      <Modal
        title="WaiterApp"
        isOpen={isOpenWaiterApp}
        setCloseModal={() => setIsOpenWaiterApp(false)}
        technologies={techWaiterApp}
        description="A WaiterApp é feito para facilitar o trabalho dos garçons, acelerando o processo de receção e gestão dos pedidos. O objetivo é melhorar a eficiência do serviço em bares e restaurantes."
        code={() => handleCode("https://github.com/maarcotulio/waiterapp")}
        demo={() => handleDemo("https://youtu.be/UQdr3bGw0g4")}
      />

      <Modal
        title="Chat e-Sports"
        isOpen={isOpenChatESports}
        setCloseModal={() => setIsOpenChatESports(false)}
        technologies={techChatESports}
        description="O Chat e-Sports destina-se a melhorar a experiência do usuário para saber quando vai ter lugar um jogo e também de poder falar com os amigos sobre o mesmo."
        code={() => handleCode("https://github.com/maarcotulio/Chat_e-Sports")}
        demo={() => handleDemo("https://youtu.be/hqwrg_BoZ08")}
      />
    </div>
  );
}
