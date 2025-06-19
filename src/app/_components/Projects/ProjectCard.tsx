import Image, { StaticImageData } from "next/image";
import SpotlightCard from "../SpotLightCard";

interface ProjectCardProps {
  title: string;
  src: StaticImageData;
  alt: string;
  shortDescription: string;
  spotlightColor?: `rgba(${number}, ${number}, ${number}, ${number})`;
}

export function ProjectCard({
  alt,
  shortDescription,
  src,
  title,
  spotlightColor,
}: ProjectCardProps) {
  return (
    <SpotlightCard
      className="custom-spotlight-card"
      spotlightColor={spotlightColor}
    >
      <div className="relative">
        <div className="relative w-full">
          <article className="overflow-hidden">
            <Image
              src={src}
              alt={alt}
              width="2000"
              height="1047"
              className="w-full h-auto object-cover"
              sizes="100vw"
            />
          </article>
        </div>
      </div>
      <p className="pt-2 font-serif text-black font-medium font-figTree uppercase">
        {title}
      </p>
      <span className="text-gray-600 uppercase">{shortDescription}</span>
    </SpotlightCard>
  );
}
