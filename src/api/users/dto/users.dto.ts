export class SignUpUsersDtoRequest {
  username: string;
  password: string;
  role: string;
}

export class SignUpUsersDtoResponse {
  id: string;
  username: string;
  role: string;
}

export class SignInUsersDtoRequest {
  username: string;
  password: string;
}

export class SignInUsersDtoResponse {
  accessToken: string;
}

export class UsersDtoResponse {
  id: string;
  username: string;
  role: string;
}

export class UpdatePasswordDtoRequest {
  password: string;
}
