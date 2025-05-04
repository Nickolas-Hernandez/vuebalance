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
    <div class="totals-overview">
        <div class="totals-overview__card">Income&colon; {{ formatCurrency(income) }}</div>
        <div class="totals-overview__card">Expenses&colon; {{ formatCurrency(expenses) }}</div>
        <div class="totals-overview__card">Balance&colon; {{ formatCurrency(balance) }}</div>
    </div>
</template>

<style></style>
