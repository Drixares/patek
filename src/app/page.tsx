import CollectionSection from "@/components/layout/collection";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import LastCreationsSection from "@/components/layout/lastCreations";

export default function Home() {
  return (
    <div>
      <Header />
      <LastCreationsSection />
      <CollectionSection />
      <div className="mt-40 ml-40">
        <div className="flex items-center justify-between h-[378px] w-full">
          <div className="h-full flex flex-col justify-between">
            <div className="flex flex-col gap-5">
              <h2 className="uppercase text-6xl">
                Manufacture genevoise <br />
                indépendante en mains <br />
                familiales
              </h2>

              <p className="uppercase text-lg text-third max-w-96 leading-1">
                Le pouvoir de l'indépendance, une totale liberté de création
              </p>
            </div>

            <div>
              <div className="text-third py-4 px-5 bg-[#F3F3F3] inline-flex items-center gap-3">
                <span className="uppercase">découvrir</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <path
                    d="M13 5H19V11"
                    stroke="#242424"
                    strokeOpacity={0.4}
                    stroke-width="2"
                    stroke-linecap="square"
                  />
                  <path
                    d="M18.5 5.5L5 19"
                    stroke="#242424"
                    strokeOpacity={0.4}
                    stroke-width="2"
                    stroke-linecap="square"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div
            className="h-full w-[842px]"
            style={{
              backgroundImage: "url('/img/image_17.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
      </div>
      <div className="w-full flex items-center justify-center my-20">
        <div className="flex items-center gap-5">
          <span className="w-2.5 h-2.5 bg-third rotate-45" />
          <span className="w-2.5 h-2.5 bg-[#242424] opacity-30 rotate-45" />
          <span className="w-2.5 h-2.5 bg-[#242424] opacity-20 rotate-45" />
          <span className="w-2.5 h-2.5 bg-[#242424] opacity-10 rotate-45" />
        </div>
      </div>
      <div className="mr-40">
        <div
          className="w-full h-[588px]"
          style={{
            backgroundImage: "url('/img/image_29.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      <div className="my-40 pl-40">
        <div>
          <h2 className="text-[#242424] text-6xl uppercase">
            détaillants agréés
          </h2>
          <div className="max-w-4xl mt-6 flex flex-col gap-5">
            <p className="text-third uppercase text-lg">
              Localisez le détaillant le plus proche en utilisant notre outil
              de recherche. La base de données fournit le nom des revendeurs,
              leur adresse et dans certains cas leur numéro de téléphone.
            </p>
            <p className="text-third uppercase text-lg">
              Si le nom d'un revendeur ne figure pas dans notre base de
              données, c'est qu'il ne s'agit pas d'un détaillant Patek
              Philippe agréé.
            </p>
          </div>

          <div className="mt-20">
            <div className="text-third py-4 px-5 bg-[#F3F3F3] inline-flex items-center gap-3">
              <span className="uppercase">découvrir</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <path
                  d="M13 5H19V11"
                  stroke="#242424"
                  strokeOpacity={0.4}
                  stroke-width="2"
                  stroke-linecap="square"
                />
                <path
                  d="M18.5 5.5L5 19"
                  stroke="#242424"
                  strokeOpacity={0.4}
                  stroke-width="2"
                  stroke-linecap="square"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
