import pactum from 'pactum';
import { SimpleReporter } from '../simple-reporter';
import { faker } from '@faker-js/faker';
import { StatusCodes } from 'http-status-codes';
import { setTimeout } from 'timers/promises';

describe('Authors API', () => {
  const p = pactum;
  const rep = SimpleReporter;
  const baseUrl = 'https://fakerestapi.azurewebsites.net/api/v1/Authors';

  let authorId: number;
  const authorData = {
    idBook: 1,
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName()
  };

  p.request.setDefaultTimeout(30000);

  beforeAll(() => p.reporter.add(rep));
  afterAll(() => p.reporter.end());

  describe('CRUD Operations', () => {
    it('Deve criar um autor', async () => {
      const res = await p
        .spec()
        .post(`${baseUrl}`)
        .withJson(authorData)
        .expectStatus(StatusCodes.OK)
        .expectJsonLike(authorData)
        .inspect()
        .returns('id');

      console.log('ID do autor criado:', res);
      authorId = res;

      // adiciona o ID ao objeto original para comparação posterior
      (authorData as any).id = authorId;

      // aguarda 500ms antes de consultar o autor criado
      await setTimeout(500);
    });

    it('Deve retornar erro ao buscar autor inexistente', async () => {
      await p
        .spec()
        .get(`${baseUrl}/0`)
        .expectStatus(StatusCodes.NOT_FOUND);
    });

    it('Deve atualizar o autor', async () => {
      const updatedData = {
        ...authorData,
        firstName: 'NomeAtualizado'
      };

      await p
        .spec()
        .put(`${baseUrl}/${authorId}`)
        .withJson(updatedData)
        .expectStatus(StatusCodes.OK)
        .expectJsonLike(updatedData);
    });

    it('Deve deletar o autor', async () => {
      await p
        .spec()
        .delete(`${baseUrl}/${authorId}`)
        .expectStatus(StatusCodes.OK);
    });
  });
});
