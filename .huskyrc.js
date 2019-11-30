const tasks = t => t.join(" && ");

module.exports = {
  hooks: {
    "pre-commit": tasks([
      "npm install",
      "npx tsc --noEmit",
      "npm run lint",
      "npx jest /src.*__spec__/ --coverage -i -ci",
      "npx jest /src.*__test__/ --coverage -i -ci"
    ])
  }
};
