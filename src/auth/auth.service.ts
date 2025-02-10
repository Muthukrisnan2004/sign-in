import { Injectable, BadRequestException, ForbiddenException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { jwtSecret } from '../utils/constants';
import { Token } from 'graphql';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwt: JwtService
  ) {}

  async create(createUserInput: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserInput);
    return createdUser.save();
  }

  async signup(dto: CreateUserDto) {
    const { email, password } = dto;
    const foundUser = await this.findByEmail(email);
    if (foundUser) {
      throw new BadRequestException('Email already exists');
    }
    const hashedPassword = await this.hashPassword(password);

    const createdUser = new this.userModel({
      ...dto,
      password: hashedPassword,
    });
    await createdUser.save();

    return { message: 'signup was successful' };
  }

  async signin(dto: CreateUserDto, req: Request, res: Response) {
    const { email, password } = dto;

    const foundUser = await this.findByEmail(email);

    if (!foundUser) {
      throw new BadRequestException('Wrong credentials');
    }
    const isMatch = await this.comparePasswords({
      password,
      hash: foundUser.password,
    });

    if (!isMatch) {
      throw new BadRequestException('Wrong credentials');
    }

    const token = await this.signToken({
      id: foundUser.email, // Changed from id to _id
      email: foundUser.email,
    });
    // sign jwt token and return to the user

    if (!token) {
      throw new ForbiddenException();
    }

    res.cookie('token', token);

    return res.send({ message: 'Logged in successfully' ,token });
  }

  async signout(req: Request, res: Response) { 
    res.clearCookie('token');
    return res.send({ message: 'Logged out successfully'});
  }

  async hashPassword(password: string) {
    const saltOrRounds = 10;
    return await bcrypt.hash(password, saltOrRounds);
  }

  async comparePasswords(args: { password: string; hash: string }) {
    return await bcrypt.compare(args.password, args.hash);
  }

  async signToken(args: { id: string; email: string }) {
    const payload = args;

    return this.jwt.signAsync(payload, { secret: jwtSecret });
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwt.sign(payload),
    };
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({ email }).exec();
  }
}

