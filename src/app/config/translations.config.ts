import { LocationStrategy } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function httpLoaderFactory(
  http: HttpClient,
  locationStrategy: LocationStrategy
): TranslateHttpLoader {
  const loader = new TranslateHttpLoader(http);
  loader.prefix = `${locationStrategy.getBaseHref()}assets/i18n/`;

  return loader;
}

export const I18N_CONFIG = {
  defaultLanguage: 'en',
  loader: {
    provide: TranslateLoader,
    useFactory: httpLoaderFactory,
    deps: [HttpClient, LocationStrategy],
  },
};
