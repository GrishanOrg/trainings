import nextVitals from "eslint-config-next/core-web-vitals";

const config = [
  {
    ignores: [".next/**", "node_modules/**", "templates/**"],
  },
  ...nextVitals,
];

export default config;

