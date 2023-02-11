import { APIRequestContext } from '@playwright/test';

const API_KEY = "9b33a7ed729a9ad4530f1a729037ccf1"
const API_TOKEN = "263f40a93d512b28e9f73989d71134bd481635cbd58d60b18ee920f23c82b1c9"
const AUTH = `OAuth oauth_consumer_key="${API_KEY}", oauth_tokey="${API_TOKEN}"`


export class BoardsAPI {
    readonly request: APIRequestContext

    constructor(request: APIRequestContext) {
        this.request = request
    }

    async createBoards() {
        let response = await this.request.get(`members/me/boards`, {
            headers: {
                'Authorization': AUTH
            },
            params: {
                'fields': 'name'
            }
        })

        return response
    }
}