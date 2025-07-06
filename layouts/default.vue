<template>
  <main class="bg-[#121714] min-h-screen text-white">
    <Header />
    <div class="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 2xl:px-40">
      <slot />
    </div>
    <br />
    <div class="w-full z-[2] p-2 sm:p-3 md:p-4 bg-[#121714]">
      <Footer />
    </div>
  </main>
</template>
