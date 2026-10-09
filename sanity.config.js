import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schemas';
import React, { useState } from 'react';
import { useDocumentOperation } from 'sanity';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'dummy_project_id';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

// Custom prominent Delete Action for Blog Posts inside Sanity Studio
function DeletePostAction(props) {
  const { delete: deleteOp } = useDocumentOperation(props.id, props.type);
  const [dialogOpen, setDialogOpen] = useState(false);

  return {
    label: 'Delete Blog Post',
    tone: 'critical',
    disabled: Boolean(deleteOp.disabled),
    title: deleteOp.disabled ? 'Cannot delete document' : 'Permanently delete this blog post and its drafts',
    onHandle: () => {
      setDialogOpen(true);
    },
    dialog: dialogOpen && {
      type: 'confirm',
      onCancel: () => setDialogOpen(false),
      onConfirm: () => {
        deleteOp.execute();
        props.onComplete();
      },
      message: 'Are you sure you want to permanently delete this blog post and any draft changes?',
    },
  };
}

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
  document: {
    actions: (prev, context) => {
      if (context.schemaType === 'post') {
        // Ensure PublishAction is strictly 1st so the big green Publish button is always available, followed by DeletePostAction
        const publishAction = prev.find((a) => a.action === 'publish') || prev[0];
        const remaining = prev.filter((a) => a !== publishAction && a.action !== 'delete');
        return [publishAction, DeletePostAction, ...remaining];
      }
      return prev;
    },
  },
});

