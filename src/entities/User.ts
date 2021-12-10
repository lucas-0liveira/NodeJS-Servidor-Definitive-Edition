import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";

import {v4 as uuid} from "uuid"

@Entity ("users")
class {

    @PrimaryColumn ()
    readonly id: string;

    @Column ()
    name: string;
    
    @Column ()
    email: string;

    @Column ()
    admin: boolean;

    @CreateDateColumn ()
    created_at: Date;

    @UpdateDateColumn ()
    updated_at: Date;

    constructor () {

    }
}

export { User };

//entidade < - > ORM < - > BD (users)
