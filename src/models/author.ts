// The definition of an author
export interface IAuthor {
    id: string;
    firstName: string;
    lastName: string;
}

// When showing authors in a combo box, we must reformat it
// to value and text
export interface IAuthorFormatted {
    value: string;
    text: string;
}