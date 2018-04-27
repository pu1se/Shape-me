namespace DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ChangedProductTypeToString : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.ProductGroups", "ProductType", c => c.String(nullable: false));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.ProductGroups", "ProductType", c => c.Int(nullable: false));
        }
    }
}
