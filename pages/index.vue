<script setup lang="ts">
document.title = "Home | Nutripurna";

const featured_courses = [
  {
    title: "Weight Management",
    description: "We help you to encompass long-term lifestyle strategies that promote healthy eating and daily physical activity",
    image: "/featured_courses/weight_management.png",
  },
  {
    title: "Detox and Cleanse",
    description: "We help to cleanse and nourish your body from inside out by eliminating toxins and promoting overall well-being.",
    image: "/featured_courses/detox_and_cleanse.png",
  },
  {
    title: "PCOS/PCOD",
    description: "We provide specialized programs to manage PCOS/PCOD symptoms through diet and exercise.",
    image: "/featured_courses/pcos_pcod.png",
  },
  {
    title: "Therapeutic Diet",
    description: "We offer personalized therapeutic diet plans to help manage various health conditions.",
    image: "/featured_courses/therapeutic_diet.png",
  },
  {
    title: "Kids Nutrition",
    description: "We provide nutrition plans tailored for children to ensure healthy growth and development.",
    image: "/featured_courses/kids_nutrition.png",
  },
];

const success_stories = [
  {
    content:
      "The weight management program completely transformed my life! I lost 15 kg in 4 months and learned sustainable eating habits. The personalized meal plans and regular check-ins kept me motivated throughout my journey.",
    star: "5",
    date: "02/07/2025",
    image: "/success_stories/rani_sharma.jpeg",
    name: "Rani Sharma",
    location: "Rajasthan, India",
  },
  {
    content:
      "Amazing experience with the detox program! I feel more energetic and my digestion has improved significantly. Dt. Pooja was very supportive and answered all my queries patiently.",
    star: "4.5",
    date: "10/08/2024",
    image: "/success_stories/sushil_bangar.jpeg",
    name: "Sushil Bangar",
    location: "Haryana, India",
  },
  {
    content:
      "वेट लॉस प्रोग्राम से मेरा वजन 12 किलो कम हुआ है। सही खाना और एक्सरसाइज के साथ मैंने अपना टारगेट हासिल किया। न्यूट्रिशनिस्ट ने बहुत अच्छी गाइडेंस दी और मुझे हमेशा मोटिवेट किया।",
    star: "4",
    date: "26/02/2025",
    image: "/success_stories/durgesh_chechani.jpeg",
    name: "Durgesh Chechani",
    location: "Rajasthan, India",
  },
  {
    content:
      "The therapeutic diet program helped me manage my diabetes effectively. My blood sugar levels are now stable and I've learned how to make healthier food choices. Highly recommended!",
    star: "4.5",
    date: "15/03/2025",
    image: "/success_stories/sandhya_rani_laddha.jpeg",
    name: "Sandhya Rani Laddha",
    location: "Mumbai, India",
  },
  {
    content:
      "My daughter's nutrition improved dramatically with their kids nutrition program. She's more active now and her eating habits have become much better. The team understands children's needs perfectly.",
    star: "5",
    date: "02/07/2023",
    image: "/success_stories/monita_bangar.jpg",
    name: "Monita Bangar",
    location: "Haryana, India",
  },
];

const key_benefits = [
  {
    icon: "stash:people-group-light",
    title: "Expert Instructor",
    description: "Learn from certified fitness professionals with years of experience",
  },
  {
    icon: "material-symbols:account-circle-full",
    title: "Personalized Training",
    description: "Receive customized workout plans tailored to your individual needs.",
  },
  {
    icon: "material-symbols:trophy-outline",
    title: "Proven Results",
    description: "Join thousands of satisfied clients who have achieved their fitness goals.",
  },
];

const stats = [
  {
    title: "Weight Management",
    description: "900+",
  },
  {
    title: "PCOS/PCOD",
    description: "450+",
  },
  {
    title: "Diabetic",
    description: "450+",
  },
  {
    title: "Kids Nutrition",
    description: "45+",
  },
];
</script>

