import {Aurelia} from 'aurelia-framework';
import {Router, RouterConfiguration} from 'aurelia-router';

import '@material/drawer/dist/mdc.drawer.css';
import '@material/list/dist/mdc.list.css';
import '@material/theme/dist/mdc.theme.css';
import '@material/typography/dist/mdc.typography.css';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'checkbox'], name: 'checkbox', moduleId: './checkbox', nav: true, title: 'Checkbox' },
      { route: 'button', name: 'button', moduleId: './button', nav: true, title: 'Button' },
      { route: 'select', name: 'select', moduleId: './select', nav: true, title: 'Select' }
    ]);

    this.router = router;
  }

  // handleThemeChange($event) {
  //   const theme = $event.detail.value;
  //   console.log('theme', theme);
  //   if (theme == 'Dark') {
  //     document.body.classList.add('mdc-theme--dark');
  //   } else {
  //     document.body.classList.remove('mdc-theme--dark');
  //   }
  // }
}
