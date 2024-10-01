import { CNES } from "../vo/CNES";
import { CNPJ } from "../vo/CNPJ";
import Name from "../vo/Name";

export default class Establishment{

    private fantasy_name: Name
    private cnes: CNES
    private cnpj?: CNPJ
    private cnpj_maintainer?: CNPJ
    private company_name?: Name

    constructor(
        readonly id: string,
        fantasy_name: string, // Nome Fantasia
        cnes: string, // cnes - Cadastro Nacional de Estabelecimentos de Saúde
        cnpj?: string, // CNPJ - Cadastro Nacional da Pessoa Juridica
        cnpj_maintainer?: string, // CNPJ da empresa mantenedora
        company_name?: string // Nome Empresa Mantenedora
    ){

        if(cnpj == undefined && cnpj_maintainer == undefined) throw new Error("Unidade deve ter CNPJ próprio ou da mantenedora!")

        this.fantasy_name = new Name(fantasy_name)
        this.cnes = new CNES(cnes)
        this.cnpj = cnpj ? new CNPJ(cnpj) : undefined
        this.cnpj_maintainer = cnpj_maintainer ? new CNPJ(cnpj_maintainer) : undefined
        this.company_name = company_name ? new Name(company_name) : undefined
    }
    
    /**
     * Cria uma nova instância de Establishment
     * @param fantasy_name Nome Fantasia
     * @param cnes CNES - Cadastro Nacional de Estabelecimentos de Saúde
     * @param cnpj CNPJ - Cadastro Nacional da Pessoa Jurídica
     * @param cnpj_maintainer CNPJ da empresa mantenedora
     * @param company_name Nome Empresa Mantenedora
     * @returns Uma nova instância de Establishment
     */
    static create(fantasy_name: string, cnes: string, cnpj?: string, cnpj_maintainer?: string, company_name?: string){
        return new Establishment(crypto.randomUUID(),fantasy_name, cnes, cnpj, cnpj_maintainer, company_name)
    }

    getId(): string{
        return this.id
    }

    getFantasyName(): string{
        return this.fantasy_name.getValue()
    }


}