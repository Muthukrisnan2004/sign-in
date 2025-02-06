import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';
import * as passport from 'passport';
import * as Store from 'connect-redis';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Trust first proxy
  app.use((req, _res, next) => {
    req.headers['x-real-ip'] = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    next();
  });

  app.enableCors({
    origin: true,
    credentials: true,
  });

  app.use(cookieParser());
  app.use(
    session({
      secret: 'your-secret-key',
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 60000 * 60 * 24,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
      },
      name: 'session_id' // Change session cookie name
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());
  
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(5000);
}
bootstrap();
