/**
 * Функция для подстановки аргументов в url
 *
 * # Пример использования
 * replaceArgs ('http://google.com/:id', { ':id': 123 })
 *
 * @param url
 * @param args
 */

const replaceArgs = (url: string, args: Record<string, string>): string => {
    const path = Object.keys(args).reduce((currentUrl, key) =>
        key.startsWith(':') ? currentUrl.replace(key, encodeURIComponent(args[key])) : currentUrl, url);

    const query = new URLSearchParams(
        Object.fromEntries(Object.entries(args).filter(([key]) => !key.startsWith(':')))
    ).toString();

    return query ? `${path}?${query}` : path;
};

export {replaceArgs}
