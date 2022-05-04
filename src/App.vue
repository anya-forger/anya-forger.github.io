<script setup>
import { useRouter } from "vue-router";
import { StarportCarrier } from "vue-starport";
import Nav from "./components/Nav.vue";

const router = useRouter();

const search = new URLSearchParams(window.location.search);
const from = search.get("from");

if (from) {
    console.log("Redirecting to", from);
    router.push(from);
}
</script>

<template>
    <StarportCarrier>
        <Nav />

        <div class="mt-16 h-[calc(100vh-4rem)] w-full overflow-y-auto overflow-x-hidden">
            <router-view v-slot="{ Component }">
                <transition
                    mode="out-in"
                    enter-active-class="duration-200 ease-out"
                    enter-from-class="transform opacity-0"
                    enter-to-class="opacity-100"
                    leave-active-class="duration-150 ease-in"
                    leave-from-class="opacity-100"
                    leave-to-class="transform opacity-0"
                >
                    <component :is="Component" />
                </transition>
            </router-view>
        </div>
    </StarportCarrier>
</template>
