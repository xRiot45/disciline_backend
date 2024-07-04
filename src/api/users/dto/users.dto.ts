import { ApiProperty } from '@nestjs/swagger';

export class SignUpUsersRequest {
  @ApiProperty({
    type: String,
    description: 'Username',
  })
  username: string;

  @ApiProperty({
    type: String,
    description: 'Password',
  })
  password: string;
}

export class SignInUsersRequest {
  @ApiProperty({
    type: String,
    description: 'Username',
  })
  username: string;

  @ApiProperty({
    type: String,
    description: 'Password',
  })
  password: string;
}

export class UpdatePasswordRequest {
  @ApiProperty({
    type: String,
    description: 'Password',
  })
  password: string;
}

export class SignUpUsersResponse {
  id: string;
  username: string;
  role: string;
}

export class SignInUsersResponse {
  accessToken: string;
}

export class UsersResponse {
  id: string;
  username: string;
  role: string;
}
