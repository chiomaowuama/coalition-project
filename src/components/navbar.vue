<script setup>
import { ref, toRefs, reactive, getCurrentInstance, onMounted } from 'vue';

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


// const myObject = reactive({
//   theSecond: ref(),
//   theThird: ref(),
// });

// const { theSecond, theThird } = toRefs(myObject);

// // Now you can access the attributes like this
// const hrefSecond = theSecond.value.getAttribute('href');
// const hrefThird = theThird.value.getAttribute('href');
// console.log(hrefSecond)
// console.log(hrefThird)
// // 

function setActiveLink(){
  let allref =  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();

        let allref = document.querySelector(this.getAttribute('href')). scrollIntoView({
            behavior: 'smooth'
        })

    })
  })
  console.log(allref);
    // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
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
                <a  href="#theFirst" @click="setActiveLink('theFirst')" :class="{ active: activeLink === 'theFirst'}"><img src="@/assets/nav-logo.png" alt="" class="w-8 lg:w-10"></a>
            </div>
            <div class="w-4/6 flex flex-col justify-items-end items-end">
                <ul class="  flex my-auto w-5/6 lg:w-3/6 justify-around text-xs lg:text-sm font-smallertext italic font-medium">
                    <li class="border border-white border-t-0 border-l-0 border-r-0 cursor-pointer "><a href="#theSecond" ref="theSecond"  @click="setActiveLink()" :class="{ active: activeLink === 'theSecond'}" >01. HISTORY</a></li>
                    <li class="border border-white border-t-0 border-l-0 border-r-0 cursor-pointer"><a href="#theThird" ref="theThird" @click="setActiveLink()" :class="{ active: activeLink === 'theThird' }">02. TEAM </a></li>
                </ul>
            </div>
        </div>

    </div>
  
</template>


<style>

</style>