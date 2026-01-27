class MoviesFiltersManager<T extends Record<string, unknown>> {
    private readonly params: URLSearchParams;

    constructor(search: string = window.location.search) {
        this.params = new URLSearchParams(search);
    }

    getAll(): Partial<T> {
        const result: Partial<T> = {};

        this.params.forEach((value, key) => {
            result[key as keyof T] = value as T[keyof T];
        });

        return result;
    }

    get<K extends keyof T>(key: K): T[K] | undefined {
        const value = this.params.get(String(key));
        return value === null ? undefined : (value as T[K]);
    }

    set<K extends keyof T>(key: K, value?: T[K]) {
        if (value === undefined || value === '') {
            this.params.delete(String(key));
        } else {
            this.params.set(String(key), String(value));
        }

        this.apply();
    }

    setMany(values: Partial<T>) {
        Object.entries(values).forEach(([key, value]) => {
            this.set(key as keyof T, value as T[keyof T]);
        });
    }

    clear() {
        this.params.forEach((_, key) => {
            this.params.delete(key);
        });
        this.apply();
    }

    private apply() {
        const query = this.params.toString();
        const url = query
            ? `${window.location.pathname}?${query}`
            : window.location.pathname;

        window.history.replaceState(null, '', url);
    }
}

export {MoviesFiltersManager}
