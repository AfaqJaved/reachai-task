import Image from "./assets/image.png"
function App() {

  return (
     <div className="bg-white w-[210mm] h-[297mm] shadow-md">
      <div className="pl-20 pr-20 pt-20">
          <div className="border-b-solid border-b-4 border-blue-500 inline-block w-24 ml-12"></div>
          <div>
            <h1 className="text-blue-500 text-3xl font-serif mt-4">Introduction</h1>
          </div>
          <div className="mt-4 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam doloremque ab consequuntur neque, optio     perspiciatis quas quod beatae porro distinctio odio. Fugit eaque, blanditiis sint laboriosam laborum incidunt nulla nam. Lorem ipsum dolor sit amet    consectetur adipisicing elit. Voluptatum aliquid cupiditate qui quis. Reprehenderit vero officiis dolor quibusdam. Voluptate perferendis a ab hic    culpa iure, minima illo labore doloribus. Corrupti Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores dolores corporis cupiditate    libero debitis, veritatis exercitationem? Nesciunt eveniet excepturi atque inventore ducimus ullam, ab sapiente neque voluptatibus deserunt quibusdam     tempora!</div>
          <div className="mt-4 text-gray-800 font-bold ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam doloremque ab consequuntur neque,      optio perspiciatis quas quod beatae porro distinctio odio. Fugit eaque, blanditiis sint laboriosam laborum incidunt nulla nam. Lorem ipsum dolor sit     amet consectetur adipisicing elit.</div>
      </div>
      <img className="mt-4" src={Image}></img>
      <div className="bg-blue-500 w-full flex justify-between items-center pl-20 pr-20">
        <div className="h-16">
          <div className='h-3'>
            <i className="bi bi-three-dots text-3xl text-gray-200"></i>
            <i className="bi bi-three-dots text-3xl text-gray-200"></i>
          </div>
          <div className="h-3">
            <i className="bi bi-three-dots text-3xl text-gray-200"></i>
            <i className="bi bi-three-dots text-3xl text-gray-200"></i>
          </div>
          <div className="h-3">
            <i className="bi bi-three-dots text-3xl text-gray-200"></i>
            <i className="bi bi-three-dots text-3xl text-gray-200"></i>
          </div>
        </div>
        <p className="text-gray-200">2</p>
        <div>
          <div className="">
            <i className="text-gray-200 font-extrabold bi bi-chevron-left"></i>
            <i className="text-gray-200 font-extrabold bi bi-chevron-left"></i>
            <i className="text-gray-200 font-extrabold bi bi-chevron-left"></i>
            <i className="text-gray-200 font-extrabold bi bi-chevron-left"></i>
            <i className="text-gray-200 font-extrabold bi bi-chevron-left"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
