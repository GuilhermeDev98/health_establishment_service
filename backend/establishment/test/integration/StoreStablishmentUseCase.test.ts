test("Deve salvar um establecimento de saúde", () => {
    const cnes = "0002259"

    const storeEstablishmentUseCase = new StoreEstablishmentUseCase()
    const establishment = storeEstablishmentUseCase.execute(cnes)

    expect(establishment.fantasy_name).toBe("US MARIA DO CEU SANTOS PEREIRA")
    expect(establishment.cnes).toBe("0002259")
    expect(establishment.cnpj).toBe(null)
    expect(establishment.cnpj_maintainer).toBe("13.128.780/0008-78")
    expect(establishment.company_name).toBe("MUNICIPIO DE ARACAJU")
})