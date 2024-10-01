import Establishment from "../../domain/entity/Establishment"

export default interface IEstablishmentRepository{
    save(establishment: Establishment): Promise<void>
    getEstablishmentByCnes(cnes: string): Promise<Establishment>
}