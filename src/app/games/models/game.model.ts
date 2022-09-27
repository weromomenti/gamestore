export class Game {
    private id : number;
    private PEGIRatingID: number;
    private name : string;
    private description : string;
    private price : number;
    private image : string;
    private genreIds : number[];
    private commendIds : number[];

    constructor(id: number, PEGIRatingID: number, name : string, description : string, price : number, image : string, genreIds : number[], commendIds : number[]){
        this.id = id;
        this.PEGIRatingID = PEGIRatingID;
        this.name = name;
        this.description = description;
        this.price = price;
        this.image = image;
        this.genreIds = genreIds;
        this.commendIds = commendIds;
    }
}