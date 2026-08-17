'use client';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';

export default function RichTextEditor({ value, onChange }) {
    const editor = useEditor({
        extensions: [StarterKit, Underline],
        content: value || '',
        immediatelyRender: false,
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML());
        },
    });

    if (!editor) return null;

    const btnStyle = (active) => ({
        border: '1px solid #e2e8f0',
        backgroundColor: active ? '#0f172a' : '#ffffff',
        color: active ? '#ffffff' : '#334155',
        borderRadius: '6px',
        padding: '6px 10px',
        fontSize: '13px',
        fontWeight: '600',
        cursor: 'pointer',
        lineHeight: 1,
    });

    return (
        <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', overflow: 'hidden' }}>
            <div style={{
                display: 'flex',
                gap: '6px',
                flexWrap: 'wrap',
                padding: '8px',
                borderBottom: '1px solid #e2e8f0',
                backgroundColor: '#f8fafc'
            }}>
                <button type="button" onClick={() => editor.chain().focus().toggleBold().run()} style={btnStyle(editor.isActive('bold'))} title="Bold">
                    <b>B</b>
                </button>
                <button type="button" onClick={() => editor.chain().focus().toggleItalic().run()} style={btnStyle(editor.isActive('italic'))} title="Italic">
                    <i>I</i>
                </button>
                <button type="button" onClick={() => editor.chain().focus().toggleUnderline().run()} style={btnStyle(editor.isActive('underline'))} title="Underline">
                    <u>U</u>
                </button>
                <button type="button" onClick={() => editor.chain().focus().toggleStrike().run()} style={btnStyle(editor.isActive('strike'))} title="Strikethrough">
                    <s>S</s>
                </button>
                <span style={{ width: '1px', backgroundColor: '#e2e8f0', margin: '2px 4px' }} />
                <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} style={btnStyle(editor.isActive('heading', { level: 2 }))} title="Heading">
                    H2
                </button>
                <button type="button" onClick={() => editor.chain().focus().toggleBulletList().run()} style={btnStyle(editor.isActive('bulletList'))} title="Bullet list">
                    • List
                </button>
                <button type="button" onClick={() => editor.chain().focus().toggleOrderedList().run()} style={btnStyle(editor.isActive('orderedList'))} title="Numbered list">
                    1. List
                </button>
                <button type="button" onClick={() => editor.chain().focus().toggleBlockquote().run()} style={btnStyle(editor.isActive('blockquote'))} title="Quote">
                    " Quote
                </button>
                <span style={{ width: '1px', backgroundColor: '#e2e8f0', margin: '2px 4px' }} />
                <button type="button" onClick={() => editor.chain().focus().undo().run()} style={btnStyle(false)} title="Undo">
                    ↺
                </button>
                <button type="button" onClick={() => editor.chain().focus().redo().run()} style={btnStyle(false)} title="Redo">
                    ↻
                </button>
            </div>
            <div style={{ padding: '12px', minHeight: '220px' }}>
                <EditorContent editor={editor} />
            </div>
        </div>
    );
}