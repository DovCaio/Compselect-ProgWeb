import 'reflect-metadata';

import { Prisma } from "@prisma/client"
import {  ForbiddenException, ConflictException } from "@nestjs/common";
export function UpdateExceptionCatches(message: string = "Resource not found") {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalValue = descriptor.value
        descriptor.value = async function (...args: any[]) {

            try {
                return await originalValue.apply(this, args)
            } catch (e) {

                if( e instanceof  Prisma.PrismaClientKnownRequestError) {
                    switch (e.code) {
                        case "P2025":
                            throw new ForbiddenException(message)
                        case "P2002":
                            throw new ConflictException("A conflit occurred in fields: " + e.meta?.fields)
                        default:
                            throw e
                    }
                }

                throw e
            }
        }


        return descriptor
    }
}