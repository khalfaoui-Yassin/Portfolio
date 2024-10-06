import { Component, OnInit } from '@angular/core';
import { Project } from '../_models/Project';
import { Title } from '@angular/platform-browser';
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {

  projects ={} as Project[];
  isCollapsed: boolean=true;
  typescript: boolean = false;
  javascript:Boolean=false;
  python:boolean = false;
  java:Boolean = false;
  springBoot:Boolean=false;

  angular : boolean = false;
  filtering:Boolean = false;
  
  constructor(private titleService:Title, private projectService:ProjectsService){
    this.titleService.setTitle('John Doe - Portfolio')
  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }

  Filter(){
    let filterTags : Tag[] = [];
    if (this.typescript) {
      filterTags.push(Tag.TYPESCRIPT)
    }
    if(this.angular){
      filterTags.push(Tag.ANGULAR)
    }
    if(this.python){
      filterTags.push(Tag.PYTHON)
    }
    if(this.java){
      filterTags.push(Tag.JAVA)
    }
    if(this.javascript){
      filterTags.push(Tag.JAVASCRIPT)
    }
    if (this.python || this.java || this.angular || this.javascript || this.typescript ){
      this.filtering = true;
    }
    else {
      this.filtering = false;
    }

    this.projects = this.projectService.GetProjectByFilter(filterTags);
  }

  ResetFilters(){
    this.python=false;
    this.java=false;
    this.angular=false;
    this.typescript=false;
    this.springBoot=false
    this.javascript = false;
    this.filtering = false;

    this.projects = this.projectService.GetProjects();
  }
  

}
