export function capitalizeLetter(text: string) {
    if (text.length === 0) {
        return text;
    }
    const firstLetter = text.charAt(0).toUpperCase();
    const restOfText = text.slice(1).toLowerCase();
    return firstLetter + restOfText;
}