import { AfterViewInit, Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Keyboard from 'simple-keyboard';
import { LayoutItem, LayoutItemObj } from 'simple-keyboard-layouts/build/interfaces';

enum Languages {
  English = 'ENG',
  Russian = 'RUS',
}

@Component({
  selector: 'p-keyboard',
  templateUrl: './keyboard.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./keyboard.component.scss'],
})
export class KeyboardComponent implements AfterViewInit {
  readonly value$ = new BehaviorSubject('');
  private lang: Languages = Languages.Russian;
  private readonly russian: LayoutItem | LayoutItemObj = {
    layout: {
      default: [
        'ё 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
        '{tab} й ц у к е н г ш щ з х ъ \\',
        '{lock} ф ы в а п р о л д ж э {enter}',
        '{shift} / я ч с м и т ь б ю . {change}',
        '.ru @ {space}',
      ],
      shift: [
        'Ё ! " № ; % : ? * ( ) _ + {bksp}',
        '{tab} Й Ц У К Е Н Г Ш Щ З Х Ъ /',
        '{lock} Ф Ы В А П Р О Л Д Ж Э {enter}',
        '{shift} | Я Ч С М И Т Ь Б Ю , {change}',
        '.ru @ {space}',
      ],
    },
  };
  private readonly english: LayoutItem | LayoutItemObj = {
    layout: {
      default: [
        '` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
        '{tab} q w e r t y u i o p [ ] \\',
        "{lock} a s d f g h j k l ; ' {enter}",
        '{shift} z x c v b n m , . / {change}',
        '.com @ {space}',
      ],
      shift: [
        '~ ! @ # $ % ^ & * ( ) _ + {bksp}',
        '{tab} Q W E R T Y U I O P { } |',
        '{lock} A S D F G H J K L : " {enter}',
        '{shift} Z X C V B N M < > ? {change}',
        '.com @ {space}',
      ],
    },
  };
  private keyboard!: Keyboard;

  @Output()
  public readonly enter = new EventEmitter<string>();

  ngAfterViewInit() {
    this.keyboard = new Keyboard({
      onChange: (input) => this.onChange(input),
      onKeyPress: (button: string) => this.onKeyPress(button),
      ...this.russian,
      display: {
        '{change}': Languages.English,
      },
      mergeDisplay: true,
    });
  }

  onChange(input: string) {
    this.value$.next(input);
  }

  onKeyPress(button: string) {
    if (button === '{shift}' || button === '{lock}') {
      this.handleShift();
    }
    if (button === '{change}') {
      this.handleChange();
    }
    if (button === '{enter}') {
      this.handleEnter();
    }
  }

  onInputChange(event: any) {
    this.keyboard.setInput(event.target.value);
  }

  handleEnter() {
    this.enter.emit(this.value$.getValue());
  }

  handleChange() {
    if (this.lang === Languages.English) {
      this.lang = Languages.Russian;
      this.keyboard.setOptions({
        ...this.russian,
        display: {
          '{change}': Languages.English,
        },
      });
    } else {
      this.lang = Languages.English;
      this.keyboard.setOptions({
        ...this.english,
        display: {
          '{change}': Languages.Russian,
        },
      });
    }
  }

  handleShift() {
    const currentLayout = this.keyboard.options.layoutName;
    const shiftToggle = currentLayout === 'default' ? 'shift' : 'default';

    this.keyboard.setOptions({
      layoutName: shiftToggle,
    });
  }
}
