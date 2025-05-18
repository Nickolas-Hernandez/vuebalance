<script setup>
const props = defineProps({
    currentPage: Number,
    totalPages: Number,
});

const emit = defineEmits(['prev', 'next']);
</script>

<template>
    <section class="pagination-controls px-4">
        <button @click="$emit('prev')" :disabled="currentPage === 1">Previous</button>

        <span>Page {{ currentPage }} of {{ totalPages }}</span>

        <button @click="$emit('next')" :disabled="currentPage === totalPages">Next</button>
    </section>
</template>

<style>
.pagination-controls {
    @apply flex items-center justify-between mt-4 text-sm text-gray-700;
}

.pagination-controls button {
    @apply px-3 py-1 rounded border disabled:opacity-50;
}
</style>
