create table "public"."grid_cells" (
    "id" bigint generated by default as identity not null,
    "created_at" timestamp with time zone default now(),
    "is_selected" boolean default false,
    "value" smallint
);


alter table "public"."grid_cells" enable row level security;

create table "public"."levels" (
    "id" bigint generated by default as identity not null,
    "created_at" timestamp with time zone default now(),
    "tier_id" bigint,
    "level_number" smallint,
    "target_number" smallint
);


alter table "public"."levels" enable row level security;

create table "public"."math_options" (
    "id" bigint generated by default as identity not null,
    "created_at" timestamp with time zone default now(),
    "value" smallint,
    "is_available" boolean default true,
    "level_id" bigint
);


alter table "public"."math_options" enable row level security;

create table "public"."tiers" (
    "id" bigint generated by default as identity not null,
    "created_at" timestamp with time zone default now(),
    "name" text,
    "is_enabled" boolean default false
);


alter table "public"."tiers" enable row level security;

CREATE UNIQUE INDEX grid_cells_pkey ON public.grid_cells USING btree (id);

CREATE UNIQUE INDEX levels_pkey ON public.levels USING btree (id);

CREATE UNIQUE INDEX math_options_pkey ON public.math_options USING btree (id);

CREATE UNIQUE INDEX tiers_pkey ON public.tiers USING btree (id);

alter table "public"."grid_cells" add constraint "grid_cells_pkey" PRIMARY KEY using index "grid_cells_pkey";

alter table "public"."levels" add constraint "levels_pkey" PRIMARY KEY using index "levels_pkey";

alter table "public"."math_options" add constraint "math_options_pkey" PRIMARY KEY using index "math_options_pkey";

alter table "public"."tiers" add constraint "tiers_pkey" PRIMARY KEY using index "tiers_pkey";

alter table "public"."levels" add constraint "levels_tier_id_fkey" FOREIGN KEY (tier_id) REFERENCES tiers(id) ON DELETE CASCADE not valid;

alter table "public"."levels" validate constraint "levels_tier_id_fkey";

alter table "public"."math_options" add constraint "math_options_level_id_fkey" FOREIGN KEY (level_id) REFERENCES levels(id) ON DELETE CASCADE not valid;

alter table "public"."math_options" validate constraint "math_options_level_id_fkey";

