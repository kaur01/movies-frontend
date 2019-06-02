import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class StatisticsService {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;

  }

  async getStatsFor(selection: string) {
    const url = `https://localhost:8080/api/actor/${selection}`;
    return await this.httpClient.get(url).toPromise();
  }
}
