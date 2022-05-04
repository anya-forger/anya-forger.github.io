<script setup>
import { ref } from "vue";
import anya from "../anya";
import Typing from "../components/Typing.vue";

let show_pic = ref(false);
setTimeout(() => {
    show_pic.value = true;
}, 400);

let T = ref(0);
let timer_id = setInterval(() => {
    T.value = T.value += 20;
    if (T.value >= 30_000) {
        clearInterval(timer_id);
    }
}, 20);

function open() {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
}
</script>
<template>
    <div class="h-full w-full px-8 pt-8 sm:px-12 sm:pt-12 lg:px-16 lg:pt-16">
        <Typing text="About Me" class="mb-8 block text-2xl sm:text-3xl lg:text-4xl" />

        <div class="flex w-full flex-col justify-end md:flex-row-reverse">
            <transition
                enter-active-class="duration-200 ease-out"
                enter-from-class="transform opacity-0 translate-x-12"
                enter-to-class="opacity-100 translate-x-0"
                leave-active-class="duration-150 ease-in"
                leave-from-class="opacity-100 translate-x-0"
                leave-to-class="transform opacity-0 translate-x-12"
            >
                <img
                    :src="anya.icecream"
                    class="inline-block w-64 p-4 drop-shadow-lg md:w-96"
                    v-if="show_pic"
                />
            </transition>
            <Typing
                :text="
                    [
                        'My name is Anya Forger. I am 6 years old now!',
                        'I am studing in Cecile Hall at Eden Academy.',
                        '',
                        'By the way, I am staring in a new anime called SPY x FAMILY.',
                    ].join('\n')
                "
                :delay="1000"
                :speed="40"
                class="flex-1 md:mx-4"
                @click="open"
            />
        </div>
        <Typing v-if="T > 7200" text="My Pictures" :speed="50" class="text-lg" />
        <div class="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
            <div v-for="i in 40" :key="i">
                <transition
                    enter-active-class="duration-200 ease-out"
                    enter-from-class="transform opacity-0 translate-y-6"
                    enter-to-class="opacity-100 translate-y-0"
                    leave-active-class="duration-150 ease-in"
                    leave-from-class="opacity-100 translate-y-0"
                    leave-to-class="transform opacity-0 translate-y-6"
                >
                    <img v-if="T > 7600 + i * 100" :src="anya[`icon_${i}`]" class="w-full p-2" />
                </transition>
            </div>
        </div>
        <div class="opacity-0">I'm so cute!</div>
    </div>
</template>
