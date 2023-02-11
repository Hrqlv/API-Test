import { APIRequestContext } from '@playwright/test';
import { faker } from '@faker-js/faker';


const API_KEY = '9b33a7ed729a9ad4530f1a729037ccf1'
const API_TOKEN = '263f40a93d512b28e9f73989d71134bd481635cbd58d60b18ee920f23c82b1c9'
const AUTH = `OAuth oauth_consumer_key="${API_KEY}", oauth_tokey="${API_TOKEN}"`

export class CardsAPI {
    readonly request: APIRequestContext

    constructor(request: APIRequestContext) {
        this.request = request
    }

    async createCards(idList: string) {
        let response = await this.request.post(`cards`, {
            headers: {
                'Authorization': AUTH
            },
            params: {
                name: 'card 1',
                idList: idList,
                desc: faker.git.commitMessage()
            }
        })

        return response
    }
}