import { sum } from "../component/Extra/sum";

test("Sum calculation", () => {
  const result = sum(3, 4);
  expect(result).toBe(7);
});
