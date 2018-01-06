import {Component, OnInit, Inject} from '@angular/core';
import {Problem} from "../../models/problem.model";

const DEFAULT_PROBLEM:Problem = Object.freeze({
  id:0,
  name:"",
  desc:"",
  difficulty: "default"
});

@Component({
  selector: 'app-new-problem',
  templateUrl: './new-problem.component.html',
  styleUrls: ['./new-problem.component.css']
})
export class NewProblemComponent implements OnInit {

  public difficulties = ["Easy","Medium","Hard","Super"];

  //noinspection TypeScriptUnresolvedFunction
  newProblem:Problem = Object.assign({}, DEFAULT_PROBLEM);
  constructor(@Inject("data") private data) { }

  ngOnInit() {
  }

  addProblem(): void{
    this.data.addProblem(this.newProblem)
      .catch(error => alert(error._body));
    //noinspection TypeScriptUnresolvedFunction
    this.newProblem = Object.assign({},DEFAULT_PROBLEM);
  }
}
