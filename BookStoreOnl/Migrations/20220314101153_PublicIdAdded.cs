using Microsoft.EntityFrameworkCore.Migrations;

namespace BookStoreOnl.Migrations
{
    public partial class PublicIdAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "5ba08738-880a-4da3-bac3-7afa6746aa39");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "adc8d350-8a00-4b0e-a358-7e3419d2900c");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "191a02b2-4754-48b1-9472-5caf235c5db5", "fff1c580-7a47-42c0-afc6-9285e8e9d5d0", "Member", "MEMBER" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "8ece3653-f991-472f-9549-8bffa8e679d3", "446e03a1-db23-4206-ae6f-6b048dbbb724", "Admin", "ADMIN" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "191a02b2-4754-48b1-9472-5caf235c5db5");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "8ece3653-f991-472f-9549-8bffa8e679d3");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "5ba08738-880a-4da3-bac3-7afa6746aa39", "32694919-967a-4bff-967a-f0fd977470cf", "Member", "MEMBER" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "adc8d350-8a00-4b0e-a358-7e3419d2900c", "f9cbefe6-5819-4726-9d9a-b266c7535f29", "Admin", "ADMIN" });
        }
    }
}
