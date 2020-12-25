import {MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey} from "typeorm";

export class NewDatabase1608766198000 implements MigrationInterface {

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
                    name: 'password',
                    type: 'character varying',
                    length: '300',
                },
            ]
        }));

        await queryRunner.addColumn("heroes", new TableColumn({
            name: "userId",
            type: "int"
        }));

        await queryRunner.createForeignKey("heroes", new TableForeignKey({
            columnNames: ["userId"],
            referencedColumnNames: ["id"],
            referencedTableName: "users",
            onDelete: "CASCADE"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropForeignKey('heroes', 'userId');
        await queryRunner.dropColumn('heroes', 'userId');
        await queryRunner.dropTable('heroes');
        await queryRunner.dropTable('users');
    }

}
