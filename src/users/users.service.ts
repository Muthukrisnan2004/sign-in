import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UsersService {

    constructor(private prisma: PrismaService) { }

        async getMyUsers(id: string, req: any) {

            const user = await this.prisma.user.findUnique({ where: { id: id }, select: { id: true, email: true, hashedPassword: true } });

             if(!user){
                throw new NotFoundException('User not found');
             }

            const decodedUser = req.user as { id: string; email: string };
            

            if(user.id !== decodedUser.id){
                throw new ForbiddenException();
            }

            

            return { user };
        }

    async getUsers() {
        return await this.prisma.user.findMany(
            {select:{id:true,email:true}});
     }
}
