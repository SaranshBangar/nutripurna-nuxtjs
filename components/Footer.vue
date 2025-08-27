<script setup lang="ts">
const currentYear = new Date().getFullYear();

const socialLinks = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/nutripurna?mibextid=ZbWKwL",
    icon: "lineicons:facebook",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/invites/contact/?i=1e2q71167id6&utm_content=hfempjl",
    icon: "lucide:instagram",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/pooja-maheshwari-nutripurna",
    icon: "uil:linkedin",
  },
  {
    name: "YouTube",
    url: "https://youtube.com/@nutripurnabypooja2812",
    icon: "uil:youtube",
  },
];
</script>

<template>
  <footer class="px-4 py-2">
    <div class="flex justify-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
      <a
        v-for="link in socialLinks"
        :key="link.name"
        :href="link.url"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="link.name"
        class="flex items-center justify-center size-5 sm:w-10 sm:h-10 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
      >
        <UIcon
          :name="link.icon"
          class="w-4 h-4 sm:w-5 sm:h-5 text-gray-300 hover:text-white transition-colors"
        />
      </a>
    </div>
    <p class="text-center text-xs sm:text-sm text-gray-400">
      © Nutripurna {{ currentYear }}. All rights reserved.
    </p>
  </footer>
</template>
