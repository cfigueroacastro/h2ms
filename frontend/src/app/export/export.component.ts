import {Component, Inject, Optional} from '@angular/core';
import { saveAs } from 'file-saver/FileSaver';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {ConfigService} from '../config/config.service';
import {Configuration} from '../configuration';
import {BASE_PATH} from '../variables';
import {Config} from '../config/config';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
    styleUrls: ['./export.component.css', '../card.css'],
  providers: [HttpClient]
})
export class ExportComponent {

    protected basePath = 'https://test.h2ms.org:81';
    public configuration = new Configuration();
    config: Config;

    constructor(private httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration,
              @Optional() configService: ConfigService) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }

        if (configService) {
            this.config = configService.getConfig();
            const baseURL = this.config.backendHostname,
                port = this.config.backendPort;
            if (baseURL && port) {
                this.basePath = baseURL.concat(':').concat(String(port));
            }
        }
    }

  saveFile() {
    const headers = new HttpHeaders();
    headers.append('Accept', 'text/csv');
    this.httpClient.get(this.basePath.concat('/events/export/csv'), { headers: headers, responseType: 'text' })
        .subscribe(
            (response) => {
            this.saveToFileSystem(response);
            },
            (error) => {
                alert('Error downloading data file. Please report this error to a developer.');
                console.log(error);
            });
  }

  private saveToFileSystem(response) {
    const now = new Date();
    const timestamp = '' + now.getFullYear() + (now.getMonth() + 1) + now.getDate() +  now.getHours() + now.getMinutes() + now.getSeconds();
    const filename = 'events-'.concat(timestamp).concat('.csv');
    const blob = new Blob([response], { type: 'text/csv' });
    saveAs(blob, filename);
  }

}
