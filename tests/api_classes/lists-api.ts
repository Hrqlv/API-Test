import { APIRequestContext } from '@playwright/test';


const API_KEY = '9b33a7ed729a9ad4530f1a729037ccf1'
const API_TOKEN = '263f40a93d512b28e9f73989d71134bd481635cbd58d60b18ee920f23c82b1c9'
const AUTH = `OAuth oauth_consumer_key="${API_KEY}", oauth_tokey="${API_TOKEN}"`

export class ListsAPI {
    readonly request: APIRequestContext

    constructor(request: APIRequestContext) {
        this.request = request
    }

    async createLists(listName: string, idBoard: string) {
        let response = await this.request.post(`lists`, {
            headers: {
                'Authorization': AUTH
            },
            params: {
                name: listName,
                idBoard: idBoard
            }
        })

        return response
    }
}