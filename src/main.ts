import { enableProdMode } from '@angular/core';

// The browser platform with a compiler
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);//通过引导AppModule来启动应用。
