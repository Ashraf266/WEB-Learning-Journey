import { NgFor } from "@angular/common";
import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";


@Component({
    selector: 'courses',
    imports: [NgFor],
    //This called a template {{ any valid JS expression }}
    template: `
    <h2>{{ getTitle() }}</h2>
    <ul>
        <li *ngFor="let course of courses"> {{ course }} </li>
    </ul>
    `, 
    standalone: true,
    providers: [CoursesService] // when we add a provider angular will add a single sentence of that component
})
export class CoursesComponent {
    title = "List of courses";
    courses: string[];

    constructor(service: CoursesService)
    {
        this.courses = service.getCourses();    
        console.log("the value of courses is " + this.courses);
    }
    // option: write Logic for calling HTTP service in this component but not good for unit testing
    // component should not include any logic besides the presentation logic

    getTitle() {
        return this.title;
    }
    
}