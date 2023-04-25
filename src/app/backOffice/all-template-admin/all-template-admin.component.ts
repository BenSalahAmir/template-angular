import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-template-admin',
  templateUrl: './all-template-admin.component.html',
  styleUrls: ['./all-template-admin.component.css']
})
export class AllTemplateAdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.loadScriptsInOrder(["/assets/BackOffice/master/style-switcher/style.switcher.localstorage.js",'assets/BackOffice/vendor/modernizr/modernizr.js','/assets/BackOffice/vendor/jquery/jquery.js', '/assets/BackOffice/vendor/jquery-browser-mobile/jquery.browser.mobile.js', 
    '/assets/BackOffice/vendor/jquery-cookie/jquery.cookie.js',
    '/assets/BackOffice/vendor/nanoscroller/nanoscroller.js',
    '/assets/BackOffice/vendor/popper/umd/popper.min.js',
    '/assets/BackOffice/vendor/bootstrap/js/bootstrap.bundle.min.js',
    '/assets/BackOffice/vendor/bootstrap-datepicker/js/bootstrap-datepicker.js',
    '/assets/BackOffice/vendor/common/common.js',
    
    '/assets/BackOffice/vendor/magnific-popup/jquery.magnific-popup.js',
    '/assets/BackOffice/vendor/jquery-placeholder/jquery.placeholder.js',
    '/assets/BackOffice/vendor/autosize/autosize.js',
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
