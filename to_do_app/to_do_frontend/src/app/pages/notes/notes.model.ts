export class Note {
    _id: string;
    title: string;
    description: string;

    constructor(title: string, desc: string){
      this.title = title;
      this.description = desc;
    }
}