<script setup lang="ts">
import { ref } from "vue";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Plans", path: "/plans" },
  { name: "Contact", path: "/contact" },
];

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<template>
  <nav
    class="flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5 border-b-[1px] relative"
  >
    <NuxtImg
      src="/logo.png"
      alt="Logo"
      class="w-32 sm:w-40 md:w-48 lg:w-52 h-auto"
    />

    <!-- Desktop Navigation -->
    <ul class="hidden md:flex space-x-4 lg:space-x-8 items-center">
      <li v-for="link in navLinks" :key="link.name">
        <NuxtLink
          :to="link.path"
          class="hover:text-[#00C16A] transition-colors"
          >{{ link.name }}</NuxtLink
        >
      </li>
      <li>
        <NuxtLink to="/contact"
          ><UButton
            size="lg"
            class="rounded-full px-3 lg:px-4 hover:cursor-pointer text-sm lg:text-base"
            >Sign Up</UButton
          ></NuxtLink
        >
      </li>
    </ul>

    <!-- Mobile Menu Button -->
    <button
      @click="toggleMobileMenu"
      class="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
      :class="{ 'space-y-0': isMobileMenuOpen }"
    >
      <span
        class="block w-6 h-0.5 bg-white transition-all duration-300"
        :class="{ 'rotate-45 translate-y-2': isMobileMenuOpen }"
      ></span>
      <span
        class="block w-6 h-0.5 bg-white transition-all duration-300"
        :class="{ 'opacity-0': isMobileMenuOpen }"
      ></span>
      <span
        class="block w-6 h-0.5 bg-white transition-all duration-300"
        :class="{ '-rotate-45 -translate-y-2': isMobileMenuOpen }"
      ></span>
    </button>

    <!-- Mobile Navigation -->
    <div
      v-show="isMobileMenuOpen"
      class="absolute top-full left-0 right-0 bg-[#121714] border-b-[1px] md:hidden z-50"
    >
      <ul class="flex flex-col space-y-4 p-4">
        <li v-for="link in navLinks" :key="link.name">
          <NuxtLink
            :to="link.path"
            @click="isMobileMenuOpen = false"
            class="block py-2 hover:text-[#00C16A] transition-colors"
          >
            {{ link.name }}
          </NuxtLink>
        </li>
        <li class="pt-2">
          <NuxtLink to="/contact" @click="isMobileMenuOpen = false">
            <UButton
              size="lg"
              class="rounded-full px-4 hover:cursor-pointer w-full"
              >Sign Up</UButton
            >
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
