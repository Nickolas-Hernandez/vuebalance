<script setup>
import SummaryCard from '@/components/SummaryCard.vue';
import RecentTransactions from '@/components/RecentTransactions.vue';

import { useTransactions } from '@/composables/useTransactions';

const { transactions, income, expenses, balance } = useTransactions();
</script>

<template>
    <div id="dashboard">
        <SummaryCard :income="income" :balance="balance" :expenses="expenses" />
        <RecentTransactions :transactions="transactions" />
    </div>
</template>

<style></style>
