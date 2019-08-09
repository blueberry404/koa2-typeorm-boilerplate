import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class AddTableUsers1565337060778 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    isNullable: false,
                },
                {
                    name: 'name',
                    type: 'character varying',
                    length: '100',
                },
                {
                    name: 'email',
                    isUnique: true,
                    isNullable: false,
                    type: 'character varying',
                    length: '100',
                },
                {
                    name: 'password_hash',
                    type: 'character varying',
                    length: '300',
                },
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable('users');
    }

}
