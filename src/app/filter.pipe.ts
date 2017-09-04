import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(names: any, term: any): any {
    if (term === undefined) return names;
    return names.filter(function(name) {
      return name.toLowerCase().includes(term.toLowerCase());
    });
  }

}
