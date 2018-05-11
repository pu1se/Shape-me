namespace DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddProductTypeStringRestriction : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.ProductGroups", "ProductType", c => c.String(nullable: false, maxLength: 50));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.ProductGroups", "ProductType", c => c.String(nullable: false));
        }
    }
}
