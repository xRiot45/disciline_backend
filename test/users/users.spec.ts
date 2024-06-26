/* eslint-disable @typescript-eslint/no-unused-vars */
import * as request from 'supertest';
import { AppModule } from '../../src/app.module';
import { TestModule } from '../test.module';
import { INestApplication } from '@nestjs/common';
import { UsersTestService } from './usersTest.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('TESTING_USERS_API', () => {
  let app: INestApplication;
  let usersTestService: UsersTestService;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule, TestModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    usersTestService = app.get(UsersTestService);
  });

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
});
