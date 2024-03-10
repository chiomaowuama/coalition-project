<script setup>
import { ref, onMounted } from 'vue';

let thescroll = ref(false)
let scrollmovment= ref(0)
console.log(thescroll)


function handlescroll(){
    scrollmovment.value = window.scrollY;
    
    scrollmovment > 0 ? thescroll.value.classList.add('include') : thescroll.value.classList.remove('include')
    // if(thescroll !== true){
    // }
    // else{
    //    console.log("not nice")
    // }
  

    // console.log("hello")
}

onMounted(() => {
    handlescroll()
    window.addEventListener("scroll", handlescroll)
})
 
    
</script>
<template>
    
    <div class="z-50 fixed w-full flex  justify-center items-center text-white" ref="thescroll" :class="scrollmovment > 0 ? 'scrolling' : ''">
        <div class=" w-5/6  flex py-2">
            <div class=" w-2/6 flex justify-center items-center ">
                <img src="@/assets/nav-logo.png" alt="" class="w-8 lg:w-10">
            </div>
            <div class="w-4/6 flex flex-col justify-items-end items-end">
                <ul class="  flex my-auto w-5/6 lg:w-3/6 justify-around text-xs lg:text-sm font-smallertext italic font-medium">
                    <li class="border border-white border-t-0 border-l-0 border-r-0">01. HISTORY</li>
                    <li class="border border-white border-t-0 border-l-0 border-r-0">02. TEAM</li>
                </ul>
            </div>
        </div>

    </div>
  
</template>


<style>

</style>