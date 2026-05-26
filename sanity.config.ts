'use client';

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { sanityDataset, sanityProjectId } from "./src/sanity/env";
import { schemaTypes } from "./src/sanity/schema-types";
import { deskStructure } from "./src/sanity/structure";

export default defineConfig({
  name: "default",
  title: "X-PERIMENTAL",
  basePath: "/studio",
  projectId: sanityProjectId,
  dataset: sanityDataset,
  plugins: [
    structureTool({
      structure: deskStructure,
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});
