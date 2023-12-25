import React from 'react'
import hat from "../assets/hat.jpg"
import tshirt2 from "../assets/tshirt2.jpg"
import tshirt3 from "../assets/tshirt3.jpg"

const FeatureCard = () => {
  return (
    <>
    <h1 className="text-3xl sm:text-2xl md:text-6xl font-bold text-center subpixel-antialiased lg:text-center mt-12 "> Our Products</h1>
    
    <div class="flex min-h-screen items-center justify-center ">
        
  <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="h-96 w-72 ">
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={hat} alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class=" text-2xl font-bold text-white">Accesories</h1>
        <p class="mb-3 text-lg font-md italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Embrace unmatched comfort and chic style with our oversized tees, crafted for those who appreciate fashion that speaks volume effortlessly.</p>
      </div>
    </div>
    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="h-96 w-72">
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={tshirt2} alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-dmserif text-3xl font-bold text-white">Customized T-shirts</h1>
        <p class="mb-3 text-lg font-md italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Create your unique style with our customizable T-shirts express yourself with personalized designs, colors, and messages tailored just for you</p>
      </div>
    </div>
    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="h-96 w-72">
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={tshirt3} alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-dmserif text-3xl font-bold text-white">OverSize T-shirts</h1>
        <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Experience unparalleled comfort and trendy fashion with our oversized T-shirts redefine your casual wardrobe with a relaxed and stylish flair..</p>
      </div>
    </div>
  </div>
  
</div>
</>
  )
}

export default FeatureCard
