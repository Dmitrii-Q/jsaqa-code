const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });
  
  test("Without params throws exception", () => {
    expect(() => sorting.sortByName()).toThrow();
  });

  test("With empty array does not throw exception", () => {
    expect(() => sorting.sortByName([])).not.toThrow();
  });
});
