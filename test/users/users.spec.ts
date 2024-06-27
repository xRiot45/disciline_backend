import * as request from 'supertest';
import { AppModule } from '../../src/app.module';
import { TestModule } from '../test.module';
import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';

describe('TESTING_USERS_API', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule, TestModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  // SignUp API Testing
  describe('TESTING_USERS_API_001', () => {
    // Scenario 1
    it('should return 201 if user is created successfully!', async () => {
      const response = await request(app.getHttpServer())
        .post('/api/users/signup')
        .send({
          username: 'test1234',
          password: 'test1234',
        });

      expect(response.status).toBe(201);
      expect(response.body.data.id).toBeDefined();
      expect(response.body.data.username).toBe('test1234');
      expect(response.body.data.role).toBe('admin');
    });

    // Scenario 2
    it('should return 409 if user already exists!', async () => {
      const response = await request(app.getHttpServer())
        .post('/api/users/signup')
        .send({
          username: 'test1234',
          password: 'test1234',
        });

      expect(response.status).toBe(409);
      expect(response.body.errors).toBeDefined();
    });

    // Scenario 3
    it('should return 400 if username characters are less than 6!', async () => {
      const response = await request(app.getHttpServer())
        .post('/api/users/signup')
        .send({
          username: 'test',
          password: 'test1234',
        });

      expect(response.status).toBe(400);
      expect(response.body.errors).toBeDefined();
    });

    // Scenario 4
    it('should return 400 if password characters are less than 8!', async () => {
      const response = await request(app.getHttpServer())
        .post('/api/users/signup')
        .send({
          username: 'test1234',
          password: 'test',
        });

      expect(response.status).toBe(400);
      expect(response.body.errors).toBeDefined();
    });

    // Scenario 5
    it('should return 400 if username characters are less than 6 & password characters are less than 8!', async () => {
      const response = await request(app.getHttpServer())
        .post('/api/users/signup')
        .send({
          username: 'test',
          password: 'test',
        });

      expect(response.status).toBe(400);
      expect(response.body.errors).toBeDefined();
    });
  });

  // SignIn API Testing
  describe('TESTING_USERS_API_002', () => {
    // Scenario 1
    it('should return 201 if user is login successfully!', async () => {
      const response = await request(app.getHttpServer())
        .post('/api/users/signin')
        .send({
          username: 'admin1',
          password: 'admin1234',
        });

      expect(response.status).toBe(201);
      expect(response.body.data.accessToken).toBeDefined();
    });

    // Scenario 2
    it('should return 401 if username invalid & password valid', async () => {
      const response = await request(app.getHttpServer())
        .post('/api/users/signin')
        .send({
          username: 'admin312',
          password: 'admin123',
        });

      expect(response.status).toBe(401);
      expect(response.body.errors).toBeDefined();
    });

    // Scenario 3
    it('should return 401 if username valid & password invalid', async () => {
      const response = await request(app.getHttpServer())
        .post('/api/users/signin')
        .send({
          username: 'admin1',
          password: 'admin123',
        });

      expect(response.status).toBe(401);
      expect(response.body.errors).toBeDefined();
    });

    // Scenario 4
    it('should return 401 if username invalid & password invalid', async () => {
      const response = await request(app.getHttpServer())
        .post('/api/users/signin')
        .send({
          username: 'admin312',
          password: 'admin1234',
        });

      expect(response.status).toBe(401);
      expect(response.body.errors).toBeDefined();
    });
  });

  // Get User By Token API Testing
  describe('TESTING_USERS_API_003', () => {
    // Scenario 1
    it('should return 200 if token valid & token found', async () => {
      const response = await request(app.getHttpServer())
        .get('/api/users')
        .set(
          'Authorization',
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViYzcxZjdlLWQzYmMtNDEzYy1iODdhLWRiMjMyNGU0Y2RjOSIsInVzZXJuYW1lIjoiYWRtaW4xIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzE5NDYwMzczLCJleHAiOjE3MTk1NDY3NzN9.SVmsOz2IGr2YeOgPIFdTl2rjKlYlhw7N_S3q3EtPi04',
        );

      expect(response.status).toBe(200);
      expect(response.body.data.id).toBeDefined();
      expect(response.body.data.username).toBeDefined();
      expect(response.body.data.role).toBeDefined();
    });

    // Scenario 2
    it('should return 401 if token invalid & token found', async () => {
      const response = await request(app.getHttpServer())
        .get('/api/users')
        .set('Authorization', 'Bearer test');

      expect(response.status).toBe(401);
      expect(response.body.errors).toBeDefined();
    });

    // Scenario 3
    it('should return 401 if token not found', async () => {
      const response = await request(app.getHttpServer()).get('/api/users');

      expect(response.status).toBe(401);
      expect(response.body.errors).toBeDefined();
    });
  });

  // Update Password API Testing
  describe('TESTING_USERS_API_004', () => {
    // Scenario 1
    it('should return 200 if update password successfully and token found!', async () => {
      const response = await request(app.getHttpServer())
        .put('/api/users/update-password')
        .set(
          'Authorization',
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViYzcxZjdlLWQzYmMtNDEzYy1iODdhLWRiMjMyNGU0Y2RjOSIsInVzZXJuYW1lIjoiYWRtaW4xIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzE5NDYxMjc0LCJleHAiOjE3MTk1NDc2NzR9.SP123jMMCjOc0ao8wtYfBwaEr5UzPkPDuYTP8RnBKhk',
        )
        .send({
          password: 'admin1234',
        });

      expect(response.status).toBe(200);
      expect(response.body.message).toBeDefined();
    });

    // Scenario 2
    it('should return 400 if password characters are less than 8 and token found!', async () => {
      const response = await request(app.getHttpServer())
        .put('/api/users/update-password')
        .set(
          'Authorization',
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViYzcxZjdlLWQzYmMtNDEzYy1iODdhLWRiMjMyNGU0Y2RjOSIsInVzZXJuYW1lIjoiYWRtaW4xIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzE5NDYxMjc0LCJleHAiOjE3MTk1NDc2NzR9.SP123jMMCjOc0ao8wtYfBwaEr5UzPkPDuYTP8RnBKhk',
        )
        .send({
          password: 'test',
        });

      expect(response.status).toBe(400);
      expect(response.body.errors).toBeDefined();
    });

    // Scenario 3
    it('should return 401 if password characters valid & token invalid!', async () => {
      const response = await request(app.getHttpServer())
        .put('/api/users/update-password')
        .set('Authorization', 'Bearer test')
        .send({
          password: 'admin1234',
        });

      expect(response.status).toBe(401);
      expect(response.body.errors).toBeDefined();
    });

    // Scenario 4
    it('should return 401 if password characters valid & token not found!', async () => {
      const response = await request(app.getHttpServer())
        .put('/api/users/update-password')
        .send({
          password: 'admin1234',
        });

      expect(response.status).toBe(401);
      expect(response.body.errors).toBeDefined();
    });
  });

  // Logout API Testing
  describe('TESTING_USERS_API_005', () => {
    // Scenario 1
    it('should return 200 if logout successfully & token found', async () => {
      const response = await request(app.getHttpServer())
        .delete('/api/users/signout')
        .set(
          'Authorization',
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViYzcxZjdlLWQzYmMtNDEzYy1iODdhLWRiMjMyNGU0Y2RjOSIsInVzZXJuYW1lIjoiYWRtaW4xIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzE5NDYxMjc0LCJleHAiOjE3MTk1NDc2NzR9.SP123jMMCjOc0ao8wtYfBwaEr5UzPkPDuYTP8RnBKhk',
        );

      expect(response.status).toBe(200);
      expect(response.body.message).toBeDefined();
    });

    // Scenario 2
    it('should return 401 if token invalid & token found', async () => {
      const response = await request(app.getHttpServer())
        .delete('/api/users/signout')
        .set('Authorization', 'Bearer test');

      expect(response.status).toBe(401);
      expect(response.body.errors).toBeDefined();
    });

    // Scenario 3
    it('shoud return 401 if token not found', async () => {
      const response = await request(app.getHttpServer()).delete(
        '/api/users/signout',
      );

      expect(response.status).toBe(401);
      expect(response.body.errors).toBeDefined();
    });
  });
});
