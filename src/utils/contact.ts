class Contact {
    id: number;
    name: string;
    tag: string;
    imageUrl: string;

    constructor(id: number, name: string, tag: string, imageUrl: string) {
        this.id = id;
        this.name = name;
        this.tag = tag;
        this.imageUrl = imageUrl;
    }
}

export default Contact;