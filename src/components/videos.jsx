import VideoStoryTile from "./VideoStoryTile";
import downarrow from "../assets/images/downarrow.svg";

function Videos() {
  return (
    <div className=" pt-10 bg-texture ">
      <div className="flex  w-full ">
        <div className="flex flex-row ml-[20%] ">
          <span className="Actonia text-white mb-auto   text-4xl">through</span>
          <span className="text-[#ffca00] ml-2 Boldy text-5xl">Videos</span>
          <img src={downarrow} alt="" className="w-[4vh] ml-1 mt-5" /> 
        </div>
      </div>
      <div className="flex flex-col sm:flex-row p-3 sm:p-20 Boldy">
        {
          [1,2,3].map((item, index) => (
            <div>
              <VideoStoryTile
              name="MELANIE + ELROY ,"
              location="Goa"
              />
            </div>
          ))
        }
      </div>
      <div className="flex flex-row-reverse h-30 items-center justify-center"/>
    </div>
  );
}
export default Videos;
