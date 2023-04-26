import { loadCsvData } from "../src/loadCsvData.js";

describe("csv data loading test", () => {
  it("should be able to read the taco csv file and convert into an array of objects", async () => {
    // Arrange and Act
    const sampleObject = {
      descricao: "Tucupi, com pimenta-de-cheiro",
      tipo: "Alimentos preparados",
      energia: 27,
      proteina: 2.1,
      lipideos: 0.3,
      carboidrato: 4.7,
      fibra: 0.2,
    };
    const filename = "taco-tratada (1).csv";
    const csvData = await loadCsvData(filename);
    // Assert

    expect(csvData).toHaveLength(597);
    expect(csvData).toEqual(
      expect.arrayContaining([expect.objectContaining(sampleObject)])
    );
  });
  // it("should not be able to read an non existing taco csv file", async () => {
  //   // Arrange and Act

  //   const filename = "nonexistingfile.csv";
  //   // Assert

  //   // await expect(async () => {
  //   //   await loadCsvData(filename);
  //   // }).rejects;
  //   try {
  //     await loadCsvData(filename);
  //   } catch (e) {
  //     expect(e).toEqual(expect.stringContaining("Something went wrong"));
  //   }
  // });
});
