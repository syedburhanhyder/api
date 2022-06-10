import { Owner } from "./owner";

export class Items {
    public answer_count: number;
    public content_license: string;
    public creation_date: number
    public is_answered: boolean
    public last_activity_date: number
    public last_edit_date: number
    public link: string;
    public owner: Owner[];
    public  question_id: number;
    public score: number;
    public tags: [];
    public title: string;
    public view_count: number;
}
