// import Image from "next/image";
import { about } from "@/content/data";


export default function Home() {
  const aboutData = about();
  return (
    <div className="sm:w-5/6 mx-auto flex flex-col gap-y-5 mt-4">
      <div className="px-3 py-8 bg-[#1B1B1B] border border-[#262626] rounded-lg">
        <h4 className="text-[#949393] text-lg">{aboutData.occupation}</h4>
        <div className="flex gap-2 mt-8">
          <div className="w-2-3">
            <h3 className="text-3xl">{aboutData.title}</h3>
            <p className="pt-3">{aboutData.subTitle}</p>
          </div>
          <div className="w-1/3"></div>
        </div>
      </div>
    </div>
  );
}
