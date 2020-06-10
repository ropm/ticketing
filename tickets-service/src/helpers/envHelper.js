// catch errors with env early, uses caching to access env vars

const envCache = {};

const envHelper = (key, defaultValue) => {
    if (!(key in process.env)) {
        if (defaultValue) return defaultValue;
        throw new Error(`Could not find key ${key} in process.env!!`);
    }

    if (envCache[key]) return envCache[key];

    envCache[key] = process.env[key];

    return envCache[key];
};

export default envHelper;
