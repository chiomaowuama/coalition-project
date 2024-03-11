<!-- HomeView.vue -->
<script setup>
import { ref } from "vue";
import Navbar from "@/components/navbar.vue";
import theFirst from "@/components/theFirst.vue";
import theSecond from "@/components/theSecond.vue";
import theThird from "@/components/theThird.vue";
import footerSection from "@/components/footerSection.vue";

const theFirstRef = ref(null);
const theSecondRef = ref(null);
const theThirdRef = ref(null);
const link = ref(null);




const useComponent = (component) => {
  if(component === 'theFirst'){
    scrollIntoComponent(theFirstRef);
  }
  if(component ==='theSecond'){
    scrollIntoComponent(theSecondRef, component);
  }
  if(component === 'theThird'){
    scrollIntoComponent(theThirdRef);
  }else(
    console.log("no")
    )
};

const scrollIntoComponent = (linking) => {
  // console.log('the  body', linking)
  // if (linking.value) {
  //   linking.value.scrollIntoView({ behavior: 'smooth' });
  // } else {
  //   console.error("Cannot scroll into component - no valid element found.");
  // }
  linking.value.scrollIntoView({ behavior: 'smooth' });
  linking.value = component;
  if(linking.value != false){
    console.log(linking.value)
    
  }else{
    console.log("no")
  }
      console.log('Scrolling into view:', myComponentRef.value);
        myComponentRef.value.scrollIntoView({ behavior: 'smooth' });
};
</script>

<template>
  <div>
    <navbar @goToComponent="useComponent" />
    <theFirst ref="theFirstRef" />
    <theSecond ref="theSecondRef" />
    <theThird ref="theThirdRef" />
    <footerSection />
  </div>
</template>

<style>
</style>