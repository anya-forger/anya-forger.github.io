<script setup>
import Typing from "./Typing.vue";
defineProps({
    project: {
        type: Object,
        default: () => ({ name: "Project", description: "description.", image: "" }),
    },
});
</script>

<template>
    <div class="group flex flex-col justify-center lg:flex-row">
        <div
            class="flex h-full w-full items-center justify-center overflow-hidden rounded-md shadow lg:shadow-lg"
        >
            <img
                :src="project.image"
                class="w-full transition-all duration-200 ease-in group-hover:scale-105"
            />
        </div>
        <div class="h-full w-full p-4 pb-2">
            <Typing
                class="mb-2 block text-lg md:text-xl lg:mb-4 lg:text-2xl"
                :text="project.name"
                :speed="60"
            ></Typing>
            <Typing
                class="mb-2 block text-sm text-gray-600 md:text-base"
                :text="project.description"
                :speed="40"
                :delay="60 * project.name.length"
            ></Typing>
            <Typing
                class="block text-sm text-gray-400 md:text-base"
                :text="project.skills.join(', ')"
                :speed="40"
                :delay="60 * project.name.length + 40 * project.description.length"
            ></Typing>

            <div class="mt-4 flex flex-col justify-center">
                <a
                    :href="project.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-block"
                >
                    <Typing
                        class="w-full text-blue-400 transition-all duration-200 ease-in hover:text-blue-600"
                        :text="project.url"
                        :speed="40"
                        :delay="
                            60 * project.name.length +
                            40 * project.description.length +
                            40 * project.skills.join(', ').length
                        "
                    ></Typing>
                </a>
            </div>
        </div>
    </div>
</template>
