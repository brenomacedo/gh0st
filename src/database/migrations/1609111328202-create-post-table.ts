import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createPostTable1609111328202 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'post',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'title',
                    type: 'varchar'
                },
                {
                    name: 'content',
                    type: 'longtext'
                },
                {
                    name: 'createdAt',
                    type: 'date',
                    default: 'now()'
                },
                {
                    name: 'userId',
                    type: 'integer'
                }
            ],
            foreignKeys: [
                {
                    name: 'user',
                    columnNames: ['userId'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'user',
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('post')
    }

}
