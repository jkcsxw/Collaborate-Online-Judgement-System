  import { Pipe, PipeTransform } from '@angular/core';
  import {Problem} from "../models/problem.model";
  // import {debounceTime} from "rxjs/operators/debounceTime";

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(problems: Problem[], term: string ): Problem[] {
    // console.log(problems);
    // debounceTime(300);
    return problems.filter(
      problem => problem.name.toLowerCase().includes(term)
    );
  }

}
