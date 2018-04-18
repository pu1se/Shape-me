namespace DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Init : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.ProductGroups",
                c => new
                    {
                        ProductGroupId = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false, maxLength: 250),
                        ProductType = c.Int(nullable: false),
                        CreatedDate = c.DateTime(nullable: false),
                        LastChangedDate = c.DateTime(nullable: false),
                        LastChangedByUserId = c.Int(),
                    })
                .PrimaryKey(t => t.ProductGroupId);
            
            CreateTable(
                "dbo.ProductItems",
                c => new
                    {
                        ProductItemId = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false, maxLength: 250),
                        ImageUrl = c.String(nullable: false, maxLength: 250),
                        Price = c.Double(),
                        IsBest = c.Boolean(nullable: false),
                        CreatedDate = c.DateTime(nullable: false),
                        LastChangedDate = c.DateTime(nullable: false),
                        LastChangedByUserId = c.Int(),
                        ProductGroup_ProductGroupId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.ProductItemId)
                .ForeignKey("dbo.ProductGroups", t => t.ProductGroup_ProductGroupId, cascadeDelete: true)
                .Index(t => t.ProductGroup_ProductGroupId);
            
            CreateTable(
                "dbo.Users",
                c => new
                    {
                        UserId = c.Int(nullable: false, identity: true),
                        Email = c.String(nullable: false, maxLength: 250),
                        PasswordHash = c.String(nullable: false, maxLength: 250),
                        CreatedDate = c.DateTime(nullable: false),
                        LastChangedDate = c.DateTime(nullable: false),
                        LastChangedByUserId = c.Int(),
                    })
                .PrimaryKey(t => t.UserId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.ProductItems", "ProductGroup_ProductGroupId", "dbo.ProductGroups");
            DropIndex("dbo.ProductItems", new[] { "ProductGroup_ProductGroupId" });
            DropTable("dbo.Users");
            DropTable("dbo.ProductItems");
            DropTable("dbo.ProductGroups");
        }
    }
}
