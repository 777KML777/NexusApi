import { IPublicationRepository } from "../../Domain/Entities/Publication/IPublicationRepository"
import { PublicationEntity } from "../../Domain/Entities/Publication/PublicationEntity";
import { AppDataSource } from "../../data-source";



export class PublicationRepository implements
    IPublicationRepository {


    constructor() {
        console.log('Bati no construtor')

    }

    save(obj: PublicationEntity):
        PublicationEntity {

        return obj
    };

    getPostByEnterpriseId = async (enterpriseId: number):
        Promise<PublicationEntity[]> => {

        var x: PublicationEntity[]

        x = await _repository.findBy({
            enterpriseId: enterpriseId
        })

        return x


    };

    getPostByUserId(userId: number):
        PublicationEntity[] {
        var x: PublicationEntity[];

        return x;
    };


}


const _repository =
    AppDataSource.getRepository(PublicationEntity);

