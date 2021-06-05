import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";

import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import commonjs from "@rollup/plugin-commonjs";

export default [
  {
    input: "./src/index.js",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
      },
      {
        file: "dist/index.es.js",
        format: "es",
        exports: "named",
      },
    ],
    plugins: [
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
      }),
      external(),
      resolve(),
      postcss({
        plugins: [],
        minimize: true,
      }),
      commonjs(),
      //   commonjs({
      //     include: "node_modules/**",
      //     // left-hand side can be an absolute path, a path
      //     // relative to the current directory, or the name
      //     // of a module in node_modules
      //     namedExports: {
      //       "node_modules/react/index.js": [
      //         "cloneElement",
      //         "createContext",
      //         "Component",
      //         "createElement",
      //       ],
      //       "node_modules/react-dom/index.js": ["render", "hydrate"],
      //       "node_modules/react-is/index.js": [
      //         "isElement",
      //         "isValidElementType",
      //         "ForwardRef",
      //       ],
      //     },
      // }),
      terser(),
    ],
  },
];
