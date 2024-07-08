import * as request from 'supertest';
import { AppModule } from '../../../src/app.module';
import { TestModule } from '../../test.module';
import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';

describe('TESTING_GOLONGAN_API', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule, TestModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViYzcxZjdlLWQzYmMtNDEzYy1iODdhLWRiMjMyNGU0Y2RjOSIsInVzZXJuYW1lIjoiYWRtaW4xIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzIwNDQ1NDU1LCJleHAiOjE3MjA1MzE4NTV9.0DqTY3TepKkSqv7YDDJ3ywlKcfVBcBMJBPDpnYJsayA';

  // Create golongan API testing
  describe('TESTING_GOLONGAN_API_001', () => {
    // Scenario 1 : Should return 201 if create golongan success
    it('Should return 201 if create golongan success!', async () => {
      const response = await request(app.getHttpServer())
        .post('/api/master/golongan')
        .send({
          nama_golongan: 'Test golongan',
        })
        .set('Authorization', `Bearer ${token}`);

      expect(response.status).toBe(201);
      expect(response.body.data.id).toBeDefined();
    });

    // Scenario 2 : Should return 400 if  nama_golongan characters are less than 2!
    it('should return 400 if nama_golongan characters are less than 2!', async () => {
      const response = await request(app.getHttpServer())
        .post('/api/master/golongan')
        .send({
          nama_golongan: 'T',
        })
        .set('Authorization', `Bearer ${token}`);

      expect(response.status).toBe(400);
      expect(response.body.errors).toBeDefined();
    });

    // Scenario 3 : Should return 409 if nama_golongan already exist
    it('should return 409 if nama_golongan already exist!', async () => {
      const response = await request(app.getHttpServer())
        .post('/api/master/golongan')
        .send({
          nama_golongan: 'Golongan I D',
        })
        .set('Authorization', `Bearer ${token}`);

      expect(response.status).toBe(409);
      expect(response.body.errors).toBeDefined();
    });

    // Scenario 4 : Should return 401 if token not found
    it('should return 401 if token not found!', async () => {
      const response = await request(app.getHttpServer())
        .post('/api/master/golongan')
        .send({
          nama_golongan: 'Test Golongan 2',
        });

      expect(response.status).toBe(401);
      expect(response.body.errors).toBeDefined();
    });

    // Scenario 5 : Should return 401 if input token invalid
    it('should return 401 if input token invalid!', async () => {
      const response = await request(app.getHttpServer())
        .post('/api/master/golongan')
        .send({
          nama_golongan: 'Test Golongan',
        })
        .set('Authorization', 'test');

      expect(response.status).toBe(401);
      expect(response.body.errors).toBeDefined();
    });
  });

  // Get all golongan API testing
  describe('TESTING_GOLONGAN_API_002', () => {
    // Scenario 1 : Should return 200 if get all data success
    it('should return 200 if get all data success!', async () => {
      const response = await request(app.getHttpServer())
        .get('/api/master/golongan')
        .set('Authorization', `Bearer ${token}`);

      expect(response.status).toBe(200);
      expect(response.body.data).toBeDefined();
    });

    // Scenario 2 : Should return 401 if token not found
    it('should return 401 if token not found!', async () => {
      const response = await request(app.getHttpServer()).get(
        '/api/master/golongan',
      );

      expect(response.status).toBe(401);
      expect(response.body.errors).toBeDefined();
    });

    // Scenario 3 : Should return 401 if token invalid
    it('Should return 401 if token invalid!', async () => {
      const response = await request(app.getHttpServer())
        .get('/api/master/golongan')
        .set('Authorization', 'test');

      expect(response.status).toBe(401);
      expect(response.body.errors).toBeDefined();
    });
  });

  // Get golongan by id API testing
  describe('TESTING_GOLONGAN_API_003', () => {
    // Scenario 1 : Should retrun 200 if get golongan by id success
    it('should return 200 if get golongan by id success!', async () => {
      const response = await request(app.getHttpServer())
        .get('/api/master/golongan/0dda719d-2a4e-426a-bd08-31ed5244e567')
        .set('Authorization', `Bearer ${token}`);

      expect(response.status).toBe(200);
      expect(response.body.data).toBeDefined();
    });

    // Scenario 2 : Should return 404 if golongan not found & valid token
    it('should return 404 if golongan not found & valid token!', async () => {
      const response = await request(app.getHttpServer())
        .get('/api/master/golongan/test')
        .set('Authorization', `Bearer ${token}`);

      expect(response.status).toBe(404);
      expect(response.body.errors).toBeDefined();
    });

    // Scenario 3 : Should return 401 if token not found
    it('should return 401 if token not found!', async () => {
      const response = await request(app.getHttpServer()).get(
        '/api/master/golongan/0dda719d-2a4e-426a-bd08-31ed5244e567',
      );

      expect(response.status).toBe(401);
      expect(response.body.errors).toBeDefined();
    });

    // Scenario 4 : Should return 401 if token invalid
    it('should return 401 if token invalid!', async () => {
      const response = await request(app.getHttpServer())
        .get('/api/master/golongan/31ed04b0-6fd3-42fb-9616-9e4da4ac47f4')
        .set('Authorization', 'test');

      expect(response.status).toBe(401);
      expect(response.body.errors).toBeDefined();
    });
  });

  // Update golongan API testing
  describe('TESTING_GOLONGAN_API_004', () => {
    // Scenario 1 : Should return 200 if update golongan success
    it('Should return 200 if update golongan success', async () => {
      const response = await request(app.getHttpServer())
        .put('/api/master/golongan/ff2531d1-d1c4-4a39-9607-12c3c87c20f7')
        .send({
          nama_golongan: 'Test Golongan 2',
        })
        .set('Authorization', `Bearer ${token}`);

      expect(response.status).toBe(200);
      expect(response.body.data.nama_golongan).toBe('Test Golongan 2');
    });

    // Scenario 2 : Should return 400 if  nama_golongan characters are less than 2!
    it('should return 400 if nama_golongan characters are less than 2!', async () => {
      const response = await request(app.getHttpServer())
        .put('/api/master/golongan/ff2531d1-d1c4-4a39-9607-12c3c87c20f7')
        .send({
          nama_golongan: 'T',
        })
        .set('Authorization', `Bearer ${token}`);

      expect(response.status).toBe(400);
      expect(response.body.errors).toBeDefined();
    });

    // Scenario 3 : Should return 409 if nama_golongan already exist
    it('should return 409 if nama_golongan already exist!', async () => {
      const response = await request(app.getHttpServer())
        .put('/api/master/golongan/ff2531d1-d1c4-4a39-9607-12c3c87c20f7')
        .send({
          nama_golongan: 'Golongan I A',
        })
        .set('Authorization', `Bearer ${token}`);

      expect(response.status).toBe(409);
      expect(response.body.errors).toBeDefined();
    });

    // Scenario 4 : Should return 401 if token not found
    it('should return 401 if token not found!', async () => {
      const response = await request(app.getHttpServer())
        .put('/api/master/golongan/ff2531d1-d1c4-4a39-9607-12c3c87c20f7')
        .send({
          nama_golongan: 'Test golongan 2',
        });

      expect(response.status).toBe(401);
      expect(response.body.errors).toBeDefined();
    });

    // Scenario 5 : Should return 401 if input token invalid
    it('should return 401 if input token invalid!', async () => {
      const response = await request(app.getHttpServer())
        .put('/api/master/golongan/ff2531d1-d1c4-4a39-9607-12c3c87c20f7f')
        .send({
          nama_golongan: 'Test golongan 2',
        })
        .set('Authorization', 'test');

      expect(response.status).toBe(401);
      expect(response.body.errors).toBeDefined();
    });

    // Scenario 6 : Should return 404 if golongan id not found
    it('should return 404 if golongan not found!', async () => {
      const response = await request(app.getHttpServer())
        .put('/api/master/golongan/test')
        .send({
          nama_golongan: 'Test golongan 2',
        })
        .set('Authorization', `Bearer ${token}`);

      expect(response.status).toBe(404);
      expect(response.body.errors).toBeDefined();
    });
  });

  // Delete golongan API testing
  describe('TESTING_golongan_API_005', () => {
    // Scenario 1 : Should return 200 if delete golongan success
    it('Should return 200 if delete golongan success', async () => {
      const response = await request(app.getHttpServer())
        .delete('/api/master/golongan/3784460e-2986-4489-b7c8-35cd1a9dcf90')
        .set('Authorization', `Bearer ${token}`);

      expect(response.status).toBe(200);
    });

    // Scenario 2 : Should return 404 if golongan ID not found
    it('Should return 404 if golongan ID not found', async () => {
      const response = await request(app.getHttpServer())
        .delete('/api/master/golongan/test')
        .set('Authorization', `Bearer  ${token}`);

      expect(response.status).toBe(404);
      expect(response.body.errors).toBeDefined();
    });

    // Scenario 3 : Should return 401 if token not found
    it('should return 401 if token not found!', async () => {
      const response = await request(app.getHttpServer()).delete(
        '/api/master/golongan/3784460e-2986-4489-b7c8-35cd1a9dcf90',
      );

      expect(response.status).toBe(401);
      expect(response.body.errors).toBeDefined();
    });

    // Scenario 4 : Should return 401 if token invalid
    it('should return 401 if token invalid!', async () => {
      const response = await request(app.getHttpServer())
        .delete('/api/master/golongan/ff2531d1-d1c4-4a39-9607-12c3c87c20f7')
        .set('Authorization', 'test');

      expect(response.status).toBe(401);
      expect(response.body.errors).toBeDefined();
    });
  });
});
