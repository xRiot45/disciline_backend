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
          nama_agama: 'Test Agama',
        })
        .set(
          'Authorization',
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViYzcxZjdlLWQzYmMtNDEzYy1iODdhLWRiMjMyNGU0Y2RjOSIsInVzZXJuYW1lIjoiYWRtaW4xIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzIwMTgwNzI2LCJleHAiOjE3MjAyNjcxMjZ9.4yV1mDnkYYMPNSAH6jUF6D--870rt2HHk2blQn7EvOw',
        );

      expect(response.status).toBe(201);
      expect(response.body.data.id).toBeDefined();
      expect(response.body.data.nama_agama).toBe('Test Agama');
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
});
