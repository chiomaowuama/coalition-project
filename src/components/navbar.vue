<script setup>
import { ref, defineProps, defineEmits, getCurrentInstance, onMounted } from 'vue';

let thescroll = ref(false)
let scrollmovment= ref(0)
// console.log(thescroll)


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

const activeLink = ref('');
const props = defineProps(['goToComponent']);
const { emit } = defineEmits();
const instance = getCurrentInstance();

const setActiveLink = (link) => {
  activeLink.value = link;
  instance.emit('goToComponent', link);
};


onMounted(() => {
    handlescroll()
    window.addEventListener("scroll", handlescroll)
})
 
    
</script>
<template>
    
    <div class="z-50 fixed w-full flex  justify-center items-center text-white" ref="thescroll" :class="scrollmovment > 0 ? 'scrolling' : ''">
        <div class=" w-5/6  flex py-2">
            <div class=" w-2/6 flex justify-center items-center ">
                <a @click="setActiveLink('theFirst')" :class="{ active: activeLink === 'theFirst'}"><img src="@/assets/nav-logo.png" alt="" class="w-8 lg:w-10"></a>
            </div>
            <div class="w-4/6 flex flex-col justify-items-end items-end">
                <ul class="  flex my-auto w-5/6 lg:w-3/6 justify-around text-xs lg:text-sm font-smallertext italic font-medium">
                    <li class="border border-white border-t-0 border-l-0 border-r-0 cursor-pointer"><a href="#theSecond" @click="setActiveLink('theSecond')" :class="{ active: activeLink === 'theSecond'}" >01. HISTORY</a></li>
                    <li class="border border-white border-t-0 border-l-0 border-r-0 cursor-pointer"><a @click="setActiveLink('theThird')" :class="{ active: activeLink === 'theThird' }">02. TEAM </a></li>
                </ul>
            </div>
        </div>

    </div>
  
</template>


<style>

</style>