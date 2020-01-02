import { rejects } from "assert";
import { Any } from "@tsed/common";
var http = require('request-promise')


export class newsApiService {
    private baseUrl: string = 'https://newsapi.org';
    private version: string = '/v2';
    private apiKey: string = '609a9937bb124ea08d49649235331b6c';

    public getHeadLines(country:string): any {
        return new Promise((resolve, reject) => {
            const signature: string = '/top-headlines';

            const options = {
                uri: this.baseUrl + this.version + signature,
                qs: {
                    apiKey: this.apiKey,
                    country: country
                },
                method: 'GET',
                headers: {
                    'User-Agent': 'Request-Promise'
                },
                json: true
            };

            http(options)
                .then((dataJson)=>{
                    resolve(dataJson);
                })
                .catch((err)=>{
                    reject(err);
                })
                .finally(()=>{
                    console.log('request completed');
                });

        });
    }
}