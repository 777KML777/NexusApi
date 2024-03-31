import { json } from "body-parser";
import { HomeDto } from "../Dto/HomeDto";
import { RecentPost } from "../Dto/RecentPost";
import { PublicationRepository } from "../Repositories/Publication/PublicationRepository";

export class HomeServices {

    private _publicationRepository = new PublicationRepository();

    constructor() {

    }

    async homeData(): Promise<HomeDto> {

        // Deixando a variável aqui dentro já iria fazer com que a cada request instanciasse um novo json
        let jsonData: HomeDto = new HomeDto();

        let publishes = await this._publicationRepository.getPostByEnterpriseId(1)

        jsonData.enterpriseId = publishes[0].enterpriseId;
        publishes.forEach((item, index) => {

            jsonData.recentPosts.push(new RecentPost(
                item.datePost,
                item.description,
                item.image,
                item.userId.toString()))

        })

        return jsonData
    }

}