import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDuration'
})
export class FormatDurationPipe implements PipeTransform {

  transform(durationMs: number): string {
    // Converte os milissegundos para segundos
    const seconds = Math.floor(durationMs / 1000);
    // Calcula os minutos
    const minutes = Math.floor(seconds / 60);
    // Calcula os segundos restantes
    const remainingSeconds = seconds % 60;

    // Formata no formato "mm:ss"
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  }
}
