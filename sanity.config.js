import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schemas';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'dummy_project_id';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

export default defineConfig({
  name: 'default',
  title: 'Pragati Ujjayini Admin Studio',
  projectId,
  dataset,
  basePath: '/admin/studio',
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
