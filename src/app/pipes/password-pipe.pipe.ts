import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password',
})
export class PasswordPipePipe implements PipeTransform {
  transform(value: string): string {
    let length = value.length;
    let password: string = '';

    for (let i = 0; i < length; i++) {
      password += '*';
    }

    return password;
  }
}
