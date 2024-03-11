module.exports = {
  extends: [
    "@it-incubator/eslint-config",
    "next/core-web-vitals",
  ],
  overrides: [
    {
      files: ["*.js", "*.ts", "*.tsx", "*.jsx"],
      rules: {
        "react-hooks/rules-of-hooks": "off",
        "no-console": "off",
      },
    },
  ],
};