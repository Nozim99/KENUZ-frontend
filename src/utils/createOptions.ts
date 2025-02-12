type OptionGroup = {
    title: string;
    options: {
        label: string;
        value: number;
    }[];
};

export function createOptions(amount: number): OptionGroup[] {
    const groups: OptionGroup[] = [];
    for (let start = 1; start <= amount; start += 20) {
        const end = Math.min(start + 19, amount);
        const group: OptionGroup = {
            title: `${start} - ${end} qismlar`,
            options: []
        };
        for (let i = start; i <= end; i++) {
            group.options.push({
                label: `${i}-qism`,
                value: i
            });
        }
        groups.push(group);
    }
    return groups;
}