<template>
  <main class="flex flex-col items-center justify-center space-y-16 md:space-y-24 lg:space-y-32 text-white px-4 md:px-6 lg:px-8">
    <!-- Hero Image with Text and Button -->
    <section class="relative flex items-center justify-center my-4 md:my-6 lg:my-9 w-full max-w-6xl">
      <NuxtImg src="/hero.png" class="rounded-[12px] w-full lg:w-3/4 h-auto object-cover" />
      <div class="absolute inset-0 flex flex-col justify-center items-center space-y-3 md:space-y-4 lg:space-y-6 px-4 text-center">
        <h1 class="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">Transform Your Body<br />Transform Your Life</h1>
        <h3 class="text-white/80 text-sm md:text-base max-w-2xl"
          >Professional fitness courses and personal training to help you achieve your goals.</h3
        >
        <NuxtLink to="/contact">
          <UButton size="lg" class="rounded-full px-4 md:px-6 hover:cursor-pointer mb-4 md:mb-6 lg:mb-8">Start Your Journey</UButton>
        </NuxtLink>
      </div>
    </section>

    <!-- Featured courses section -->
    <section class="w-full max-w-6xl">
      <h2 class="font-bold text-xl md:text-2xl text-[#00C16A] text-center md:text-left mb-6">Featured Courses</h2>
      <div>
        <UCarousel
          v-slot="{ item }"
          loop
          arrows
          dots
          :autoplay="{ delay: 5000 }"
          :items="featured_courses"
          :ui="{ item: 'basis-full sm:basis-1/2 lg:basis-1/3' }"
        >
          <div class="flex flex-col items-center justify-center p-3 md:p-4 space-y-2">
            <NuxtImg :src="item.image" class="w-full max-w-xs h-auto object-contain" />
            <h3 class="font-bold text-base md:text-lg mt-2 text-center">{{ item.title }}</h3>
            <p class="text-white/80 text-sm text-wrap text-center max-w-sm">{{ item.description }}</p>
          </div>
        </UCarousel>
      </div>
    </section>

    <!-- Success Stories Section -->
    <section class="w-full max-w-6xl">
      <h2 class="font-bold text-xl md:text-2xl text-[#00C16A] text-center md:text-left mb-6">Success Stories</h2>
      <div>
        <UCarousel v-slot="{ item }" loop arrows dots :items="success_stories" :ui="{ item: 'basis-full sm:basis-1/2 lg:basis-1/3' }">
          <div class="flex flex-col items-center justify-center p-3 md:p-4 space-y-2">
            <div
              class="bg-[#1C2621] flex flex-col items-center justify-center p-3 md:p-4 space-y-2 rounded-lg border-[#3B5447] border-[1px] w-full max-w-sm"
            >
              <p class="text-white/80 text-xs md:text-sm text-center leading-relaxed">{{ item.content }}</p>
              <StarRating :rating="item.star" :totalStars="5" />
              <span class="text-xs md:text-sm">{{ item.date }}</span>
            </div>
            <NuxtImg :src="item.image" class="size-24 md:size-32 object-cover rounded-full" />
            <h3 class="font-bold text-base md:text-lg mt-2 text-center">{{ item.name }}</h3>
            <span class="text-xs md:text-sm text-center">{{ item.location }}</span>
          </div>
        </UCarousel>
      </div>
    </section>

    <!-- Key Benefits Section -->
    <section class="w-full max-w-6xl">
      <h2 class="font-bold text-xl md:text-2xl mb-3 md:mb-4 text-[#00C16A] text-center md:text-left">Key Benefits</h2>
      <h4 class="text-xs md:text-sm text-white/80 font-extralight mb-6 md:mb-10 text-center md:text-left"
        >Discover why Nutripurna is the best choice for your fitness journey!</h4
      >
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-4">
        <div v-for="(item, index) in key_benefits" :key="index" class="w-full">
          <UPageCard :title="item.title" :description="item.description" :icon="item.icon" spotlight />
        </div>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        <div v-for="(item, index) in stats" :key="index" class="w-full">
          <UPageCard :title="item.title" :description="item.description" />
        </div>
      </div>
    </section>
  </main>
</template>
