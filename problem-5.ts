function getProperty<T, Q extends keyof T>(obj: T, key: Q): T[Q] {
    return obj[key];
}