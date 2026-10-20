import { remark } from 'remark';
import remarkParse from 'remark-parse';
import remarkStringify from 'remark-stringify';

/**
 * Extracts a markdown section by its heading text.
 * @param {string} markdown - The full markdown string.
 * @param {string} targetHeading - The text of the heading to find.
 * @returns {string} The isolated markdown section.
 */

function extractSection(markdown: string, targetHeading: string) {
    const processor = remark().use(remarkParse).use(remarkStringify);
    const ast = processor.parse(markdown);
    const children = ast.children;
    const normalizedTarget = targetHeading.trim().toLowerCase();

    let startIndex = -1;
    let endIndex = children.length;
    let targetDepth = 0;

    function getText(node: unknown): string {
        if (typeof node !== 'object' || node === null) return '';
        if ('value' in node && typeof node.value === 'string') return node.value;
        if ('children' in node && Array.isArray(node.children)) {
            return node.children.map(getText).join('');
        }
        return '';
    }

    // Find the target heading
    for (let i = 0; i < children.length; i++) {
        const node = children[i];

        // Look for a heading node
        if (node.type === 'heading') {
            const headingText = node.children.map(getText).join('').trim().toLowerCase();

            if (headingText === normalizedTarget && startIndex === -1) {
                startIndex = i;
                targetDepth = node.depth; // Record depth (e.g., h2 = 2)
                continue;
            }

            // Stop when hitting a heading of equal or higher importance (smaller or equal depth)
            if (startIndex !== -1 && node.depth <= targetDepth) {
                endIndex = i;
                break;
            }
        }
    }

    if (startIndex === -1) return ''; // Heading not found

    const sectionNodes = children
        .slice(startIndex + 1, endIndex)
        .map((node) => node.type === 'heading'
            ? { ...node, depth: Math.max(1, node.depth - 1) as 1 | 2 | 3 | 4 | 5 | 6 }
            : node);
    const sectionAst = { ...ast, children: sectionNodes };

    return processor.stringify(sectionAst);
}

export default extractSection;