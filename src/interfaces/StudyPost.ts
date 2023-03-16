export interface StudyPost {
    id?: number;
    groupName: string;
    gitURL: string;
    blogURL: string;
    leader : object;
    members : Array<object>;
    tags : Array<string>;
    details : Array<object>;
}
