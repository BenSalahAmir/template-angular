import { Component } from '@angular/core';

@Component({
  selector: 'app-all-template-user',
  templateUrl: './all-template-user.component.html',
  styleUrls: ['./all-template-user.component.css']
})
export class AllTemplateUserComponent {


  constructor() { }

  ngOnInit(): void {

    this.loadScriptsInOrder([
    '/assets/BackOffice/js/theme.js',
    '/assets/BackOffice/js/custom.js',
    '/assets/BackOffice/js/theme.init.js'

    ],
     () => {
      console.log('All scripts have finished loading');
    });
  }

  public loadScriptsInOrder(urls: (string | undefined)[], callback: () => void) {
    if (urls.length > 0) {
      const url = urls.shift();
      if (url) {
        const script = document.createElement('script');
        script.src = url;
        script.async = true;
        script.defer = true;
        script.onload = () => {
          this.loadScriptsInOrder(urls, callback);
        };
        document.body.appendChild(script);
      } else {
        this.loadScriptsInOrder(urls, callback);
      }
    } else {
      callback();
    }
  }
}
