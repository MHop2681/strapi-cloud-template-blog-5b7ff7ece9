'use strict';

/**
 * surgical-imaging service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::surgical-imaging.surgical-imaging');
