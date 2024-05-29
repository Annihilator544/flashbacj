import "../App.css";

function FeaturedCollection() {
  return (
    <div className="bg-texture h-full bg-fixed">
      <div className="min-h-[70vh] bg-aboutus sm:grid sm:grid-cols-2 sm: gap-1 flex flex-col  text-white text-6xl Boldy pt-[13vh] pb-20  p-5 sm:pl-20">
        <div className=" h-[60vh]  flex flex-col sm:flex-row flex-nowrap">
          <img className= "ml-auto"  src="https://cdn.sanity.io/images/u8qx4arf/production/6c1d7502c2d96b086051b64cbe9f7e165a6cae7f-636x809.png" alt="hello" />
        </div>
        <div className="text-5xl Boldy  flex-col flex gap-1 pl-10 ">
          
              Behind<br />
              <div className=" flex-row flex ">
             
                <p className="Actonia text-5xl mb-auto lowercase ml-6 ">
                  the 
                </p>
                <p className="text-[#FFCA00] ml-2"> brand</p >
              </div>
            
            <div className="text-lg flex-col flex gap-10 pt-5">
              <div className="Courier">
                <h1>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 <br /> sed do eiusmod tempor incididunt ut labore et dolore
                  magna  aliqua. Justo laoreet sit amet cursus.Consequat
                  interdum<br /> varius sit amet mattis vulputate enim nulla
                  aliquet.
                </h1>{" "}
              </div>
              <div className="Courier">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
                sed do eiusmod tempor incididunt ut labore et dolore magna{" "}
               <br /> aliqua. Justo laoreet sit amet cursus.Consequat interdum{" "}
               <br /> varius sit amet mattis vulputate enim nulla aliquet.
               <br />
              </div>
            </div>
        </div>
      </div>
      <div className="h-[80vh] mt-20 bg-newCollection flex flex-col justify-center items-center text-5xl Boldy bg-center bg-cover text-white" />

      {/* <div>
         wait da
        </div> */}
    </div>
  );
}
export default FeaturedCollection;
