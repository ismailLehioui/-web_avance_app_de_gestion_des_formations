export class Article {
    constructor(
        private title: String,
        private idAuthor: String,
        private description: String,
        private date: String,
        private content: String,
        private image: String,
        private tags: Array<String>,
        ){}
}
