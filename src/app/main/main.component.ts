import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../translate.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{
  translatedText?: string;
  langPair?: string;
  textToTranslate = this.translateService.textToTranslate;

  constructor(private translateService: TranslateService) { }

  ngOnInit(): void {
  }

  translate(event: any) {
    this.getTranslateData();
      this.translateService.translate(this.textToTranslate, event).subscribe((res: any) => this.translatedText = res.responseData.translatedText);
  }

  getTranslateData() {
    this.textToTranslate = this.translateService.textToTranslate;
    this.langPair = this.translateService.langPair;
  }
}
