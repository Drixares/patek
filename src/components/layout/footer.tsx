import Image from "next/image";

const Footer = () => {
  return ( 
    <div className="h-[834px] px-40 py-16 flex flex-col justify-between">
      <div className="flex gap-20 uppercase">

        {/* Column 1 */}
        <div className="flex flex-col gap-10 leading-none">
          <h3 className="text-xl">collection</h3>
          <div className="flex flex-col gap-6 text-third max-w-48">
            <p>grandes complications</p>
            <p>complications</p>
            <p>calatrava</p>
            <p>gondolo</p>
            <p>golden ellipse</p>
            <p>nautilus</p>
            <p>aquanaut</p>
            <p>twenty~4</p>
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-10 leading-none">
          <h3 className="text-xl">entreprise</h3>
          <div className="flex flex-col gap-6 text-third max-w-48">
            <p>savoir-faire</p>
            <p>la manufacture</p>
          </div>
          <h3 className="text-xl">autres</h3>
          <div className="flex flex-col gap-6 text-third max-w-48">
            <p>fonds d'écran</p>
            <p>glossaire</p>
            <p>paramétrage des cookies</p>
            <p></p>
          </div>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-10 leading-none">
          <h3 className="text-xl">détaillants et service</h3>
          <div className="flex flex-col gap-6 text-third max-w-48">
            <p>salons patek philippe</p>
            <p>détaillants agréés</p>
            <p>propriétaires</p>
            <p>modes d'emploi & réglages</p>
            <p>centres de service</p>
            <p>extrait des archives</p>
          </div>
        </div>

        {/* Column 4 */}
        <div className="flex flex-col gap-10 leading-none">
          <h3 className="text-xl">contact</h3>
          <div className="flex flex-col gap-6 text-third max-w-48">
            <p>contact</p>
            <p>carrières</p>
            <p>presse</p>
            <p></p>
          </div>
          <h3 className="text-xl">Suivez-nous</h3>
          <div className="flex flex-col gap-6 text-third max-w-48">
            <p>communiqués de presse</p>
            <p>instagram</p>
            <p>youtube</p>
            <p></p>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center gap-10">
        <Image src="/img/patek_label.svg" alt="logo patek" width={200} height={50} />
        <div className="h-[1px] bg-[#242424] flex-1" />
        <span className="uppercase text-[#242424]">Mentions légales</span>
        <span className="uppercase text-[#242424]">déclaration de confidentialité</span>
      </div>
    </div>
   );
}
 
export default Footer;