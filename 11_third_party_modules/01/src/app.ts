import _ from "lodash";
declare var GLOBAL: any;
// Installed lodash types to use it in ts
console.log(_.shuffle([1, 8, 20]));

// libs or code without types i.e.
console.log(GLOBAL);
