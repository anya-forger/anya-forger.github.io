<script setup>
import { pic } from "../anya";

const links = [
    { text: "Anya", url: "/" },
    { text: "About", url: "/about" },
    { text: "Projects", url: "/projects" },
];
</script>

<template>
    <div class="fixed top-0 left-0 z-30 h-28 w-full">
        <div
            :class="[
                'flex',
                'h-16',
                'w-full',
                'rounded-b-lg',
                'bg-gradient-to-r',
                'from-violet-800',
                'to-indigo-600',
                'pl-24',
                'shadow-lg',
                'shadow-indigo-400',
                'md:pl-32',
                'transition-all',
                'duration-200',
                $route.path === '/about' ? 'pl-8 md:pl-8' : '',
            ]"
        >
            <div
                v-for="(link, index) in links"
                :key="index"
                class="mx-2 flex h-16 items-center justify-center sm:w-24"
            >
                <router-link
                    :to="link.url"
                    class="text-xl text-white opacity-80 shadow-cyan-300 drop-shadow-xl transition-all duration-200 hover:text-2xl hover:opacity-100"
                    >{{ link.text }}</router-link
                >
            </div>
        </div>

        <transition
            enter-active-class="duration-200 ease-out"
            enter-from-class="transform -translate-y-32"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="duration-200 ease-in"
            leave-from-class="opacity-100 translate-x-0"
            leave-to-class="transform -translate-x-32"
        >
            <div
                class="absolute top-4 left-4 z-50 h-20 w-20 overflow-hidden rounded-full bg-pink-200 shadow-md shadow-blue-300 ring-1 ring-violet-700 md:h-24 md:w-24"
                v-if="$route.path !== '/about'"
            >
                <img
                    :src="pic.uniform"
                    class="w-full translate-y-12 scale-[180%] transition-all duration-200 hover:rounded-xl hover:pt-5 md:translate-y-14 md:hover:pt-7"
                />
            </div>
        </transition>
    </div>
</template>
