import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'authorNamePipe'
})
export class AuthorNamePipe implements PipeTransform {
    transform(value: any, authorname: string) : string{
        if(value === null && authorname)
            return authorname
        
        return value
    }
}