<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
    
import 'swiper/css';
import 'swiper/css/pagination';

const modules = [Pagination];
</script>
<template>
  <div class="w-full h-screen history background-container" id="theSecond" ref="myComponentRef">
    <!-- <div class="background-container"> -->
      <div class="flex flex-col justify-between h-screen ">
      
        <div class="w-5/6 lg:w-4/6  flex flex-col mx-auto py-3 ">
          <div class="w-4/6 lg:w-2/6 flex  px-4 lg:px-0 lg:justify-center items-center  ">
            <h1 class="text-5xl lg:text-8xl font-oswald font-bold text-footerbluebg opacity-60">01<span>.</span></h1>
            <p class="lg:text-2xl font-oswald font-bold  -ml-2 lg:-ml-5 -mb-2 lg:-mb-4 text-darkbluebg">HISTORY</p>
          </div>
          <div class="w-full pl-4 lg:w-9/12 lg:px-2 font-smallertext text-xs lg:text-sm  mx-auto">
            <p class="leading-tight ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta illum ratione omnis,<span class="w-2/5  overflow-hidden">praesentium nesciunt ex inventore non commodi sed illo repellat veniam aliquam quod harum. Esse modi eius cumque commodi.</span></p>
          </div>
        </div>
        <!-- hello -->
      
        <div class="border-2 border-green-900  smallbody flex justify-center items-center bg-darkbluebg">
          <swiper
            :slidesPerView="4"
            :spaceBetween="30"
            :pagination="{
              clickable: true,
            }"
            :modules="modules"
            class="mySwiper"
          >
            <swiper-slide v-for="i in 10" :key="i">
              <div class="section">
                <div class="container">
                  <div clas="content">
                    <div class="card">
                      <div class="card-content">
                        <div class="image">
                          <img src="@/assets/thumbnail-1.png" alt="">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
      </div>
    </div>
  </div>
</template>


<style>

</style>