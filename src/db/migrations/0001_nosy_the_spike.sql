ALTER TABLE "customers" ALTER COLUMN "first_name" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "customers" ALTER COLUMN "last_name" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "customers" ALTER COLUMN "email" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "customers" ALTER COLUMN "phone" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "customers" ALTER COLUMN "address1" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "customers" ALTER COLUMN "address2" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "customers" ALTER COLUMN "city" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "customers" ALTER COLUMN "zip" SET DATA TYPE varchar(10);--> statement-breakpoint
ALTER TABLE "tickets" ALTER COLUMN "title" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "tickets" ALTER COLUMN "tech" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "tickets" ALTER COLUMN "tech" SET DEFAULT 'unassigned';