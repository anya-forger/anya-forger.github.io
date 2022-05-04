<script setup>
import Typing from "../components/Typing.vue";

function random_text(length = 32) {
    const dict = "abcdefghijklmnopqrstuvwxyz ";
    let text = "";
    for (let i = 0; i < length; i++) {
        text += dict[Math.floor(Math.random() * dict.length)];
    }
    return text;
}
</script>
<template>
    <div class="h-full w-full px-8 pt-16 sm:px-12 sm:pt-20 lg:px-16 lg:pt-24">
        <Typing text="Anya's Works" class="block text-2xl sm:text-3xl lg:text-4xl" />
        <div class="py-2">
            <div
                v-for="i in 100"
                :key="i"
                class="my-2 w-full rounded-md bg-white bg-opacity-50 p-4 shadow-md shadow-indigo-200"
            >
                <Typing
                    :text="`Project No.${i}`"
                    :speed="40"
                    :delay="800 + i * 480"
                    class="text-lg"
                />
                <Typing
                    :text="random_text(64 + Math.round(Math.random() * 192)) + '.'"
                    :speed="30"
                    :delay="1000 + i * 480"
                    class="hyphens-auto block break-all"
                    style="hyphens: auto"
                />
            </div>
        </div>
        <div class="opacity-0">
            I'm so cute!<br />
            Waku Waku!
        </div>
    </div>
</template>
