<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import * as z from "zod";
import type { FormSubmitEvent } from "@nuxt/ui";
import emailjs from "@emailjs/browser";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  mobile: z
    .string()
    .min(10, "Mobile number must be at least 10 digits")
    .regex(/^\+?[\d\s\-\(\)]+$/, "Invalid mobile number format"),
  preferredCourse: z.object({
    label: z.string().min(2, "Preferred course label must be at least 2 characters"),
    value: z.string().min(2, "Preferred course value must be at least 2 characters"),
  }),
});

type Schema = z.output<typeof schema>;

const state = reactive<Partial<Schema>>({
  name: undefined,
  email: undefined,
  mobile: undefined,
  preferredCourse: undefined,
});

const courseOptions = [
  { label: "Weight Management", value: "weight-management" },
  { label: "PCOS/PCOD", value: "pcos-pcod" },
  { label: "Detox and Cleanse", value: "detox-cleanse" },
  { label: "Kids Nutrition", value: "kids-nutrition" },
  { label: "Therapeutic Diet", value: "therapeutic-diet" },
  { label: "General Nutrition Consultation", value: "general-nutrition" },
];

const countries = ref<Array<{ label: string; value: string }>>([]);
const pending = ref(true);
const error = ref(null);
const isSubmitting = ref(false);

const showToast = (message: string, type: "success" | "error" | "warning" | "info" = "success") => {
  const toastElement = document.createElement("div");
  toastElement.className = `fixed top-4 right-4 z-50 max-w-sm p-4 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out ${getToastStyles(
    type
  )}`;
  toastElement.innerHTML = `
    <div class="flex items-center">
      <div class="mr-3">
        ${getToastIcon(type)}
      </div>
      <div class="flex-1">
        <p class="text-sm font-medium">${message}</p>
      </div>
      <button class="ml-3 text-white hover:text-gray-200 focus:outline-none" onclick="this.parentElement.parentElement.remove()">
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
      </button>
    </div>
  `;

  document.body.appendChild(toastElement);

  setTimeout(() => {
    if (toastElement.parentNode) {
      toastElement.remove();
    }
  }, 5000);
};

const getToastStyles = (type: string) => {
  switch (type) {
    case "success":
      return "bg-green-600 text-white";
    case "error":
      return "bg-red-600 text-white";
    case "warning":
      return "bg-yellow-600 text-white";
    case "info":
      return "bg-blue-600 text-white";
    default:
      return "bg-gray-600 text-white";
  }
};

const getToastIcon = (type: string) => {
  switch (type) {
    case "success":
      return '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>';
    case "error":
      return '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path></svg>';
    case "warning":
      return '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>';
    case "info":
      return '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>';
    default:
      return "";
  }
};

async function onSubmit(event: FormSubmitEvent<Schema>) {
  isSubmitting.value = true;

  try {
    const templateParams = {
      to_email: "pooja.maheshwari@nutripurna.in",
      from_name: event.data.name,
      from_email: event.data.email,
      mobile: event.data.mobile,
      preferred_course: event.data.preferredCourse.label,
    };

    const response = await emailjs.send("service_928kf1m", "template_itzqguz", templateParams, "CEj6mMz2uJ4vLL2de");

    console.log("Email sent successfully:", response);

    showToast("Thank you for your inquiry. We'll get back to you soon!", "success");

    state.name = undefined;
    state.email = undefined;
    state.mobile = undefined;

    state.preferredCourse = undefined;
  } catch (error) {
    console.error("Email sending failed:", error);

    showToast("Sorry, there was an issue sending your message. Please try again or contact us directly.", "error");
  } finally {
    isSubmitting.value = false;
  }
}

async function onError(event: any) {
  showToast("Please check the form and fix any errors before submitting.", "error");
}
</script>

<template>
  <section class="flex flex-col items-center justify-center p-4 md:p-6 lg:p-8">
    <h1 class="font-bold text-white text-2xl md:text-3xl lg:text-4xl text-center">Contact Us</h1>
  </section>

  <section class="px-4 md:px-6 lg:px-8 max-w-4xl mx-auto">
    <UCard>
      <UForm :schema="schema" :state="state" class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8" @submit="onSubmit" @error="onError">
        <UFormField label="Full Name" name="name" class="col-span-1">
          <template #label="{ label }">
            <span class="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              <UIcon name="i-heroicons-user" class="w-4 h-4" />
              {{ label }}
            </span>
          </template>
          <UInput v-model="state.name" placeholder="Enter your full name" size="lg" icon="i-heroicons-user" :disabled="isSubmitting" class="w-full" />
        </UFormField>

        <UFormField label="Email Address" name="email" class="col-span-1">
          <template #label="{ label }">
            <span class="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              <UIcon name="i-heroicons-envelope" class="w-4 h-4" />
              {{ label }}
            </span>
          </template>
          <UInput
            v-model="state.email"
            type="email"
            placeholder="your.email@example.com"
            size="lg"
            icon="i-heroicons-envelope"
            :disabled="isSubmitting"
            class="w-full"
          />
        </UFormField>

        <UFormField label="Mobile Number" name="mobile" class="col-span-1">
          <template #label="{ label }">
            <span class="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              <UIcon name="i-heroicons-phone" class="w-4 h-4" />
              {{ label }}
            </span>
          </template>
          <UInput
            v-model="state.mobile"
            type="tel"
            placeholder="9876543210"
            size="lg"
            icon="i-heroicons-phone"
            :disabled="isSubmitting"
            class="w-full"
          />
        </UFormField>

        <UFormField label="Preferred Course" name="preferredCourse" class="col-span-1">
          <template #label="{ label }">
            <span class="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              <UIcon name="i-heroicons-academic-cap" class="w-4 h-4" />
              {{ label }}
            </span>
          </template>
          <USelectMenu
            v-model="state.preferredCourse"
            :items="courseOptions"
            placeholder="Choose your area of interest"
            size="lg"
            icon="i-heroicons-academic-cap"
            :disabled="isSubmitting"
            value-attribute="value"
            option-attribute="label"
            by="label"
            class="w-full"
          />
        </UFormField>

        <div class="flex justify-center items-center w-full col-span-1 md:col-span-2 mt-4">
          <UButton
            size="lg"
            :loading="isSubmitting"
            :disabled="isSubmitting"
            class="font-semibold py-3 px-6 md:px-8 rounded-lg max-w-xs flex justify-center items-center hover:cursor-pointer"
            icon="i-heroicons-paper-airplane"
          >
            <span v-if="!isSubmitting">Send Message</span>
            <span v-else>Sending...</span>
          </UButton>
        </div>
      </UForm>

      <template #footer>
        <div
          class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500 dark:text-gray-400 text-center"
        >
          <div class="flex items-center gap-2">
            <UIcon name="i-heroicons-shield-check" class="w-4 h-4 text-green-500" />
            <span>Secure & Private</span>
          </div>
          <div class="flex items-center gap-2">
            <UIcon name="i-heroicons-clock" class="w-4 h-4 text-blue-500" />
            <span>24hr Response</span>
          </div>
          <div class="flex items-center gap-2">
            <UIcon name="i-heroicons-star" class="w-4 h-4 text-yellow-500" />
            <span>Expert Advice</span>
          </div>
        </div>
      </template>
    </UCard>
  </section>
</template>
