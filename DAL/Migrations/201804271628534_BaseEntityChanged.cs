namespace DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class BaseEntityChanged : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.ProductGroups", "LastChangedByUserId", c => c.Int(nullable: false));
            AlterColumn("dbo.ProductItems", "LastChangedByUserId", c => c.Int(nullable: false));
            AlterColumn("dbo.Users", "LastChangedByUserId", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Users", "LastChangedByUserId", c => c.Int());
            AlterColumn("dbo.ProductItems", "LastChangedByUserId", c => c.Int());
            AlterColumn("dbo.ProductGroups", "LastChangedByUserId", c => c.Int());
        }
    }
}
