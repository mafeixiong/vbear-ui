import Vue from "vue";
import Icon from "./icon"

Vue.component("v-icon", Icon);
const req = require.context("./svg", true, /\.svg$/);
const requireAll = requireContext => requireContext.keys().map(requireContext);
requireAll(req);