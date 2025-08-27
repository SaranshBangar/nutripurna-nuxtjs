<script setup lang="ts">
const plans = [
  {
    title: "Weight Management",
    description:
      "We help you to encompass long-term lifestyle strategies that promote healthy eating and daily physical activity",
    image: "/featured_courses/weight_management.png",
  },
  {
    title: "Detox and Cleanse",
    description:
      "We help to cleanse and nourish your body from inside out by eliminating toxins and promoting overall well-being.",
    image: "/featured_courses/detox_and_cleanse.png",
  },
  {
    title: "PCOS/PCOD",
    description:
      "We provide specialized programs to manage PCOS/PCOD symptoms through diet and exercise.",
    image: "/featured_courses/pcos_pcod.png",
  },
  {
    title: "Therapeutic Diet",
    description:
      "We offer personalized therapeutic diet plans to help manage various health conditions.",
    image: "/featured_courses/therapeutic_diet.png",
  },
  {
    title: "Kids Nutrition",
    description:
      "We provide nutrition plans tailored for children to ensure healthy growth and development.",
    image: "/featured_courses/kids_nutrition.png",
  },
];

const tiers = [
  // Weight Management
  [
    {
      id: "basic",
      title: "Basic Plan",
      price: "₹9,999",
      billingCycle: "/4 weeks",
    },
    {
      id: "pro",
      title: "Pro Plan",
      price: "₹26,999",
      billingCycle: "/12 weeks",
      highlight: true,
    },
  ],
  // Detox and Cleanse
  [
    {
      id: "basic",
      title: "Most Popular Plan",
      price: "₹4,500",
      billingCycle: "/3 weeks",
      highlight: true,
    },
  ],
  // PCOS/PCOD
  [
    {
      id: "basic",
      title: "Basic Plan",
      price: "₹9,999",
      billingCycle: "/4 weeks",
    },
    {
      id: "pro",
      title: "Pro Plan",
      price: "₹26,999",
      billingCycle: "/12 weeks",
      highlight: true,
    },
  ],
  // Therapeutic Diet
  [
    {
      id: "basic",
      title: "Basic Plan",
      price: "₹11,999",
      billingCycle: "/4 weeks",
    },
    {
      id: "pro",
      title: "Pro Plan",
      price: "₹29,999",
      billingCycle: "/12 weeks",
      highlight: true,
    },
  ],
  // Kids Nutrition
  [
    {
      id: "basic",
      title: "Basic Plan",
      price: "₹6,499",
      billingCycle: "/4 weeks",
    },
    {
      id: "pro",
      title: "Pro Plan",
      price: "₹14,999",
      billingCycle: "/12 weeks",
      highlight: true,
    },
  ],
];

