<script setup>
import { projects } from "../anya";
import Typing from "../components/Typing.vue";
import Project from "../components/Project.vue";

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
            <Project
                v-for="(project, index) in projects"
                :key="index"
                :project="project"
                class="my-2 w-full rounded-md bg-white bg-opacity-50 p-4 shadow-md shadow-indigo-200"
            />
        </div>
        <div class="opacity-0">
            I'm so cute!<br />
            Waku Waku!
        </div>
    </div>
</template>
