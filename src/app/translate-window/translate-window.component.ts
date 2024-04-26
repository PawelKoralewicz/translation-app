import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { iconPath } from 'src/data/icon.path';
import { TranslateService } from '../translate.service';

@Component({
  selector: 'app-translate-window',
  templateUrl: './translate-window.component.html',
  styleUrls: ['./translate-window.component.scss']
})
export class TranslateWindowComponent implements OnInit {
  @Input() inputType = true;
  @Input() translatedText?: string;
  @Output() translateEvent = new EventEmitter();
  
  textToTranslate = this.translateService.textToTranslate;
  readonly iconPath = iconPath;

  controlButtons = [
    {
      icon: 'sound_max_fill.svg',
      command: () => this.readText(),
      alt: "Read text icon"
    },
    {
      icon: 'Copy.svg',
      command: () => this.copyText(),
      alt: "Copy text icon"
    }
  ]

  languages = [
    { label: 'Detect Language', code: 'Autodetect' },
    { label: 'English', code: 'en' },
    { label: 'French', code: 'fr' },
    { label: 'Spanish', code: 'es' },
  ]

  translateFrom = this.translateService.translateFrom;
  translateTo = this.translateService.translateTo;

  constructor(private translateService: TranslateService) { }
  
  ngOnInit(): void {
    this.translate();
  }

  getLanguages() {
    this.translateFrom = this.translateService.translateFrom;
    this.translateTo = this.translateService.translateTo;
  }

  translate() {
    this.getLanguages();
    const langpair = this.translateFrom.concat('|', this.translateTo);
    this.translateService.langPair = langpair;
    this.translateService.textToTranslate = this.textToTranslate;
    this.translateEvent.emit(langpair);
  }

  readText() {
    this.setLanguages();

    const text = this.inputType ? this.textToTranslate : this.translatedText;
    const lang = this.inputType ? this.translateFrom : this.translateTo;

    const read = new SpeechSynthesisUtterance();
    read.lang = lang;

    if(text)
    read.text = text;

    window.speechSynthesis.speak(read);
  }

  copyText() {
    if(this.translatedText)
    navigator.clipboard.writeText(this.inputType ? this.textToTranslate : this.translatedText); 
  }

  switchLanguage(code: string) {
    this.getLanguages();
    this.inputType ? this.translateFrom = code : this.translateTo = code;
    this.setLanguages();
  }

  setLanguages() {
    this.translateService.translateFrom = this.translateFrom;
    this.translateService.translateTo = this.translateTo;
  }
}
