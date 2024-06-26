import { HttpException, HttpStatus } from '@nestjs/common';

export const imageFileFilter = (req: any, file: any, callback: any) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
    return callback(
      new HttpException(
        'Only image  files are allowed!',
        HttpStatus.BAD_REQUEST,
      ),
      false,
    );
  }

  if (file.size > 1024 * 1024 * 2) {
    return callback(
      new HttpException('File is too large!', HttpStatus.BAD_REQUEST),
      false,
    );
  }

  callback(null, true);
};

export const imageFileName = (req: any, file: any, cb: any) => {
  const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
  cb(null, uniqueSuffix + '-' + file.originalname);
};
