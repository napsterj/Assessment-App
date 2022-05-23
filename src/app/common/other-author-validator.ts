import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function otherAuthorValidator() : ValidatorFn {
    return (control: AbstractControl) : ValidationErrors | null => {
        const givenName = control.get('givenName').value
        const otherAuthorName = control.get('other').value;        
        
        if(givenName !== "" && givenName !== "Other") {
            return null
        }
        
        if(givenName === "Other" && otherAuthorName === ""){
            return {'empty':true};
        } 
        if(givenName === "Other" && otherAuthorName){
                 return {'empty':false};
        }
        return null
    }
}