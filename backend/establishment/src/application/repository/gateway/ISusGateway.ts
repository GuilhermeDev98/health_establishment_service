import Establishment from "../../../domain/entity/Establishment";

export default interface ISusGateway {
    getAll(): Promise<Establishment[]>
    getEstablishmentByCnes(cnes: string): Promise<Establishment | undefined>
}