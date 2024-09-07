
const list = [
  {
    "topHeader": "COMPLICATIONS",
    "image": "/img/image-removebg-preview.png",
    "model": "5330G-001",
    "color": "OR GRIS",
  },
  {
    "topHeader": "GRANDES COMPLICATIONS",
    "image": "/img/image-removebg-preview_1.png",
    "model": "5520RG-001",
    "color": "OR ROSE & GRIS",
  },
  {
    "topHeader": "GRANDES COMPLICATIONS",
    "image": "/img/image-removebg-preview_2.png",
    "model": "5160/500R-001",
    "color": "OR ROSE",
  },
  {
    "topHeader": "GRANDES COMPLICATIONS",
    "image": "/img/image-removebg-preview_3.png",
    "model": "5236P-010",
    "color": "OR PLATINE",
  },
  {
    "topHeader": "COMPLICATIONS",
    "image": "/img/image-removebg-preview_4.png",
    "model": "5396G-017",
    "color": "OR GRIS",
  },
]

const Caroussel = () => {
  return ( 
    <div className="w-full ml-40 flex items-center gap-6">
      {list.map((item, index) => (
        <div key={"caroussel:"+index} className="overflow-hidden h-[500px] w-[360px] bg-[#F3F3F3] 
          p-7
        ">
          <p className="text-third">{item.topHeader}</p>
          {/* <Image 
            src={item.image} 
            alt={item.model} 
            width={0} 
            height={400}
            sizes="(max-width: 360px) 100vw, 360px" 
            className="w-auto h-[400px] translate-x-1/2"
            /> */}
          <img 
            src={item.image} 
            alt={item.model} 
            // width={0} 
            // height={400}
            className="w-auto h-[400px] translate-x-1/2"
            />
          
          <div className="-mt-7">
            <p className="text-lg flex items-center gap-2">
              {item.model}
              <span className="bg-third w-1.5 h-1.5 rotate-45" />
            </p>
            <p className="text-third text-sm">{item.color}</p>
          </div>
        </div>
      ))}
    </div>
   );
}
 
export default Caroussel;