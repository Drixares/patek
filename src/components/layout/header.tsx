import Image from "next/image";
import NavBar from "../navbar";

const Header = () => {
  return ( 
    <div className="h-screen w-full bg-header-pattern bg-no-repeat bg-cover pb-64">
      <NavBar />
      <div className="h-full w-full flex flex-col justify-end text-white">
        <div className="ml-40 flex flex-col gap-5">
          <div className="flex flex-col">
            <div className="flex items-center gap-3">
              <span className="text-[100px] uppercase leading-none">HEURE</span>
              <div className="w-[calc(20rem)] border-2 border-white bg-white/10 flex items-center 
                justify-between py-5 px-6 backdrop-blur-md"
              >
                <span className="text-xl uppercase">En savoir plus</span>
                <Image src="./icons/arrow_topleft.svg" alt="arrow" width={24} height={24} />
              </div>
            </div>
            <span className="text-[100px] uppercase leading-none">Universelle</span>
          </div>
          <span className="text-white/50 text-lg">
            5330G-001
          </span>
        </div>
      </div>
    </div>
   );
}
 
export default Header;