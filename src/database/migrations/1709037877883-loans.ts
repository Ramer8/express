import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Loans1709037877883 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "loans",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "user_id",
                        type: "int",
                    },
                    {
                        name: "book_id",
                        type: "int",
                    },
                    {
                        name: "loan_date",
                        type: "timestamp",
                        default: "now()",
                        isNullable: false,
                    },
                    {
                        name: "due_date",
                        type: "datetime",
                        isNullable: false,
                    },
                    {
                        name: "return_date",
                        type: "datetime",
                        isNullable: false,
                    },
                ],
                foreignKeys: [
                    {
                        columnNames: ["book_id"],
                        referencedTableName: "books",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE"
                    },
                    {
                        columnNames: ["user_id"],
                        referencedTableName: "users",
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

