<script setup>
import { ref } from 'vue';

const props = defineProps({
    modelValue: String, // for v-model binding
});

const emit = defineEmits(['update:modelValue']);

function selectFilter(type) {
    emit('update:modelValue', type);
}
</script>

<template>
    <section class="transaction-type-filter">
        <button
            @click="() => selectFilter('all')"
            :class="[
                'px-3 py-1 rounded border',
                modelValue === 'all' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700',
            ]">
            All
        </button>
        <button
            @click="() => selectFilter('income')"
            :class="[
                'px-3 py-1 rounded border',
                modelValue === 'income' ? 'bg-green-600 text-white' : 'bg-white text-gray-700',
            ]">
            Income
        </button>
        <button
            @click="() => selectFilter('expense')"
            :class="[
                'px-3 py-1 rounded border',
                modelValue === 'expense' ? 'bg-red-600 text-white' : 'bg-white text-gray-700',
            ]">
            Expense
        </button>
    </section>
</template>

<style>
.transaction-type-filter {
    @apply flex gap-2 mt-6 text-sm px-4;
}
</style>
