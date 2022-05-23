import { IAuthorDetails } from './authordetails';
import { BookChapters } from "./bookchapters";

export interface IBookDetails {
    id: Number,
    title: string,
    author: IAuthorDetails,
    publisher: string,
    edition: string,
    ISBN: string,
    publishingDate: string,
    chapters: BookChapters[]
}