import { Component, Input, OnChanges } from '@angular/core';
import { BehaviorSubject, map, Observable, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'secured-image',
  templateUrl: './secured-image.component.html',
  styleUrls: ['./secured-image.component.scss'],
})
export class SecuredImageComponent implements OnChanges {
  @Input()
  src!: string;

  private readonly src$ = new BehaviorSubject(this.src);
  readonly dataUrl$ = this.src$.pipe(switchMap((url) => this.loadImage(url)));

  constructor(private readonly httpClient: HttpClient, private domSanitizer: DomSanitizer) {}

  ngOnChanges(): void {
    this.src$.next(this.src);
  }

  private loadImage(url: string): Observable<SafeUrl> {
    return this.httpClient
      .get(url, { responseType: 'blob' })
      .pipe(map((e) => this.domSanitizer.bypassSecurityTrustUrl(URL.createObjectURL(e))));
  }
}
