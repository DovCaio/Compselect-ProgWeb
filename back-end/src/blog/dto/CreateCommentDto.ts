import { Exclude } from "class-transformer"
import { IsEmail, IsNotEmpty, IsString } from "class-validator"


export class CreateCommentDTO {
    @IsString()
    @IsNotEmpty()
    userName: string
    @IsEmail()
    @IsNotEmpty()
    email: string
    @IsString()
    @IsNotEmpty()
    content: string
    @Exclude()
    emailVerificationToken?: string;
    @Exclude()
    accept?: boolean
    @Exclude()
    pending?: boolean

    constructor(partial: Partial<CreateCommentDTO>) {
        Object.assign(this, partial)
    }
}