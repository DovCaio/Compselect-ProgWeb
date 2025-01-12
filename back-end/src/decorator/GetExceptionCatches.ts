import 'reflect-metadata';

import {  NotFoundException } from "@nestjs/common";
export function GetExceptionCatches(message: string = "Resource not found") {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalValue = descriptor.value
        descriptor.value = async function (...args: any[]) {

            const result =  await originalValue.apply(this, args)

            if (!result) {
                throw new NotFoundException(message)
            }

            return result

            
        }
        
        return descriptor

    }
}