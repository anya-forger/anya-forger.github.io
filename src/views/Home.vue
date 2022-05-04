<script setup>
import anya from "../anya";
import Typing from "../components/Typing.vue";
</script>
<template>
    <div class="w-full overflow-y-auto px-8 pt-16 sm:px-12 sm:pt-20 lg:px-16 lg:pt-24">
        <Typing text="Anya Forger" class="mb-2 block text-2xl sm:text-3xl lg:text-4xl" />
        <Typing text="Hello! Welcome to my website!" :delay="1200" :speed="60" />
        <div class="w-full overflow-hidden drop-shadow-2xl">
            <img
                :src="anya.casual_large"
                class="-translate-y-0 scale-[200%] md:-translate-y-20 md:scale-150 lg:-translate-y-32 lg:scale-125"
            />
        </div>
    </div>
</template>
