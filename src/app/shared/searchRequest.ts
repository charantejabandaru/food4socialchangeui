export class SearchRequest{
    searchTerm : string;
    cityName : string;
    constructor(searchTerm : string){
        this.searchTerm = searchTerm;
        this.cityName = 'Hyderabad';
    }
}
