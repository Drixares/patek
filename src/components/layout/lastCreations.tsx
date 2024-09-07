import Image from "next/image";
import Caroussel from "../caroussel";

const LastCreationsSection = () => {
  return ( 
    <div className="w-full pt-40">
      <div className="flex flex-col gap-60">
        <div className="ml-40">
          <h2 className="uppercase flex flex-col text-[100px] leading-none">
            <span className="text-black">Nos Dernières</span>
            <span className="font-thin flex items-center gap-4">
              Créations
              <Image src="/img/logo.svg" alt="logo" width={70} height={70} className="!fill-black !text-black" />
            </span>
          </h2>
        </div>

        <Caroussel />
      </div>
    </div>
   );
}
 
export default LastCreationsSection;