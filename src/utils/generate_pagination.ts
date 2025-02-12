export const generate_pagination = (total_page: number, current_page: number) => {
    if (total_page <= 1 || current_page > total_page) return [];

    if (total_page < 5) {
        const pages = [];
        for (let i = 1; i <= total_page; i++) {
            pages.push(i);
        }
        return pages;
    }

    if (total_page === 5) {
        if (current_page === 1) {
            return [1, 2, "...", 5];
        } else if (current_page === 5) {
            return [1, "...", 4, 5];
        } else {
            return [1, 2, 3, 4, 5];
        }
    }

    if (total_page === 7 && current_page === 4) return [1, 2, 3, 4, 5, 6, 7];
    if (current_page === 1) return [1, 2, "...", total_page];
    if (current_page === 2) return [1, 2, 3, "...", total_page];
    if (current_page === 3) return [1, 2, 3, 4, "...", total_page];
    if (current_page > 3 && current_page < total_page - 2) return [1, "...", current_page - 1, current_page, current_page + 1, "...", total_page];

    if (current_page === total_page - 2) return [1, "...", total_page - 3, total_page - 2, total_page - 1, total_page];
    if (current_page === total_page - 1) return [1, "...", total_page - 2, total_page - 1, total_page];
    if (current_page === total_page) return [1, "...", total_page - 1, total_page];

    const result = [];
    for (let i = 1; i <= total_page; i++) {
        result.push(i);
    }
    return result;
}