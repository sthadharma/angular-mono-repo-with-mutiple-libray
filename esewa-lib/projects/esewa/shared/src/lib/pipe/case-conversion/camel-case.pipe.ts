import { Pipe, PipeTransform } from '@angular/core';
import {invalidPipeArgumentError} from '../invalid-pipe-argument-error';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value: string, separator?: string): string {
    if (!value) {
      return value;
    }
    if (typeof value !== 'string') {
      throw invalidPipeArgumentError(CamelCasePipe, value);
    }
    const words = value.split(separator ? separator : ' ');
    const camelCaseWords = words.map((word, index) => {
      return index === 0 ? word.toLowerCase() :
        word[0].toUpperCase() + word.substr(1).toLowerCase();
    });
    return camelCaseWords.join('');
  }
}
