<script setup>
const emit = defineEmits(['close']);

function handleBackgroundClick(e) {
    if (e.target === e.currentTarget) emit('close');
}
</script>

<template>
    <div
        class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
        @click="handleBackgroundClick">
        <div class="bg-white p-6 rounded shadow-md w-full max-w-md">
            <slot />
        </div>
    </div>
</template>
