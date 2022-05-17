<script setup>
import { ref } from "vue";
import { pic, about } from "../anya";
import Typing from "../components/Typing.vue";

function open(url) {
    window.open(url, "_blank");
}

let show_pic = ref(false);
let step = ref(0);

function update(delay = 0) {
    setTimeout(() => step.value++, delay);
}
</script>

<template>
    <div class="h-full w-full px-8 pt-8 sm:px-12 sm:pt-12 lg:px-16 lg:pt-16">
        <Typing
            text="About Me"
            @done="step++"
            class="mb-8 block text-2xl sm:text-3xl lg:text-4xl"
        />

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
                    :src="pic.icecream"
                    class="inline-block w-64 p-4 drop-shadow-lg md:w-96"
                    @load="show_pic = true"
                    v-show="step > 0 && show_pic"
                />
            </transition>
            <Typing
                :text="about"
                :speed="25"
                v-if="step > 0"
                @done="step++"
                class="flex-1 md:mx-4"
                @click="open('https://spy-family.net/')"
            />
        </div>
        <Typing
            text="My Pictures"
            :speed="50"
            v-if="step > 1"
            @done="step++"
            class="mt-4 block text-lg"
        />
        <div class="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
            <div
                v-for="i in pic.avatars.length - 1"
                :key="i"
                class="m-2 overflow-hidden rounded-full ring-fuchsia-400 transition-all hover:ring-4"
            >
                <transition
                    enter-active-class="duration-200 ease-out"
                    enter-from-class="transform opacity-0 translate-y-6"
                    enter-to-class="opacity-100 translate-y-0"
                    leave-active-class="duration-150 ease-in"
                    leave-from-class="opacity-100 translate-y-0"
                    leave-to-class="transform opacity-0 translate-y-6"
                    @enter="update(50)"
                >
                    <img
                        v-show="step > 1 + i"
                        :src="pic.avatars[i]"
                        class="w-full cursor-pointer transition-all hover:scale-125"
                        @click="open('https://spy-family.net/#tSpecial')"
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
