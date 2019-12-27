import { Controller, Get, Service } from "@tsed/common";
import { newsService } from '../services/newsService';


@Controller("/calendars")
export class CalendarCtrl {
  @Get()
  async findAll():Promise<any> {
    var service = new newsService();
    try
    {
      var data = await service.getHeadlines();
      return data;
    }
    catch(err)
    {
      return err.message;
    }
  }
}