<script setup>
import { useCurrency } from '@/composables/useCurrency';

const { formatCurrency } = useCurrency();

const { income, expenses, balance } = defineProps(['income', 'expenses', 'balance']);
</script>

<template>
    <section class="totals-overview">
        <div class="totals-overview__card">
            <h3>Income</h3>
            <p class="text-green-600">{{ formatCurrency(income) }}</p>
        </div>
        <div class="totals-overview__card">
            <h3>Expenses</h3>
            <p class="text-red-600">{{ formatCurrency(expenses) }}</p>
        </div>
        <div class="totals-overview__card">
            <h3>Balance</h3>
            <p class="text-blue-600">{{ formatCurrency(balance) }}</p>
        </div>
    </section>
</template>

<style>
.totals-overview {
    @apply grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg shadow-sm;
}

.totals-overview__card {
    @apply bg-white p-4 rounded-md shadow text-center border;
}

.totals-overview__card h3 {
    @apply text-sm font-medium text-gray-500;
}

.totals-overview__card p {
    @apply mt-1 text-xl font-semibold;
}
</style>
