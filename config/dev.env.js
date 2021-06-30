'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(
    prodEnv, {
        NODE_ENV: '"development"',
        BASE_API: '"/api',
        NODE_FOTON: '"profoton"',
        FOTON_API: '"/foton"'
    }
)
