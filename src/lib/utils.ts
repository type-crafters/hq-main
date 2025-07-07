export const toReadableDate = (isoDate: string): string => {
    const date = new Date(isoDate);
    return `${String(date.getMonth() + 1).padStart(2, "0")}/${String(date.getDate()).padStart(2, "0")}/${date.getFullYear()}`;
}