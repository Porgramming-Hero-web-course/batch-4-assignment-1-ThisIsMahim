const validateKeys=(obj: any, keys: string[]): boolean=> {
    for (let i = 0; i < keys.length; i++) {
        if (!(keys[i] in obj)) {
            return false;
        }
    }
    return true;
}