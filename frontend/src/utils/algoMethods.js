
export const makeFirstLetterCapital = (input) => {
    if (typeof input !== "string" || input.length === 0) {
        return input;
    }
    input = input[0].toUpperCase() + input.slice(1).toLowerCase();
    return input;
};

export const handleLongText = (text, length) => {
    text = text.trim();
    text = text.replace(/\s+/g, ' ');
    return text.length > length ? text.substring(0, length) + "..." : text;
};

