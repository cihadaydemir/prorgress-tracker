CREATE TABLE `image_paths_table` (
	`serial_id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`id` text(21) NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updated_at` text,
	`deleted_at` text,
	`progress_id` text NOT NULL,
	`path` text NOT NULL,
	FOREIGN KEY (`progress_id`) REFERENCES `progress_table`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `image_paths_table_id_unique` ON `image_paths_table` (`id`);--> statement-breakpoint
CREATE TABLE `progress_table` (
	`serial_id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`id` text(21) NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updated_at` text,
	`deleted_at` text,
	`user_id` text NOT NULL,
	`weight` integer NOT NULL,
	`hip_circumference` integer NOT NULL,
	`chest_circumference` integer NOT NULL,
	`shoulder_width` integer NOT NULL,
	`abdominal_girth` integer NOT NULL,
	`images` text NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users_table`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `progress_table_id_unique` ON `progress_table` (`id`);--> statement-breakpoint
CREATE TABLE `users_table` (
	`serial_id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`id` text(21) NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updated_at` text,
	`deleted_at` text,
	`name` text NOT NULL,
	`age` integer NOT NULL,
	`height` integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_table_id_unique` ON `users_table` (`id`);