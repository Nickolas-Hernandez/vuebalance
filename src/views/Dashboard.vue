<script setup>
import SummaryCard from '@/components/SummaryCard.vue';
import RecentTransactions from '@/components/RecentTransactions.vue';
import AddTransactionForm from '@/components/AddTransactionForm.vue';
import Modal from '@/components/Modal.vue';

import { ref } from 'vue';

import { useTransactions } from '@/composables/useTransactions';

const { transactions, addTransaction, updateTransaction, income, expenses, balance } =
    useTransactions();

const showModal = ref(false);

const editingTransaction = ref(null);

function handleEdit(txn) {
    editingTransaction.value = { ...txn };
    showModal.value = true;
}

function handleTransactionSubmit(txn) {
    if (editingTransaction.value) {
        updateTransaction(editingTransaction.value.id, txn);
        editingTransaction.value = null;
    } else {
        addTransaction(txn);
    }

    showModal.value = false;
}

function closeModal() {
    showModal.value = false;
    editingTransaction.value = null;
}
</script>

<template>
    <div id="dashboard">
        <SummaryCard :income="income" :balance="balance" :expenses="expenses" />
        <RecentTransactions :transactions="transactions" @edit="handleEdit" />
        <Modal v-if="showModal" @close="closeModal">
            <AddTransactionForm
                :transaction="editingTransaction"
                @submit="handleTransactionSubmit" />
        </Modal>
        <button @click="showModal = true" class="add-transaction-modal-toggle">+</button>
    </div>
</template>

<style>
.add-transaction-modal-toggle {
    @apply fixed bottom-6 right-6 bg-blue-600 text-white rounded-full w-14 h-14 flex items-center justify-center text-2xl shadow-lg hover:bg-blue-700 transition;
}
</style>
