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
