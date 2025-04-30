# Finely

**Finely** is a simple, elegant personal finance tracker built with Vue.js and the Composition API. Easily track your income, expenses, and spending habits—all in a clean, responsive interface. Built to sharpen Vue 3 skills while offering practical, real-world functionality.

---

## Features

- Add, edit, and delete income and expense transactions  
- Categorize transactions (e.g. Food, Rent, Entertainment)  
- Filter by category or transaction type  
- Visual dashboard with spending summaries  
- View total balance and recent transactions  
- Data persisted with `localStorage`  
- Built with Vue 3 Composition API  
- Responsive layout for desktop and mobile

---

## Technologies Used

- [Vue.js 3](https://vuejs.org/) (Composition API)  
- [Vite](https://vitejs.dev/) – lightning-fast dev server  
- [Chart.js](https://www.chartjs.org/) or [ApexCharts](https://apexcharts.com/vue-chart-demos/) *(optional)*  
- [Tailwind CSS](https://tailwindcss.com/) *(optional)*  
- `localStorage` for data persistence

---

## Project Structure

<pre lang="markdown"><code>
├── components/           # Reusable UI components (forms, lists, modals, etc.)
│   ├── TransactionForm.vue
│   ├── TransactionList.vue
│   ├── CategorySelector.vue
│   ├── ChartSummary.vue
│   └── Modal.vue
│
├── composables/          # Logic and reusable state with Composition API
│   ├── useTransactions.js
│   └── useCategories.js
│
├── views/                # Route views/pages
│   ├── Dashboard.vue
│   └── Transactions.vue
│
├── App.vue               # Root component
└── main.js               # App entry point
</code></pre> 

---

## Getting Started

```bash
# Install dependencies
npm install

# Start the local development server
npm run dev

# Build for production
npm run build

---

## Potential Improvements

- Add user authentication and cloud data sync (e.g., Firebase, Supabase)
- Set monthly budgets with spending alerts
- Export transactions to CSV
- Dark mode toggle
- PWA support for offline access
- Recurring transactions and reminders
- Multiple account support (e.g., checking, savings, credit)
- Currency formatting and internationalization

---

## Screenshots

### Dashboard View
![Dashboard Screenshot](screenshots/dashboard.png)

### Add Transaction Modal
![Add Transaction Modal](screenshots/add-transaction.png)

### Category Selector
![Category Selector](screenshots/category-selector.png)

### Responsive Mobile View
![Mobile View]