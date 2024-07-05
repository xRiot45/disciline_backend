import * as request from 'supertest';
import { AppModule } from '../../../src/app.module';
import { TestModule } from '../../test.module';
import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';

describe('TESTING_AGAMA_API', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule, TestModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  // Create agama API testing
  describe('TESTING_AGAMA_API_001', () => {
    // Scenario 1 : Should return 201 if create agama success
    it('should return 201 if agama is created successfully!', async () => {
      const response = await request(app.getHttpServer())
        .post('/api/master/agama')
        .send({
          nama_agama: 'Delete agama 2',
        })
        .set(
          'Authorization',
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViYzcxZjdlLWQzYmMtNDEzYy1iODdhLWRiMjMyNGU0Y2RjOSIsInVzZXJuYW1lIjoiYWRtaW4xIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzIwMTgwNzI2LCJleHAiOjE3MjAyNjcxMjZ9.4yV1mDnkYYMPNSAH6jUF6D--870rt2HHk2blQn7EvOw',
        );

      expect(response.status).toBe(201);
      expect(response.body.data.id).toBeDefined();
    });

    // Scenario 2 : Should return 400 if  nama_agama characters are less than 2!
    it('should return 400 if nama_agama characters are less than 2!', async () => {
      const response = await request(app.getHttpServer())
        .post('/api/master/agama')
        .send({
          nama_agama: 'T',
        })
        .set(
          'Authorization',
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViYzcxZjdlLWQzYmMtNDEzYy1iODdhLWRiMjMyNGU0Y2RjOSIsInVzZXJuYW1lIjoiYWRtaW4xIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzIwMTgwNzI2LCJleHAiOjE3MjAyNjcxMjZ9.4yV1mDnkYYMPNSAH6jUF6D--870rt2HHk2blQn7EvOw',
        );

      expect(response.status).toBe(400);
      expect(response.body.errors).toBeDefined();
    });

    // Scenario 3 : Should return 409 if nama_agama already exist
    it('should return 409 if nama_agama already exist!', async () => {
      const response = await request(app.getHttpServer())
        .post('/api/master/agama')
        .send({
          nama_agama: 'Islam',
        })
        .set(
          'Authorization',
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViYzcxZjdlLWQzYmMtNDEzYy1iODdhLWRiMjMyNGU0Y2RjOSIsInVzZXJuYW1lIjoiYWRtaW4xIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzIwMTgwNzI2LCJleHAiOjE3MjAyNjcxMjZ9.4yV1mDnkYYMPNSAH6jUF6D--870rt2HHk2blQn7EvOw',
        );

      expect(response.status).toBe(409);
      expect(response.body.errors).toBeDefined();
    });

    // Scenario 4 : Should return 401 if token not found
    it('should return 401 if token not found!', async () => {
      const response = await request(app.getHttpServer())
        .post('/api/master/agama')
        .send({
          nama_agama: 'Test Agama 2',
        });

      expect(response.status).toBe(401);
      expect(response.body.errors).toBeDefined();
    });

    // Scenario 5 : Should return 401 if input token invalid
    it('should return 401 if input token invalid!', async () => {
      const response = await request(app.getHttpServer())
        .post('/api/master/agama')
        .send({
          nama_agama: 'Test Agama',
        })
        .set('Authorization', 'test');

      expect(response.status).toBe(401);
      expect(response.body.errors).toBeDefined();
    });
  });

  // Get all agama API testing
  describe('TESTING_AGAMA_API_002', () => {
    // Scenario 1 : Should return 200 if get all data success
    it('should return 200 if get all data success!', async () => {
      const response = await request(app.getHttpServer())
        .get('/api/master/agama')
        .set(
          'Authorization',
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViYzcxZjdlLWQzYmMtNDEzYy1iODdhLWRiMjMyNGU0Y2RjOSIsInVzZXJuYW1lIjoiYWRtaW4xIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzIwMTgwNzI2LCJleHAiOjE3MjAyNjcxMjZ9.4yV1mDnkYYMPNSAH6jUF6D--870rt2HHk2blQn7EvOw',
        );

      expect(response.status).toBe(200);
      expect(response.body.data).toBeDefined();
    });

    // Scenario 2 : Should return 401 if token not found
    it('should return 401 if token not found!', async () => {
      const response = await request(app.getHttpServer()).get(
        '/api/master/agama',
      );

      expect(response.status).toBe(401);
      expect(response.body.errors).toBeDefined();
    });

    // Scenario 3 : Should return 401 if token invalid
    it('Should return 401 if token invalid!', async () => {
      const response = await request(app.getHttpServer())
        .get('/api/master/agama')
        .set('Authorization', 'test');

      expect(response.status).toBe(401);
      expect(response.body.errors).toBeDefined();
    });
  });

  // Get agama by id API testing
  describe('TESTING_AGAMA_API_003', () => {
    // Scenario 1 : Should retrun 200 if get agama by id success
    it('should return 200 if get agama by id success!', async () => {
      const response = await request(app.getHttpServer())
        .get('/api/master/agama/31ed04b0-6fd3-42fb-9616-9e4da4ac47f4')
        .set(
          'Authorization',
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViYzcxZjdlLWQzYmMtNDEzYy1iODdhLWRiMjMyNGU0Y2RjOSIsInVzZXJuYW1lIjoiYWRtaW4xIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzIwMTgwNzI2LCJleHAiOjE3MjAyNjcxMjZ9.4yV1mDnkYYMPNSAH6jUF6D--870rt2HHk2blQn7EvOw',
        );

      expect(response.status).toBe(200);
      expect(response.body.data).toBeDefined();
    });

    // Scenario 2 : Should return 404 if agama not found & valid token
    it('should return 404 if agama not found & valid token!', async () => {
      const response = await request(app.getHttpServer())
        .get('/api/master/agama/test')
        .set(
          'Authorization',
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViYzcxZjdlLWQzYmMtNDEzYy1iODdhLWRiMjMyNGU0Y2RjOSIsInVzZXJuYW1lIjoiYWRtaW4xIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzIwMTgwNzI2LCJleHAiOjE3MjAyNjcxMjZ9.4yV1mDnkYYMPNSAH6jUF6D--870rt2HHk2blQn7EvOw',
        );

      expect(response.status).toBe(404);
      expect(response.body.errors).toBeDefined();
    });

    // Scenario 3 : Should return 401 if token not found
    it('should return 401 if token not found!', async () => {
      const response = await request(app.getHttpServer()).get(
        '/api/master/agama/31ed04b0-6fd3-42fb-9616-9e4da4ac47f4',
      );

      expect(response.status).toBe(401);
      expect(response.body.errors).toBeDefined();
    });

    // Scenario 4 : Should return 401 if token invalid
    it('should return 401 if token invalid!', async () => {
      const response = await request(app.getHttpServer())
        .get('/api/master/agama/31ed04b0-6fd3-42fb-9616-9e4da4ac47f4')
        .set('Authorization', 'test');

      expect(response.status).toBe(401);
      expect(response.body.errors).toBeDefined();
    });
  });

  // Update agama API testing
  describe('TESTING_AGAMA_API_004', () => {
    // Scenario 1 : Should return 200 if update agama success
    it('Should return 200 if update agama success', async () => {
      const response = await request(app.getHttpServer())
        .put('/api/master/agama/da66f97f-1bf1-43a1-a740-6e1c4ad037cf')
        .send({
          nama_agama: 'Test Agama 2',
        })
        .set(
          'Authorization',
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViYzcxZjdlLWQzYmMtNDEzYy1iODdhLWRiMjMyNGU0Y2RjOSIsInVzZXJuYW1lIjoiYWRtaW4xIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzIwMTgwNzI2LCJleHAiOjE3MjAyNjcxMjZ9.4yV1mDnkYYMPNSAH6jUF6D--870rt2HHk2blQn7EvOw',
        );

      expect(response.status).toBe(200);
      expect(response.body.data.nama_agama).toBe('Test Agama 2');
    });

    // Scenario 2 : Should return 400 if  nama_agama characters are less than 2!
    it('should return 400 if nama_agama characters are less than 2!', async () => {
      const response = await request(app.getHttpServer())
        .put('/api/master/agama/da66f97f-1bf1-43a1-a740-6e1c4ad037cf')
        .send({
          nama_agama: 'T',
        })
        .set(
          'Authorization',
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViYzcxZjdlLWQzYmMtNDEzYy1iODdhLWRiMjMyNGU0Y2RjOSIsInVzZXJuYW1lIjoiYWRtaW4xIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzIwMTgwNzI2LCJleHAiOjE3MjAyNjcxMjZ9.4yV1mDnkYYMPNSAH6jUF6D--870rt2HHk2blQn7EvOw',
        );

      expect(response.status).toBe(400);
      expect(response.body.errors).toBeDefined();
    });

    // Scenario 3 : Should return 409 if nama_agama already exist
    it('should return 409 if nama_agama already exist!', async () => {
      const response = await request(app.getHttpServer())
        .put('/api/master/agama/da66f97f-1bf1-43a1-a740-6e1c4ad037cf')
        .send({
          nama_agama: 'Islam',
        })
        .set(
          'Authorization',
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViYzcxZjdlLWQzYmMtNDEzYy1iODdhLWRiMjMyNGU0Y2RjOSIsInVzZXJuYW1lIjoiYWRtaW4xIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzIwMTgwNzI2LCJleHAiOjE3MjAyNjcxMjZ9.4yV1mDnkYYMPNSAH6jUF6D--870rt2HHk2blQn7EvOw',
        );

      expect(response.status).toBe(409);
      expect(response.body.errors).toBeDefined();
    });

    // Scenario 4 : Should return 401 if token not found
    it('should return 401 if token not found!', async () => {
      const response = await request(app.getHttpServer())
        .put('/api/master/agama/da66f97f-1bf1-43a1-a740-6e1c4ad037cf')
        .send({
          nama_agama: 'Test Agama 2',
        });

      expect(response.status).toBe(401);
      expect(response.body.errors).toBeDefined();
    });

    // Scenario 5 : Should return 401 if input token invalid
    it('should return 401 if input token invalid!', async () => {
      const response = await request(app.getHttpServer())
        .put('/api/master/agama/da66f97f-1bf1-43a1-a740-6e1c4ad037cf')
        .send({
          nama_agama: 'Test Agama 2',
        })
        .set('Authorization', 'test');

      expect(response.status).toBe(401);
      expect(response.body.errors).toBeDefined();
    });

    // Scenario 6 : Should return 404 if agama id not found
    it('should return 404 if agama not found!', async () => {
      const response = await request(app.getHttpServer())
        .put('/api/master/agama/test')
        .send({
          nama_agama: 'Test Agama 2',
        })
        .set(
          'Authorization',
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViYzcxZjdlLWQzYmMtNDEzYy1iODdhLWRiMjMyNGU0Y2RjOSIsInVzZXJuYW1lIjoiYWRtaW4xIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzIwMTgwNzI2LCJleHAiOjE3MjAyNjcxMjZ9.4yV1mDnkYYMPNSAH6jUF6D--870rt2HHk2blQn7EvOw',
        );

      expect(response.status).toBe(404);
      expect(response.body.errors).toBeDefined();
    });
  });

  // Delete agama API testing
  describe('TESTING_AGAMA_API_005', () => {
    // Scenario 1 : Should return 200 if delete agama success
    it('Should return 200 if delete agama success', async () => {
      const response = await request(app.getHttpServer())
        .delete('/api/master/agama/b9c21d19-42d0-48ee-82ba-b21d6baf692e')
        .set(
          'Authorization',
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViYzcxZjdlLWQzYmMtNDEzYy1iODdhLWRiMjMyNGU0Y2RjOSIsInVzZXJuYW1lIjoiYWRtaW4xIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzIwMTgwNzI2LCJleHAiOjE3MjAyNjcxMjZ9.4yV1mDnkYYMPNSAH6jUF6D--870rt2HHk2blQn7EvOw',
        );

      expect(response.status).toBe(200);
    });

    // Scenario 2 : Should return 404 if agama ID not found
    it('Should return 404 if agama ID not found', async () => {
      const response = await request(app.getHttpServer())
        .delete('/api/master/agama/test')
        .set(
          'Authorization',
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViYzcxZjdlLWQzYmMtNDEzYy1iODdhLWRiMjMyNGU0Y2RjOSIsInVzZXJuYW1lIjoiYWRtaW4xIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzIwMTgwNzI2LCJleHAiOjE3MjAyNjcxMjZ9.4yV1mDnkYYMPNSAH6jUF6D--870rt2HHk2blQn7EvOw',
        );

      expect(response.status).toBe(404);
      expect(response.body.errors).toBeDefined();
    });

    // Scenario 3 : Should return 401 if token not found
    it('should return 401 if token not found!', async () => {
      const response = await request(app.getHttpServer()).delete(
        '/api/master/agama/c9ea047b-4d9e-41f2-a0af-2d96d586c347',
      );

      expect(response.status).toBe(401);
      expect(response.body.errors).toBeDefined();
    });

    // Scenario 4 : Should return 401 if token invalid
    it('should return 401 if token invalid!', async () => {
      const response = await request(app.getHttpServer())
        .delete('/api/master/agama/b9c21d19-42d0-48ee-82ba-b21d6baf692e')
        .set('Authorization', 'test');

      expect(response.status).toBe(401);
      expect(response.body.errors).toBeDefined();
    });
  });
});
