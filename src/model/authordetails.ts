export interface IAuthorDetails {
    id?: Number;
    givenName: string;
    surName?: string;
    dateOfBirth?: string;
    bio?: string;
}
export class AuthorDetails implements IAuthorDetails {
    id?: Number;
    givenName: string;
    surName?: string;
    dateOfBirth?: string;
    bio?: string;
    
    constructor(id: Number, givenName: string, surName: string, dateOfBirth: string, bio: string) {
        this.id = id;
        this.givenName = givenName;
        this.surName = surName;
        this.dateOfBirth = dateOfBirth;
        this.bio = bio;
    }
}