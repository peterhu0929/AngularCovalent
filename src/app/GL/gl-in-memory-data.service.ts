/**
 * Created by winston.ws.lu on 2017/5/18.
 */
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {kendoItems} from '../_Data/_glDatas';
export class InMemoryDataService implements InMemoryDbService {
  createDb(): any {
    const kendoDatas: any = kendoItems;
    return {kendoDatas};
  }
}
