<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import HeroSection from '@/components/HeroSection.vue'
import ClientJourney from '@/components/ClientJourney.vue'
import Discover from '@/components/Discover.vue'
import StepSection from '@/components/StepSection.vue'
import B2BSection from '@/components/B2BSection.vue'
import StatSection from '@/components/StatSection.vue'
import BlogSection from '@/components/BlogSection.vue'
import BookSection from './components/BookSection.vue';
import FooterSection from './components/FooterSection.vue';

</script>

<template>
  <div class="w-full min-h-screen bg-primary text-white">
    <Navbar />
    <div class="mx-auto md:min-h-screen bg-[url('https://forcythe.com/images/header-background.svg')] bg-no-repeat bg-top -m-10">
      <HeroSection />
      <ClientJourney />
    </div>
    <Discover />
    <StepSection />
    <B2BSection />
    <StatSection />
    <BlogSection />
    <BookSection />
    <FooterSection />
  </div>
</template>

<style>
.fade-in {
  animation: fade-in 1s ease-in-out;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>