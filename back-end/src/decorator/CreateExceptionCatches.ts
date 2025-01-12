import 'reflect-metadata';

import { Prisma } from "@prisma/client"
import { ConflictException } from "@nestjs/common";
export function CreateExceptionCatches(message: string = "Resource not found") {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalValue = descriptor.value
        descriptor.value = async function (...args: any[]) {

            try {
                return await originalValue.apply(this, args)
            } catch (e) {

                if(e instanceof  Prisma.PrismaClientKnownRequestError && e.code === "P2002") {
                        throw new ConflictException(message)
                }

                throw e
            }
        }


        return descriptor
    }
}