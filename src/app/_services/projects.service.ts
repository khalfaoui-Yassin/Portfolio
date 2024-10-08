import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    { id: 0, name: "Car Rentel (AutoHire)", pictures: [ "../../assets/4.png","../../assets/5.png","../../assets/3.png","../../assets/1.png","../../assets/2.png"], projectLink: "https://github.com/khalfaoui-Yassin", summary: "AutoHire is a comprehensive web application designed for seamless car rental management, enabling users to browse available vehicles, make reservations, and manage bookings with ease.", description: "AutoHire offers a user-friendly interface for both customers and administrators. Customers can easily search for, view, and rent cars, while administrators can manage vehicle listings, bookings, and user accounts efficiently. The application utilizes Angular for the frontend and Spring Boot for the backend, ensuring a dynamic and responsive experience. With features like user authentication, real-time availability checking, and an intuitive design, AutoHire aims to revolutionize the car rental experience.", tags: [Tag.ANGULAR,Tag.SpringBoot,Tag.SQL,Tag.JAVA] },
    { id: 1, name: "Café Management System", pictures: ["../../assets/10.png","../../assets/11.png","../../assets/12.png","../../assets/13.png",], projectLink: "https://github.com/khalfaoui-Yassin", summary: "Café Management System is a modern web application designed for efficient management of café operations, built with Angular for the frontend and Spring Boot for the backend. The system streamlines tasks such as managing products, orders, and customers, while offering secure user authentication with JWT and role-based access control via Spring Security.", description: "The Café Management System enables café owners to manage their products, orders, and customer data in a seamless and intuitive manner. The application features a reactive, user-friendly interface built with Angular, enhanced by Angular Material and FlexLayout for responsive design. On the backend, Spring Boot powers the business logic and secures the application through JWT authentication and Spring Security's role-based access control. The system ensures optimal accessibility and performance and is deployed on GitHub for easy access and maintenance.", tags: [Tag.ANGULAR, Tag.SpringBoot, Tag.SQL,Tag.HTML,Tag.CSS,Tag.JAVA] },
    { id: 2, name: "Simple Counter Application", pictures: ["../../assets/155107.png","../../assets/155251.png"], projectLink: "https://github.com/khalfaoui-Yassin", summary: "Simple Counter Application is a lightweight web-based tool designed to increment, decrement, and track counts in real-time. Built using HTML, CSS, and JavaScript, this interactive application provides an intuitive interface for users to manage multiple counts seamlessly.", description: "The Simple Counter Application is a straightforward web app developed with HTML, CSS, and JavaScript, allowing users to increment, decrement, and reset counts easily. The app features a minimalist design with responsive buttons and real-time count updates. Dynamic content is managed through JavaScript, ensuring immediate feedback for user interactions. The application is lightweight, visually appealing with CSS enhancements, and can be used in various scenarios, from tracking tasks to counting events.", tags: [Tag.HTML, Tag.CSS , Tag.JAVASCRIPT] },
    { id: 3, name: "Hero Management App", pictures: ["../../assets/160551.png"], projectLink: "https://github.com/khalfaoui-Yassin", summary: "Hero Management App is an Angular-based application for creating, managing, and displaying heroes with their unique attributes. This interactive app allows users to add, view, and categorize heroes based on their power levels, offering a dynamic and user-friendly interface.", description: "The Hero Management App is an engaging web application built using Angular, designed for managing a list of heroes and their attributes. Users can create new heroes by providing a name, power level, and image URL. The app categorizes heroes based on their power, displaying them in different visual styles depending on their strength. Utilizing Angular’s two-way data binding, the app offers real-time updates and a smooth user experience. With a structured routing system, the app seamlessly switches between hero creation and list views, making hero management intuitive and fun.", tags: [Tag.ANGULAR, Tag.HTML, Tag.CSS, Tag.TYPESCRIPT] },
  ];

  constructor() { }

  GetProjects(){
    return this.projects
  }

  GetProjectById(id:number) : Project {
    let project = this.projects.find(project => project.id === id);
  
    if (project === undefined) {
      throw new TypeError('There is no project that matches the id: ' + id);
    }
    return project;
  }
  GetProjectByFilter(filterTags:Tag[]){
    let filteredProjects: Project[] = [];

    this.projects.forEach(function(project){
      let foundAll = true;

      filterTags.forEach(function(filterTag){
        if(project.tags.includes(filterTag) == false){
          foundAll = false;
        }
      });
      if (foundAll){
        filteredProjects.push(project);
      }
    });
    return filteredProjects;

  }
}
