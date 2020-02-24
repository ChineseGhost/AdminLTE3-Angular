import { Injectable } from '@angular/core';

interface Scripts {
  name: string;
  src: string;
}

export const ScriptStore: Scripts[] = [
  { name: 'jQuery', src: '../../assets/plugins/jquery/jquery.min.js' },
  { name: 'jQueryUI', src: '../../assets/plugins/jquery-ui/jquery-ui.min.js' },
  { name: 'Bootstrap', src: '../../assets/plugins/bootstrap/js/bootstrap.bundle.min.js' },
  { name: 'ChartJS', src: '../../assets/plugins/chart.js/Chart.min.js' },
  { name: 'Sparkline', src: '../../assets/plugins/sparklines/sparkline.js' },
  { name: 'JQVMap12', src: '../../assets/plugins/jqvmap/jquery.vmap.min.js' },
  { name: 'JQVMap22', src: '../../assets/plugins/jqvmap/maps/jquery.vmap.usa.js' },
  { name: 'KnobChart', src: '../../assets/plugins/jquery-knob/jquery.knob.min.js' },
  { name: 'Moment', src: '../../assets/plugins/moment/moment.min.js' },
  { name: 'DateRangePicker', src: '../../assets/plugins/daterangepicker/daterangepicker.js' },
  { name: 'Tempusdominus', src: '../../assets/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js' },
  { name: 'Summernote', src: '../../assets/plugins/summernote/summernote-bs4.min.js' },
  { name: 'OverlayScrollbars', src: '../../assets/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js' },
  { name: 'AdminLTE', src: '../../assets/dist/js/adminlte.js' },
  { name: 'Dashboard', src: '../../assets/dist/js/pages/dashboard.js' },
  { name: 'Demo', src: '../../assets/dist/js/demo.js' },
];

declare var document: any;


@Injectable({
  providedIn: 'root'
})
export class DynamicscriptloaderService {

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
