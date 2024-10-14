import { Button } from "@/components/ui/button";
import { about, skills } from "@/content/data";
import { CopyIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import React from "react";
import ProgressComponent from "@/components/progress-component";



export default function Home() {
  const aboutData = about();
  const skillsData = skills();


  return (
    <div className="md:w-5/6 mx-auto mt-4 flex flex-col md:gap-5 gap-2">

      <div className="flex flex-col md:flex-row md:gap-5 gap-2">
        <div className="md:w-3/5 px-3 py-8 bg-[#1B1B1B] border border-[#262626] rounded-lg">
          <div className="flex flex-col-reverse lg:flex-row justify-center items-center md:gap-10 gap-6">
            <div>
              <h4 className="text-[#949393] text-lg">{aboutData.occupation}</h4>

              <div className="mt-8">
                <h3 className="text-5xl">{aboutData.title}</h3>
                <p className="pt-3">{aboutData.subTitle}</p>
              </div>

              <div className="flex gap-2 mt-2 ">
                <Button className="text-lg">Hire Me</Button>
                <Button variant="outline" className="flex gap-2 text-xs">
                  Copy Email <CopyIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex items-center">
              <Avatar>
                <AvatarImage src={aboutData.profileImageUrl} />
                <AvatarFallback>Profile Image</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
        <div className="md:w-2/5 px-3 py-8 bg-[#1B1B1B] border border-[#262626] rounded-lg">
          <h4 className="font-semibold uppercase text-2xl">Skils</h4>
          <div className="">
            {skillsData.map(({ skill, level }) => (
              <ProgressComponent key={skill} level={level} skill={skill} />
            ))}
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col md:flex-row md:gap-5 gap-2">
        <div className="md:w-1/2 px-3 bg-[#1B1B1B] border border-[#262626] rounded-lg">

        </div>
      </div> */}
    </div>
  );
}
