<template>
  <div>
    <gt-about-header />
    <gt-order-draft />
    <gt-about />
  </div>
</template>

<script setup>
import gtAbout from "@/components/home/gt-about.vue";
import gtAboutHeader from "@/components/home/gt-aboutHeader.vue";
import gtOrderDraft from "@/components/home/gt-orderDraft.vue";
import { onMounted } from "vue";
onMounted(() => {
  document
    .getElementById("hero-section")
    .scrollIntoView({ block: "end", inline: "nearest" });
});
</script>

<style>
</style>