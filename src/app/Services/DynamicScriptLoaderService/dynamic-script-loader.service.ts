import { Injectable } from '@angular/core';

interface Scripts {
  name: string;
  src: string;
}

export const ScriptStore: Scripts[] = [
  { name: "1", src : "/assets/usertheme/js/jquery-3.2.1.min.js"},
  { name: "2", src : "/assets/usertheme/js/propper.js"},
  { name: "3", src : "/assets/usertheme/js/bootstrap.min.js"},
  { name: "4", src : "/assets/usertheme/vendors/wow/wow.min.js"},
  { name: "5", src : "/assets/usertheme/vendors/sckroller/jquery.parallax-scroll.js"},
  { name: "6", src : "/assets/usertheme/vendors/owl-carousel/owl.carousel.min.js"},
  { name: "7", src : "/assets/usertheme/vendors/imagesloaded/imagesloaded.pkgd.min.js"},
  { name: "8", src : "/assets/usertheme/vendors/isotope/isotope-min.js"},
  { name: "9", src : "/assets/usertheme/vendors/magnify-pop/jquery.magnific-popup.min.js"},
  { name: "10", src : "/assets/usertheme/vendors/bootstrap-selector/js/bootstrap-select.min.js"},
  { name: "11", src : "/assets/usertheme/vendors/nice-select/jquery.nice-select.min.js"},
  { name: "12", src : "/assets/usertheme/vendors/scroll/jquery.mCustomScrollbar.concat.min.js"},
  { name: "13", src : "/assets/usertheme/js/plugins.js"},
  { name: "14", src : "/assets/usertheme/js/main.js"},
  { name:"15", src: "//maps.googleapis.com/maps/api/js?key=AIzaSyB13ZAvCezMx5TETYIiGlzVIq65Mc2FG5g"},
  { name:"16", src: "/assets/usertheme/js/gmaps.min.js"},
  { name:"17", src: "/assets/usertheme/js/plugins.js"},
  { name:"18", src: "/assets/usertheme/js/jquery.form.js"},
  { name:"19", src: "/assets/usertheme/js/jquery.validate.min.js"},
  { name:"20", src: "/assets/usertheme/js/contact.js"},
  { name:"21", src: "/assets/usertheme/js/main.js"}
];



declare var document: any;

@Injectable()
export class DynamicScriptLoaderService {

  private scripts: any = {};

  constructor() {
    ScriptStore.forEach((script: any) => {
      this.scripts[script.name] = {
        loaded: false,
        src: script.src
      };
    });
  }

  load(...scripts: string[]) {
    const promises: any[] = [];
    scripts.forEach((script) => promises.push(this.loadScript(script)));
    return Promise.all(promises);
  }

  loadScript(name: string) {
    return new Promise((resolve, reject) => {
      if (!this.scripts[name].loaded) {
        //load script
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = this.scripts[name].src;
        if (script.readyState) {  //IE
            script.onreadystatechange = () => {
                if (script.readyState === "loaded" || script.readyState === "complete") {
                    script.onreadystatechange = null;
                    this.scripts[name].loaded = true;
                    resolve({script: name, loaded: true, status: 'Loaded'});
                }
            };
        } else {  //Others
            script.onload = () => {
                this.scripts[name].loaded = true;
                resolve({script: name, loaded: true, status: 'Loaded'});
            };
        }
        script.onerror = (error: any) => resolve({script: name, loaded: false, status: 'Loaded'});
        document.getElementsByTagName('head')[0].appendChild(script);
      } else {
        resolve({ script: name, loaded: true, status: 'Already Loaded' });
      }
    });
  }

}
