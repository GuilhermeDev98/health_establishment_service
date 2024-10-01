import Establishment from "../../src/domain/entity/Establishment"

test("Deve criar uma unidade de unidade de saúde", () => {
    const input = {
        nome_fantasia: "US MARIA DO CEU SANTOS PEREIRA",
        cnes: "0002259",
        cnpj_mantenedora: "18.825.319/0001-11",
        nome_empresarial: "SECRETARIA MUNICIPAL DE SAUDE DE ARACAJU"
    }
    const establishmentCreated = Establishment.create(input.nome_fantasia, input.cnes, null, input.cnpj_mantenedora, input.nome_empresarial)
    expect(establishmentCreated.id).toBeDefined()
    expect(establishmentCreated.getFantasyName()).toBe(input.nome_fantasia)
})

test("Não Deve criar a unidade de saúde se não tiver ao menos 1 cnpj", () => {
    const input = {
        nome_fantasia: "US MARIA DO CEU SANTOS PEREIRA",
        cnes: "0002259"
    }
    

    expect(() => {Establishment.create(input.nome_fantasia, input.cnes)}).toThrow("Unidade deve ter CNPJ próprio ou da mantenedora!")
})