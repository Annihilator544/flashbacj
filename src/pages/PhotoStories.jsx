import Header from "../components/Header";
import BgImage from "../assets/images/photostories/bgImage.png";
import PhotoStoryTile from "../components/PhotoStoryTile";

function PhotoStories() {
  const photostories= [{
    name:"Alison + joel",
    location:"Goa",
  },
{
  name: "Gavin + Gayle",
  location: "Mumbai",
},{
  name:"Melissa + John",
  location:"Bangalore",
},
{
  name: "Sara + Mark",
  location: "Kerala",
},
{
  name: "Lara + David",
  location: "Chennai",
},
{
  name: "Megan + Tom",
  location: "Delhi",
},
{
  name: "Lara + David",
  location: "Chennai",
},
{
  name: "Megan + Tom",
  location: "Delhi",

},


]
  return (
    <div>
      <div className="bg-center" style={{ backgroundImage: BgImage }}>
      <img src ='https://cdn.sanity.io/images/u8qx4arf/production/e608394a238a81e104cf3d52505f03898baf7335-2560x512.png' className=' w-100%  h-100% sm:w-100% sm:h-100% h-[300px] object-cover  pb-0' alt="Quote"/>
        <Header />
      </div>
      <div className="bg-[#EDECE7] flex justify-center items-center">
        <div className="flex flex-col items-center w-[85%]">
          <div className="text-4xl uppercase Boldy  tracking-tighter text-black text-center mb-10 mt-10 ">
            Love <span className="Actonia lowercase"> is the </span> whole thing. <br /> we are only pieces.
          </div>
          <div className=" Courier flex flex-col justify-around mb-10 sm:flex-row w-[70%] ">
            <div className=" Courier flex-1 text-md   m-2 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Interdum velit euismod in pellentesque massa placerat duis
              ultricies lacus. Massa tincidunt dui ut ornare lectus sit amet est
              placerat. Consectetur purus ut faucibus pulvinar elementum. Dolor
              sit amet consectetur adipiscing elit pellentesque.
            </div>
            <div className="Courier flex-1 text-md  m-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Interdum velit euismod in pellentesque massa placerat duis
              ultricies lacus. Massa tincidunt dui ut ornare lectus sit amet est
              placerat. Consectetur purus ut faucibus pulvinar elementum. Dolor
              sit amet consectetur adipiscing elit pellentesque.
            </div>
          </div>
          <div className=" Courier flex flex-row flex-wrap justify-center items-center pb-[100px]">
           {photostories.map((photostory,index)=>(
            <PhotoStoryTile name={photostory.name} location={photostory.location} />
           ))}
          </div>
        </div>
      </div>
      <div className=' h-[450px] sm:h-[100%] flex justify-center items-center  object-cover'>
      <img src = "https://cdn.sanity.io/images/u8qx4arf/production/719b9927c0c61f58c77df7c4c9ddaca3af3a715d-2560x920.png" className='sm:w-100% sm:h-100% h-[450px] object-cover' alt="Quote"/>
    </div>
    </div>
  );
}

export default PhotoStories;
