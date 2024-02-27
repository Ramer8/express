import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Authors1709037506357 implements MigrationInterface {

   public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "authors",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "name",
                        type: "varchar",
                        length: "100",
                        isNullable:false
                    },
                    {
                        name: "nationality",
                        type: "varchar",
                        length: "100",
                        isNullable:false
                    },
                ],
            }),
            true
        );
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
         await queryRunner.dropTable("author");
        
    }


}


