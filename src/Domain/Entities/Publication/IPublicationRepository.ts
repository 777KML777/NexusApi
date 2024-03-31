import { PublicationEntity } from "./PublicationEntity";

export interface IPublicationRepository {
    save: (obj: PublicationEntity) => PublicationEntity 

     getPostByEnterpriseId:(enterpriseId: number) => 
        Promise<PublicationEntity[]>

    getPostByUserId: (userId: number) =>
        PublicationEntity[]
}