<script setup>
import { ref, watch } from 'vue';

const emit = defineEmits(['submit']);

const props = defineProps({
    transaction: {
        type: Object,
        default: null,
    },
});

const description = ref('');
const amount = ref('');
const date = ref(new Date().toISOString().slice(0, 10));
const category = ref('');
const type = ref('expense');

watch(
    () => props.transaction,
    txn => {
        if (txn) {
            description.value = txn.description;
            amount.value = txn.amount;
            date.value = txn.date;
            category.value = txn.category;
            type.value = txn.type;
        } else {
            resetForm();
        }
    },
    { immediate: true },
);

function handleSubmit() {
    if (!description.value || !amount.value || !type.value || !date.value) return;

    const transaction = {
        description: description.value,
        amount: parseFloat(amount.value),
        date: date.value,
        category: category.value,
        type: type.value,
    };

    emit('submit', transaction);

    resetForm();
}

function resetForm() {
    description.value = '';
    amount.value = '';
    date.value = new Date().toISOString().slice(0, 10);
    category.value = '';
    type.value = 'expense';
}
</script>

<template>
    <form @submit.prevent="handleSubmit" class="add-transaction-form">
        <h3 class="text-center">Add Transaction</h3>
        <div>
            <label>Description</label>
            <input v-model="description" type="text" required />
        </div>

        <div>
            <label>Amount</label>
            <input v-model="amount" type="number" min="0.01" step="0.01" required />
        </div>

        <div>
            <label>Date</label>
            <input v-model="date" type="date" required />
        </div>

        <div>
            <label>Category</label>
            <input v-model="category" type="text" />
        </div>

        <div>
            <label>Type</label>
            <select v-model="type">
                <option value="expense">Expense</option>
                <option value="income">Income</option>
            </select>
        </div>

        <button type="submit">Save Transaction</button>
    </form>
</template>

<style>
.add-transaction-form {
    @apply space-y-4 p-4 bg-white rounded shadow;
}

.add-transaction-form label {
    @apply block text-sm font-medium text-gray-700;
}

.add-transaction-form input:not([type='submit']) {
    @apply w-full mt-1 border rounded px-3 py-2 text-sm;
}

.add-transaction-form select {
    @apply w-full mt-1 border rounded px-3 py-2 text-sm;
}

.add-transaction-form button[type='submit'] {
    @apply bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700;
}
</style>
