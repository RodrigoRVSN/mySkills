describe("Example", () => {
  // Antes de todos os testes
  beforeAll(async () => {
    await device.launchApp();
  });

  // Antes de cada teste
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should have hello screen", async () => {
    await expect(element(by.id("hello"))).toBeVisible();
  });

  it("check new skill", async () => {
    const inputNewSkill = await element(by.id("input-new"));
    const buttonAdd = await element(by.id("button-add"));
    const flatListSkills = await element(by.id("flat-list-skills"));

    await inputNewSkill.tap();
    await inputNewSkill.typeText("Typescript");
    await buttonAdd.tap();

    expect(element(by.id("flat-list-skills"))).toBeVisible();
  });
});
