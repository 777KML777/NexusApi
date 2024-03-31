import { RecentPost } from "./RecentPost"

export class HomeDto {

    constructor (){
        this.enterpriseId = 0
        this.recentPosts = []
    }
    
    enterpriseId: number
    recentPosts: RecentPost[] 

}