import { Pipe, PipeTransform } from '@angular/core';
import {invalidPipeArgumentError} from '../invalid-pipe-argument-error';

@Pipe({
  name: 'snakeCase'
})
export class SnakeCasePipe implements PipeTransform {

  transform(value: string, separator?: string): string {
    if (!value) {
      return value;
    }
    if (typeof value !== 'string') {
      throw invalidPipeArgumentError(SnakeCasePipe, value);
    }
    const words = value.split(separator ? separator : ' ');
    const lowerCaseWords = words.map((word) => word.toLowerCase());
    return lowerCaseWords.join('_');
  }

}
