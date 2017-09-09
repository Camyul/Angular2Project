import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
    name: 'welcome'
})
export class WelcomePipe implements PipeTransform {
  transform(value: string): string {
    const message = 'Welcome ' + value;
    if (value === null) {
      return 'Welcome';
    } else {
      return message;
    }
  }
}
