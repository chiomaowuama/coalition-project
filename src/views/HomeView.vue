<!-- HomeView.vue -->
<script setup>
import { ref } from "vue";
import Navbar from "@/components/navbar.vue";
import theFirst from "@/components/theFirst.vue";
import theSecond from "@/components/theSecond.vue";
import theThird from "@/components/theThird.vue";
import footerSection from "@/components/footerSection.vue";


// };
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