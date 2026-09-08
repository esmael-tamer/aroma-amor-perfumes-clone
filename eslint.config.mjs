import next from "eslint-config-next";

// FlatConfig arrays in Next.js need to be spread properly,
// But since eslint-config-next might be exporting an object instead of array depending on the version/export
// Let's ensure it's an array.
export default Array.isArray(next) ? [
  ...next,
  {
    rules: {
      "react/no-unescaped-entities": "off",
      "@next/next/no-img-element": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "react-hooks/exhaustive-deps": "off",
      "react-hooks/purity": "off",
      "react-hooks/set-state-in-effect": "off"
    }
  }
] : [
  {
    ...next,
  },
  {
    rules: {
      "react/no-unescaped-entities": "off",
      "@next/next/no-img-element": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "react-hooks/exhaustive-deps": "off",
      "react-hooks/purity": "off",
      "react-hooks/set-state-in-effect": "off"
    }
  }
];
