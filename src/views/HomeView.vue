<script setup>
import { ref } from "vue";
import navbar from "@/components/navbar.vue";
import theFirst from "@/components/theFirst.vue";
import theSecond from "@/components/theSecond.vue";
import theThird from "@/components/theThird.vue";
import footerSection from "@/components/footerSection.vue";

const components ={
  thefirst: ref(null),
  theSecond: ref(null),
  theThird: ref(null),

}

const useComponent = (component) =>{
  console.log('Scrolling to',component);
  components[component]?.value?.scrollIntoView({ behavior: 'smooth' });
  // console.log(element)
  // const element = document.getElementById(component); // Assuming you have an id on your elements
  // element.scrollIntoView({ behavior: 'smooth' });
  // components[component]?.value?.$el.scrollIntoView({ behavior: 'smooth' });
}
  
// const useCompononet = (component) => components[component]?.value?.scrollIntoView({ behavior: 'smooth' });

    
</script>
<template>
  <div>
    <navbar @goToComponent="useComponent" />
    <theFirst />
    <theSecond ref="theSecond" />
    <theThird ref="theThird"/>
    <footerSection />
    
    
    <!-- hello -->
  </div>
</template>


<style>

</style>