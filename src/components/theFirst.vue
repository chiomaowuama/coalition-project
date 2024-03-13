<script setup>
  // import { ref, onMounted } from 'vue';

// const myComponentRef = ref(null);

    // const componentRef = ref(null);
    // const scrollIntoView = () => {
    //   console.log('Scrolling into view:', myComponentRef.value);
    //     myComponentRef.value.scrollIntoView({ behavior: 'smooth' });
    // };

// onMounted(() => {
//     console.log('Component mounted 3:', myComponentRef);
// });

</script>


<template>
  <!-- relative -->
  <!-- overflow-hidden -->
  <div class=" heading   relative w-full h-screen  overflow-hidden" id="theFirst" ref="myComponentRef">
    <img src="@/assets/header-bg.png" alt="" srcset="" class=" object-cover h-screen lg:h-fit relative z-1 lg:object-contain mix-blend-overlay "/>
    <img src="@/assets/header-overlay.png" alt="" srcset="" class="absolute top-0 left-0 object-left-top mix-blend-overlay object-contain  h-screen lg:h-fit lg:object-contain"/>

     <div  class="absolute top-36 lg:top-36 w-3/6 font-textstyle  text-6xl lg:text-9xl tracking-wide font-semibold left-24 lg:left-80 "  >
          <p class="text-darkbrown tracking-wide">LOSANGELES</p>
          <p class="text-darkbluebg">MOUNTAINS</p>
        </div>
        
    {/* <!-- <div class="border-2 border-green-900  w-3/6 font-textstyle text-9xl tracking-wide font-semibold absolute top-36 left-80 "> -->
        <!-- <p>LOSANGELES</p> -->
        <!-- <p>MOUNTAINS</p> -->
     <!-- </div> --> */}
  </div>
</template>


<style>

</style>