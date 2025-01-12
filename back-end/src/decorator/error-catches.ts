import 'reflect-metadata';

import { Prisma } from "@prisma/client"
import { ConflictException, ForbiddenException, InternalServerErrorException } from "@nestjs/common";
export function ErrorCatches(message: string = "Resource not found") {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalValue = descriptor.value
        descriptor.value = async function (...args: any[]) {

            try {
                return await originalValue.apply(this, args)
            } catch (e) {

                if(e instanceof  Prisma.PrismaClientKnownRequestError) {
                    switch(e.code) { //Fazer dessa forma adiciona uma complexidade 
                    // a mais do que de criar um decorator para cada erro, porém não são, ou não devem, ser feitas
                    // muitas requisições para os endpoints em que esse decorator faz parte, então achei que não seria problema, 
                    // já que também não temos muitos tipos de erros. Em um probjeto escalavel, talvez seja necessário mudar isso.
                        case "P2025":
                            throw new ForbiddenException(message)
                        case "P2002":
                            const field = e.meta?.target || "unknown field"
                            throw new ConflictException(message + " fields: " + field)
                        default:
                            throw new InternalServerErrorException(message)}
                }

                throw e
            }
        }


        return descriptor
    }
}