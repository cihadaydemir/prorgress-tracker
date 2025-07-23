const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// Add support for .mjs files.
config.resolver.sourceExts.push('mjs');
// Add support for .sql files.
config.resolver.sourceExts.push('sql');

module.exports = config;