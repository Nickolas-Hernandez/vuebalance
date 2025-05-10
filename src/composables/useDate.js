export function useDate() {
    const formatDate = date => {
        if (!date) return 'N/A';

        const d = new Date(date);

        return d.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
    };

    return { formatDate };
}
