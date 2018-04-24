namespace DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddedNameToUser : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Users", "Name", c => c.String(nullable: false, maxLength: 250));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Users", "Name");
        }
    }
}
