export interface Post {
    id: number;
    
    title: string;
    content: string;

    author: string;

    likes   : number;
    favorite: boolean;
    
    publicationDate: Date;
    
}