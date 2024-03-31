export class RecentPost {

    constructor(
        postDate: Date,
        describe: string,
        postImage: string, 
        photoUser: string
        ) {
            this.datePost = postDate
            this.description = describe
            this.imagePost = postImage
            this.userPhoto = photoUser
    }

    datePost: Date
    description: string
    imagePost: string
    userPhoto: string
}
