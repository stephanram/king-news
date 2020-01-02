import { newsApiService } from "../apiServices/newsApiService";
import { article } from '../models/article';

export class newsService {
    async getHeadlines(countryCode: string): Promise<any> {
        try {
            const defaultCountry: string = 'us';
            var param = countryCode ? countryCode : defaultCountry

            var service = new newsApiService();
            var result = await service.getHeadLines(param);
            var data = this.transformObject(result);
            return data;
        }
        catch (err) {
            console.log(err.message);
        }
    }

    private transformObject(model: any): Array<article> {
        let result: Array<article>;
        let obj: article;

        if ((model) && (model.articles) && (model.articles.length > 0)) {
            result = new Array<article>();
            model.articles.forEach(element => {
                obj = new article();
                obj.author = element.author;
                obj.title = element.title;
                obj.description = element.description;
                obj.url = element.url;
                obj.urlToImage = element.urlToImage;
                obj.publishedAt = element.publishedAt;
                obj.content = element.content;
                obj.sourceId = element.source.id;
                obj.sourceName = element.source.name;
                result.push(obj);
            });
        }

        return result;
    }
}