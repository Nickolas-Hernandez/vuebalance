<script setup>
const emit = defineEmits(['close']);

function handleBackgroundClick(e) {
    if (e.target === e.currentTarget) emit('close');
}
</script>

<template>
    <section class="modal" @click="handleBackgroundClick">
        <div class="">
            <slot />
        </div>
    </section>
</template>

<style>
.modal {
    @apply fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center;
}

.modal > div {
    @apply bg-white p-6 rounded shadow-md w-full max-w-md;
}
</style>
