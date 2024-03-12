    <script setup>
   
   import { computed, ref, onMounted } from 'vue';

// const myComponentRef = ref(null);
    const myComponentRef = ref(null);
    // const componentRef = ref(null);
    const scrollIntoView = () => {
      console.log('Scrolling into view:', myComponentRef.value);
        myComponentRef.value.scrollIntoView({ behavior: 'smooth' });
    };


    // carousel
    let carousel = ref(null);
 let firstCardWidth = 400;
 let isDragging = ref(false);
 let startX = 0
 let scrollLeftstrart = 0;
//  getting the number of cards that can fit the carousel at once 
 let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth)

 const carouselChildren = computed(() => {
    return [...carousel.value.children]
 })
//  insert copiesof the last few cards to begining of carousel for infinite scrolling
function begginincards(){
    carouselChildren.value.slice(-cardPerView).reverse().forEach(card => {
      carousel.value.insertAdjacentHTML("afterbegin", card.outerHTML)
    });
}

  //  insert copiesof the first few cards to end of carousel for infinite scrolling
  function endcards(){
      carouselChildren.value.slice(0, -cardPerView).forEach(card => {
        carousel.value.insertAdjacentHTML("beforeend", card.outerHTML)
      });

}

 
// the slide effect
const startDrag = (event) =>{
    isDragging.value = true;
    startX = event.pageX;
    scrollLeftstrart = carousel.value.scrollLeft;
    // console.log(scrollLeftstrart);

};
const handleDrag = (event) => {
    if(isDragging.value){
        const deltaX = event.pageX -startX;
        carousel.value.scrollLeft =  scrollLeftstrart - deltaX;
    }
   
};

const endDrag = () => {
  isDragging.value = false;
}

//  the nav slide effect
const arrowBtns = (direction) => {
    if(carousel.value){
        console.log(carousel.value)
        carousel.value.scrollLeft += direction === 'left' ? -firstCardWidth : firstCardWidth;
     
    }
}
function infiniteScroll(){
    // console.log(carousel.value.offsetWidth)
    if(carousel.value.scrollLeft === 0){
        carousel.value.classList.add("no-transition")
        carousel.value.scrollLeft = carousel.value.scrollWidth -(2 * carousel.value.offsetWidth)
        carousel.value.classList.remove("no-transition")
    }
    else if (Math.ceil(carousel.value.scrollLeft) === carousel.value.scrollWidth - carousel.value.offsetWidth){
        carousel.value.classList.add("no-transition")
        carousel.value.scrollLeft =  carousel.value.offsetWidth
        carousel.value.classList.remove("no-transition")
    }
}


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
            <p class="lg:text-2xl font-oswald font-bold  -ml-2 lg:-ml-5 -mb-2 lg:-mb-4 text-darkbluebg">HISTORY</p>
          </div>
          <div class="w-full pl-4 lg:w-9/12 lg:px-2 font-smallertext text-xs lg:text-sm  mx-auto">
            <p class="leading-tight ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta illum ratione omnis,<span class="w-2/5  overflow-hidden">praesentium nesciunt ex inventore non commodi sed illo repellat veniam aliquam quod harum. Esse modi eius cumque commodi.</span></p>
          </div>
        </div>
        <!-- hello -->
      
        <div class="border-2 border-green-900   ">
          <p>here goes the slider</p>
          </div>
      

    </div>
    
  <!-- </div> -->
  </div>
</template>


<style>

</style>