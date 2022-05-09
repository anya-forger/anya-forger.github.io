<script setup>
import { ref } from "vue";
import MdiGithub from "~icons/mdi/github";
import MdiInstagram from "~icons/mdi/instagram";
import { pic, titles } from "../anya";
import Typing from "../components/Typing.vue";

let T = ref(0);
let timer_id = setInterval(() => {
    T.value = T.value += 100;
    if (T.value >= 30_000) {
        clearInterval(timer_id);
    }
}, 100);

const width = screen.width;
</script>
<template>
    <div class="w-full overflow-y-auto px-8 pt-16 sm:px-12 sm:pt-20 lg:px-16 lg:pt-24">
        <div class="flex w-full flex-col md:flex-row">
            <div class="w-full md:w-1/2">
                <Typing text="Anya Forger" class="mb-2 block text-2xl sm:text-3xl lg:text-4xl" />
                <Typing v-if="T > 1200" :text="titles.join(', ')" :speed="60" />
                <a
                    v-if="T > 4000"
                    class="mt-8 flex items-center text-lg text-gray-500 transition-all hover:text-gray-700"
                    href="https://github.com/anya-forger"
                    target="_blank"
                >
                    <MdiGithub class="mr-1 inline-block" />
                    <Typing v-if="T > 4000" text="GitHub" :speed="60" />
                </a>
                <a
                    v-if="T > 4600"
                    class="mt-4 flex items-center text-lg text-gray-500 transition-all hover:text-gray-700"
                    href="https://www.instagram.com/spy_family_official/"
                    target="_blank"
                >
                    <MdiInstagram class="mr-1 inline-block" />
                    <Typing v-if="T > 4600" text="Instagram" :speed="60" />
                </a>
            </div>
            <div class="w-full overflow-hidden drop-shadow-2xl">
                <transition
                    enter-active-class="duration-200 ease-out"
                    enter-from-class="transform opacity-0 translate-y-12 md:translate-x-12"
                    enter-to-class="opacity-100 translate-y-0 md:translate-x-0"
                    leave-active-class="duration-150 ease-in"
                    leave-from-class="opacity-100 translate-y-0 md:translate-x-0"
                    leave-to-class="transform opacity-0 translate-y-12 md:translate-x-12"
                >
                    <img
                        v-show="T > (width >= 768 ? 1200 : 5400)"
                        :src="pic.casual_large"
                        class="-translate-y-0 scale-[200%] md:-translate-y-20 md:scale-150 lg:-translate-y-32 lg:scale-125"
                    />
                </transition>
            </div>
        </div>
        <div class="opacity-0">
            I'm so cute!<br />
            Waku Waku!
        </div>
    </div>
</template>
