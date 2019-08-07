import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class AddTableTourOfHeroes1565158587372 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: 'heroes',
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
                    name: 'isActive',
                    type: 'boolean',
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable('heroes');
    }

}
