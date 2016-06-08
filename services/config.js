"use strict";
const fp_common_1 = require("fp-common");
const path = require("path");
let loader = new fp_common_1.Config(path.join(__dirname + '/../config'), 'config.yml');
let config = loader.config;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = config;
//# sourceMappingURL=config.js.map