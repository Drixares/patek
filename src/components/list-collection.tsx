import Image from "next/image";

const list = [
  {
    "topHeader": "GRANDES COMPLICATIONS",
    "image": "/img/image_9.jpg",
    "number": 41,
  },
  {
    "topHeader": "COMPLICATIONS",
    "image": "/img/image_10.png",
    "number": 31,
  },
  {
    "topHeader": "CALATRAVA",
    "image": "/img/image_8.png",
    "number": 13,
  },
  {
    "topHeader": "GONDOLO",
    "image": "/img/image_11.png",
    "number": 4,
  },
  {
    "topHeader": "GOLDEN ELLIPSE",
    "image": "/img/image_12.png",
    "number": 4,
  },
  {
    "topHeader": "NAUTILUS",
    "image": "/img/image_15.png",
    "number": 28,
  },
  {
    "topHeader": "AQUANAUT",
    "image": "/img/image_14.png",
    "number": 20,
  },
  {
    "topHeader": "TWENTY~4",
    "image": "/img/image_16.png",
    "number": 10,
  },

]

const ListCollection = () => {
  return ( 
    <div className="w-full ml-40 flex flex-col items-center gap-6">
      {list.map((item, index) => (
        <div key={"collection"+index} className="w-full h-[500px] flex flex-col justify-between relative p-12" 
          style={{
            backgroundImage: `url(${item.image})`, 
            backgroundSize: "cover", 
            backgroundPosition: "center"
          }}
        >
          <div className="z-50">
            <h2 className="text-white text-4xl font-bold text flex items-center gap-3">
              {item.topHeader}
              <span className="w-2.5 h-2.5 bg-white rotate-45" />
            </h2>
            <span className="text-white/50 uppercase">{item.number} Models</span>
          </div>

          <div>
            <Image src="/icons/arrow_topleft.svg" alt="arrow" width={40} height={40} />
          </div>
        </div>
      ))}
    </div>
   );
}
 
export default ListCollection;