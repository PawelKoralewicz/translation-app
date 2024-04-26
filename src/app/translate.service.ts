import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  langPair?: string;
  translateFrom = 'en';
  translateTo = 'fr';
  translatedText?: string;
  textToTranslate = 'Hello, how are you?';

  constructor(private http: HttpClient) { }

  translate(q: string, langpair: string) {
    return this.http.get(`https://api.mymemory.translated.net/get?q=${q}&langpair=${langpair}`);
  }

  getTranslation() {
    return this.translatedText;
  }
}
