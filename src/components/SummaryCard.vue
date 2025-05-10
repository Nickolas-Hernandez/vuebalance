<script setup>
const { income, expenses, balance } = defineProps(['income', 'expenses', 'balance']);

const formatCurrency = value => {
    if (value == null) return 'N/A';
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    }).format(value);
};
</script>

<template>
    <div
        class="totals-overview totals-overview grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg shadow-sm">
        <div class="totals-overview__card">
            <h3>Income</h3>
            <p>{{ formatCurrency(income) }}</p>
        </div>
        <div class="totals-overview__card">
            <h3>Expenses</h3>
            <p>{{ formatCurrency(expenses) }}</p>
        </div>
        <div class="totals-overview__card">
            <h3>Balance</h3>
            <p>{{ formatCurrency(balance) }}</p>
        </div>
    </div>
</template>

<style>
.totals-overview__card {
    @apply bg-white p-4 rounded-md shadow text-center border;
}

.totals-overview__card h3 {
    @apply text-sm font-medium text-gray-500;
}

.totals-overview__card p {
    @apply mt-1 text-xl font-semibold text-blue-600;
}
</style>
