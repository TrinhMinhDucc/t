import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { importProvidersFrom } from '@angular/core';
import { provideAnimations } from "@angular/platform-browser/animations";


const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    importProvidersFrom(SidebarModule, ButtonModule),
    provideAnimations(),
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
