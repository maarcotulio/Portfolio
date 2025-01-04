interface ProjectCardProps {
  children: React.ReactNode;
}

export function ProjectCard({ children }: ProjectCardProps) {
  return (
    <div className="rounded-md overflow-hidden hover:cursor-pointer hover:scale-105 max-w-[360px] w-full">
      {children}
    </div>
  );
}
