import { Controller, Get, Service } from "@tsed/common";
import { newsService } from '../services/newsService';
import { QueryParams } from "@tsed/common";

@Controller("/calendars")
export class CalendarCtrl {
  @Get()
  async findAll(@QueryParams('countryCode') countryCode: string):Promise<any> {
    var service = new newsService();
    try
    {
      var data = await service.getHeadlines(countryCode);
      return data;
    }
    catch(err)
    {
      return err.message;
    }
  }
}