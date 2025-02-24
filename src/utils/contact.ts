class Contact {
    id: string;
    name: string;
    tag: string;
    imageUrl: string;

    constructor(id: string, name: string, tag: string, imageUrl: string) {
        this.id = id;
        this.name = name;
        this.tag = tag;
        this.imageUrl = imageUrl;
    }
}

export default Contact;