
export const parseData = (data) => {
    return JSON.parse(JSON.stringify(data));
};

export const isObjectEmpty = (obj) => {
    return Object.keys(obj).length === 0;
};

export const isEmpty = (item) => {
    if (typeof item === 'number') {
        return false;
    }
    return item.trim() === '';
};

export const isArrayNotEmpty = (arr) => {
    return arr.length > 0;
};
