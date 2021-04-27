const search = require("../search");

test("expect 53 match sentences", () => {
  expect(search("walt disney")).toBe(
    "Foram encontradas 53 ocorrências pelo termo walt disney."
  );
});
