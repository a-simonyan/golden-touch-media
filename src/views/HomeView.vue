<template>
  <div>
    <gt-hero-section />
    <gt-video-section />
    <gt-our-services />
    <gt-music-production />
    <gt-our-works />
    <gt-testimonials />
    <gt-our-team />
    <gt-questions />
  </div>
</template>

<script setup>
import gtHeroSection from "@/components/home/gt-heroSection.vue";
import gtVideoSection from "@/components/home/gt-videoSection.vue";
import gtOurServices from "@/components/home/gt-ourServices.vue";
import gtMusicProduction from "@/components/home/gt-musicProduction.vue";
import gtOurWorks from "@/components/home/gt-ourWorks.vue";
import gtTestimonials from "@/components/home/gt-testimonials.vue";
import gtOurTeam from "@/components/home/gt-ourTeam.vue";
import gtQuestions from "@/components/home/gt-questions.vue";
import { onMounted } from "vue";
onMounted(() => {
  document
    .getElementById("hero-section")
    .scrollIntoView({ block: "end", inline: "nearest" });
});
</script>
