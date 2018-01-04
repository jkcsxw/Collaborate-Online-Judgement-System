import { Component, OnInit, Inject } from '@angular/core';
import { Problem } from "../../models/problem.model";

@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})
export class ProblemListComponent implements OnInit {
  problems: Problem[];
  title = 'Collaborate Online Judge System';
  constructor(@Inject("data") private data){ }

  ngOnInit() {
    this.problems=this.data.getProblems();
  }

}
