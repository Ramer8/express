import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Books1709047787995 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "books",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "title",
                        type: "varchar",
                        length: "100",
                        isNullable:false
                    },
                    {
                        name: "genre",
                        type: "varchar",
                        length: "50",
                        isNullable:false
                    },
                    {
                        name: "author_id",
                        type: "int",
                    },
                ],
                foreignKeys: [
                    {
                        columnNames: ["author_id"],
                        referencedTableName: "authors",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE"
                    }
                ]
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
