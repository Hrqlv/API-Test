import { test, expect } from '@playwright/test';
import { BoardsAPI } from './api_classes/boards-api';
import { ListsAPI } from './api_classes/lists-api';
import { CardsAPI } from './api_classes/cards-api';
import { DoneAPI } from './api_classes/done-api';

test.describe('Test Trello APIs - NextQA Test Automation Class', () => {

  let boardsRequest: BoardsAPI
  let listsRequest: ListsAPI
  let cardsRequest: CardsAPI
  let doneCardsRequest: DoneAPI

  let doneCards
  let idInProgress
  let boardId
  let listsCardsObj = [
    {
      listName: 'Backlog',
      listId: '',
      listDescription: 'Descrição da coluna Backlog',
      cards: [
        {
          name: 'backlog card01',
          description: ''
        },
        {
          name: 'backlog card03',
          description: ''
        },
        {
          name: 'backlog card03',
          description: ''
        }
      ]
    },
    {
      listName: 'To Do',
      listId: '',
      listDescription: 'descrição da coluna To Do',
      cards: [
        {
          name: 'To Do card01',
          description: ''
        },
        {
          name: 'To Do card03',
          description: ''
        },
        {
          name: 'To Do card03',
          description: ''
        }
      ]
    },
    {
      listName: 'In Progress',
      listId: '',
      listDescription: 'descrição da coluna In Progress',
      cards: [
        {
          name: 'In progress card01',
          description: ''
        },
        {
          name: 'In progress card03',
          description: ''
        },
        {
          name: 'In progress card03',
          description: ''
        }
      ]
    },
    {
      listName: 'Done',
      listId: '',
      listDescription: 'descrição da coluna Done',
      cards: [
        {
          name: 'Done card01',
          description: ''
        },
        {
          name: 'Done card02',
          description: ''
        },
        {
          name: 'Done card03',
          description: ''
        }
      ]
    }
  ]

  test.beforeEach(async ({ request }) => {
    boardsRequest = new BoardsAPI(request)
    listsRequest = new ListsAPI(request)
    cardsRequest = new CardsAPI(request)
    doneCardsRequest = new DoneAPI(request)
  })

  test('Obter board do usuário', async () => {

    let response = await boardsRequest.createBoards()

    expect(response.ok()).toBeTruthy();
    const body = JSON.parse(await response.text())
    console.log(body)
    body.forEach(board => {
      if (board.name == 'RiqueNextQA') {
        boardId = body[0].id
        console.log('Encontrou o Board ID: ', boardId)
      }
    })
  });

  test('Criar listas e Cards', async () => {

    await Promise.all(

      listsCardsObj.map(async (list, index) => {

        let response = await listsRequest.createLists(list.listName, boardId);
        expect(response.ok()).toBeTruthy();
        const body = JSON.parse(await response.text())
        console.log(body)
        listsCardsObj[index].listId = body.id
        console.log(listsCardsObj)

      }));

    test('Criar os done', async () => {

      doneCards.map(async (list, index) => {

        let response = await doneCardsRequest.createDone(list.idInprogress);
        expect(response.ok()).toBeTruthy();

        const body = JSON.parse(await response.text())
        console.log(body)
        doneCards[index].doneID = body.id
        console.log(doneCards)
      })
    })
  });
})