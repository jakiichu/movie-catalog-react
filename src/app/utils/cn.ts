const cn = (...args: unknown[])=>args.filter(value => Boolean(value)).join(' ').trim()

export {cn}
