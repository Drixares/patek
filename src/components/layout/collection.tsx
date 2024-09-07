import ListCollection from "../list-collection";

const CollectionSection = () => {
  return ( 
    <div className="w-full mt-40">
      <div className="flex flex-col gap-4 leading-none text-center mb-40">
        <h2 className="text-[100px] text-[#242424] uppercase">Collections</h2>
        <span className="uppercase text-third text-lg">Montres patek philippe</span>
      </div>

      <ListCollection />
    </div>
   );
}
 
export default CollectionSection;