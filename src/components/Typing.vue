<script setup>
import { ref } from "vue";

const props = defineProps({
    text: { type: String, default: "" },
    speed: { type: Number, default: 100 },
    cursor: { type: String, default: "|" },
    delay: { type: Number, default: 0 },
});

const emit = defineEmits(["waiting", "typing", "done"]);

let current_length = 0;
let timer_id = 0;
let show_cursor = ref(false);
let current_text = ref("");

setTimeout(start, props.delay);
emit("waiting");

function start() {
    show_cursor.value = true;
    timer_id = setInterval(update, props.speed);
    emit("typing");
}

function update() {
    current_text.value = props.text.slice(0, current_length++);
    if (current_text.value.length >= props.text.length) {
        done();
    }
}

function done() {
    show_cursor.value = false;
    clearInterval(timer_id);
    emit("done");
}
</script>

<template>
    <span>
        <span class="inline-block whitespace-pre-wrap">
            {{ current_text }} <span v-if="show_cursor" class="-ml-1"> {{ props.cursor }} </span>
        </span>
    </span>
</template>
