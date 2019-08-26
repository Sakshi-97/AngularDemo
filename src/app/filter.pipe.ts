import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customFilter'
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], searchText: string): any[] {
    console.log('value,searchText', value, searchText);
    if (!value) return [];
    if (!searchText) return value;
    return value.filter((e) => {
      return (e.email.toLowerCase().match(searchText.toLowerCase()) || e.userName.toLowerCase().match(searchText.toLowerCase()));
    });
  }

}
