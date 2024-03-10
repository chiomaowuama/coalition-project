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
  components[component]?.value?.$el.scrollIntoView({ behavior: 'smooth' });
  console.log(component);
}
  
// const useCompononet = (component) => components[component]?.value?.scrollIntoView({ behavior: 'smooth' });

    
</script>
<template>
  <div>
    <navbar :goToComponent="useComponent" />
    <theFirst />
    <theSecond ref="component.theSecond" />
    <theThird ref="component.theThird"/>
    <footerSection />
    
    
    <!-- hello -->
  </div>
</template>


<style>

</style>