const sections = [
  // Weight Management
  [
    {
      title: "Features",
      features: [
        {
          title: "Detailed recipe information",
          tiers: {
            basic: true,
            pro: true,
          },
        },
        {
          title: "Weekly dietary modification",
          tiers: {
            basic: true,
            pro: true,
          },
        },
        {
          title: "Customised diet plan",
          tiers: {
            basic: true,
            pro: true,
          },
        },
        {
          title: "Healthy meal options",
          tiers: {
            basic: true,
            pro: true,
          },
        },
        {
          title: "Daily chat support",
          tiers: {
            basic: true,
            pro: true,
          },
        },
      ],
    },
  ],
  // Detox and Cleanse
  [
    {
      title: "Features",
      features: [
        // 7 days Cleanse Detox Diet
        // 7 days workout plan
        // Daily chat support
        // Grocery list
        {
          title: "7 days workout plan",
          tiers: {
            basic: true,
          },
        },
        {
          title: "7 days Cleanse Detox Diet",
          tiers: {
            basic: true,
          },
        },
        {
          title: "Daily chat support",
          tiers: {
            basic: true,
          },
        },
        {
          title: "Grocery list",
          tiers: {
            basic: true,
          },
        },
      ],
    },
  ],
  // PCOS/PCOD
  [
    {
      title: "Features",
      features: [
        {
          title: "Cure hormonal imbalance",
          tiers: {
            basic: true,
            pro: true,
          },
        },
        {
          title: "Weekly dietary modification",
          tiers: {
            basic: true,
            pro: true,
          },
        },
        {
          title: "Customised diet plan",
          tiers: {
            basic: true,
            pro: true,
          },
        },
        {
          title: "Healthy meal options",
          tiers: {
            basic: true,
            pro: true,
          },
        },
        {
          title: "Target fat loss",
          tiers: {
            basic: true,
            pro: true,
          },
        },
        {
          title: "Daily chat support",
          tiers: {
            basic: true,
            pro: true,
          },
        },
        {
          title: "Complimentary workout videos",
          tiers: {
            basic: false,
            pro: true,
          },
        },
      ],
    },
  ],
  // Therapeutic Diet
  [
    {
      title: "Features",
      features: [
        {
          title:
            "People suffering with diabetes, thyroid, cardiac health, cholesterol management, hypertension control, Arthritis, gout",
          tiers: {
            basic: true,
            pro: true,
          },
        },
        {
          title: "Detailed recipe information",
          tiers: {
            basic: true,
            pro: true,
          },
        },
        {
          title: "Customised diet plan",
          tiers: {
            basic: true,
            pro: true,
          },
        },
        {
          title: "Healthy meal options",
          tiers: {
            basic: true,
            pro: true,
          },
        },
        {
          title: "Daily chat support",
          tiers: {
            basic: true,
            pro: true,
          },
        },
        {
          title: "Weekly in depth follow up",
          tiers: {
            basic: true,
            pro: true,
          },
        },
      ],
    },
  ],
  // Kids Nutrition
  [
    {
      title: "Features",
      features: [
        {
          title: "Age group 6-12 years",
          tiers: {
            basic: true,
            pro: true,
          },
        },
        {
          title: "For those who suffer from weakness, lack of concentration",
          tiers: {
            basic: true,
            pro: true,
          },
        },
        {
          title: "Weight Management ( weight gain/loss)",
          tiers: {
            basic: true,
            pro: true,
          },
        },
        {
          title: "Poor sight and other deficiencies",
          tiers: {
            basic: true,
            pro: true,
          },
        },
        {
          title: "Children with medical issues",
          tiers: {
            basic: true,
            pro: true,
          },
        },
      ],
    },
  ],
];
</script>

<template>
  <section class="flex flex-col items-center justify-center p-4 md:p-6 lg:p-8">
    <h1
      class="font-bold text-white text-2xl md:text-3xl lg:text-4xl text-center"
    >
      Featured Plans
    </h1>
  </section>

  <section class="px-4 md:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-4 mb-4 max-w-6xl mx-auto">
      <div
        v-for="(item, index) in plans"
        :key="index"
        class="w-full hover:cursor-pointer"
      >
        <UCollapsible>
          <UPageCard
            :title="item.title"
            :description="item.description"
            :orientation="'vertical'"
            reverse
            variant="soft"
            class="select-none"
          >
            <NuxtImg
              :src="item.image"
              :alt="item.title"
              class="w-full h-48 md:h-auto md:w-48 lg:w-64 object-contain mx-auto"
            />
          </UPageCard>

          <template #content>
            <section
              v-if="item.title === 'Weight Management'"
              class="px-2 md:px-4"
            >
              <br />
              <div class="overflow-x-auto">
                <UPricingTable :tiers="tiers[0]" :sections="sections[0]" />
              </div>
            </section>
            <section
              v-if="item.title === 'Detox and Cleanse'"
              class="px-2 md:px-4"
            >
              <br />
              <div class="overflow-x-auto">
                <UPricingTable :tiers="tiers[1]" :sections="sections[1]" />
              </div>
            </section>
            <section v-if="item.title === 'PCOS/PCOD'" class="px-2 md:px-4">
              <br />
              <div class="overflow-x-auto">
                <UPricingTable :tiers="tiers[2]" :sections="sections[2]" />
              </div>
            </section>
            <section
              v-if="item.title === 'Therapeutic Diet'"
              class="px-2 md:px-4"
            >
              <br />
              <div class="overflow-x-auto">
                <UPricingTable :tiers="tiers[3]" :sections="sections[3]" />
              </div>
            </section>
            <section
              v-if="item.title === 'Kids Nutrition'"
              class="px-2 md:px-4"
            >
              <br />
              <div class="overflow-x-auto">
                <UPricingTable :tiers="tiers[4]" :sections="sections[4]" />
              </div>
            </section>

            <div class="flex flex-col items-center justify-center mt-4 px-4">
              <NuxtLink to="/contact"
                ><UButton
                  size="lg"
                  class="rounded-full px-4 md:px-6 hover:cursor-pointer mb-4 md:mb-8 w-full max-w-xs"
                  >Join us</UButton
                ></NuxtLink
              >
            </div>
          </template>
        </UCollapsible>
      </div>
    </div>
  </section>
</template>
