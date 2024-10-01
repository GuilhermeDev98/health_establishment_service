import IEstablishmentRepository from "../IEstablishmentRepository";
import IUseCase from "./IUseCase";

export default class StoreEstablishmentUseCase implements IUseCase{

    constructor(readonly establishmentRepository: IEstablishmentRepository) {}

    async execute(input: Input): Promise<Output> {

        const establishment = await this.establishmentRepository.getEstablishmentByCnes(input.cnes)

        if(!establishment) {
            throw new Error("Estabelecimento não encontrado!")
        }

        return {
            fantasy_name: establishment.getId(),
            cnes: "",
            cnpj: "",
            cnpj_maintainer: "",
            company_name: ""
        }
    }

}

type Input = {
    cnes: string
}

type Output = {
    fantasy_name: string,
    cnes: string,
    cnpj: string | undefined,
    cnpj_maintainer: string | undefined,
    company_name: string | undefined,
}