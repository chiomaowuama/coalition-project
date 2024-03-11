    <script setup>
   
   import { ref, onMounted } from 'vue';

// const myComponentRef = ref(null);
    const myComponentRef = ref(null);
    // const componentRef = ref(null);
    const scrollIntoView = () => {
      console.log('Scrolling into view:', myComponentRef.value);
        myComponentRef.value.scrollIntoView({ behavior: 'smooth' });
    };

onMounted(() => {
    console.log('Component mounted:', myComponentRef);
});
    </script>
<template>
  <div class="w-full h-screen history background-container" id="theSecond" ref="myComponentRef">
    <!-- <div class="background-container"> -->
    <div class="flex flex-col justify-between h-screen ">
      
        <div class="w-5/6 lg:w-4/6  flex flex-col mx-auto py-3 ">
          <div class="w-4/6 lg:w-2/6 flex  px-4 lg:px-0 lg:justify-center items-center  ">
            <h1 class="text-5xl lg:text-8xl font-oswald font-bold text-footerbluebg opacity-60">01<span>.</span></h1>
            <p class="lg:text-2xl font-oswald font-bold  -ml-2 lg:-ml-5 -mb-2 lg:-mb-4 text-darkbluebg">History</p>
          </div>
          <div class="w-full pl-4 lg:w-9/12 lg:px-2 font-smallertext text-xs lg:text-sm  mx-auto">
            <p class="leading-tight ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta illum ratione omnis,<span class="w-2/5  overflow-hidden">praesentium nesciunt ex inventore non commodi sed illo repellat veniam aliquam quod harum. Esse modi eius cumque commodi.</span></p>
          </div>
        </div>
        <!-- hello -->
      
        <div class="border-2 border-green-900  shortbody ">
          <section>
            <div class="container">
              <div class="content">
                <div class="card">
                  <div class="card-content">
                    <div class="image">
                      <!-- <span class="overlay"></span> -->
                      <img src="@/assets/thumbnail-1.png" alt="" srcset="" class="card-img">
                    </div>
                  </div> 
                </div>
              </div>
  
            </div>
          </section>
        </div>
      

    </div>
    
  <!-- </div> -->
  </div>
</template>


<style>

</style>