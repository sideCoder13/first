import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="w-full h-full flex flex-col items-center background">

      <div className="m-10 p-5 bg-white w-11/12  flex justify-center rounded-[10px]
       border border-black font-bold text-5xl">
        Random Gif
      </div>

      <div className="w-full flex flex-col items-center ">
       <Random/>
       <Tag/>
      </div>

    </div>
  );
}
