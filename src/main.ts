import { bootstrapApplication } from '@angular/platform-browser';
import { registerLicense } from '@syncfusion/ej2-base';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);

registerLicense(
  'Ngo9BigBOggjHTQxAR8/V1NDaF5cWGFCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdnWH9fdHVVRGlZVEZ/XUE='
);
