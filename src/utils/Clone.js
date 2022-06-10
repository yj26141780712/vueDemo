
function isObject(val) {
    return toString.apply(val) === '[object Object]'
}

function isArray(val) {
    return toString.apply(val) === '[object Array]'
}

export function deepClone(obj) {
    if (isObject(obj)) {
        const newObj = {};
        for (const key in obj) {
            newObj[key] = deepClone(obj[key]);
        }
        return newObj;
    } else if (isArray(obj)) {
        return [...obj.map(x => deepClone(x))];
    } else {
        return obj;
    }
}

