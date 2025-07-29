import { marked, Tokens } from "marked";

const renderer = {
    heading({ depth, tokens }: Tokens.Heading) {
        const text = tokens.map((token) => token.raw).join("");
        const id = text.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
        const fonts: Record<number, string> = {
            1: "text-4xl font-semibold",
            2: "text-3xl font-semibold",
            3: "text-2xl font-medium",
            4: "text-xl font-medium",
            5: "text-lg underline",
            6: "text-lg underline"
        };

        return `<h${depth} class="${fonts[depth]} navigate-h-${depth} scroll-mt-16" id=${id}>${marked.parse.parseInline(text)}</h${depth}>`;
    },

    link({ href, title, tokens }: Tokens.Link) {
        const text = tokens.map((token) => token.raw).join("");
        return `<a href="${href}" title="${title || ""}" class="text-blue-400 hover:underline cursor-pointer" target="_blank">${marked.parse.parseInline(text)}</a>`
    },

    code({ lang, text }: Tokens.Code) {
        const id = crypto.randomUUID();
        return `<div class="p-1 bg-neutral-700 text-[16px]">
        <div class="flex items-center justify-between py-2">
            <span class="px-1">${lang}</span>
            <button class="flex items-center gap-2 px-1 rounded duration-150 cursor-pointer hover:underline"
                onclick="navigator.clipboard.writeText(document.getElementById('${id}').innerHTML)"
            >
                <i class="bi bi-copy"></i>
                <span>Copy</span>
            </button>
        </div>
        <pre class="bg-neutral-800 text-base p-1 overflow-x-auto"><code class="language-${lang} text-[16px] font-['Cascadia_Code',_Consolas,_monospace]" id=${id}>${text}</code></pre>
    </div>`;
    },

    codespan({ text }: Tokens.Codespan) {
        return `<code class="rounded px-1 py-0.5 bg-neutral-800 font-['Cascadia_Code',_Consolas,_monospace]">${text}</code>`;
    },

    checkbox({ checked }: Tokens.Checkbox) {
        return `<input type="checkbox" readonly ${checked ? "checked" : ""} class="checkbox checkbox-xs rounded-none"/>`;
    },


    list({ ordered, items }: Tokens.List) {
        const tag = ordered ? "ol" : "ul";
        return `<${tag} class="ml-8 ${ordered ? "list-decimal" : "list-disc"} flex flex-col gap-2">
             ${items.map((item) => renderer.listitem(item)).join("")}
        </${tag}>`;
    },

    listitem({ tokens, task, checked }: Tokens.ListItem) {
        const text = tokens.map((token) => token.raw).join("");
        if (task) {
            return `<li class="list-none flex items-center gap-2">
            ${renderer.checkbox({ checked: checked ?? false })}
            <span>${marked.parseInline(text.replace(/^\[.\]\s*/, ""))}</span>
            </li>`;
        }

        return `<li>${marked.parseInline(text)}</li>`;
    },

    table({ header, rows }: Tokens.Table) {
        return `<div class="overflow-x-auto py-2">
        <table class="table-auto border-collapse border border-neutral-600">
            <thead>
            ${renderer.tablerow({ text: header.map((th) => renderer.tablecell(th)).join("") })}
            </thead>
            <tbody>
            ${rows.map((row) => renderer.tablerow({ text: row.map((td) => renderer.tablecell(td)).join("") })).join("")}
            </tbody>
        </table>
        </div>`
    },

    tablerow({ text }: Tokens.TableRow) {
        return `<tr class="border-collapse border border-neutral-600 text-left">
        ${text}
        </tr>`
    },

    tablecell({ tokens, header }: Tokens.TableCell) {
        const text = tokens.map((token) => token.raw).join("");
        const tag = header ? "th" : "td";
        return `<${tag} class="border-collapse border border-neutral-600 px-2 py-1 text-left">
            ${marked.parse.parseInline(text)}
        </${tag}>`;
    },

    blockquote({ tokens }: Tokens.Blockquote) {
        const text = tokens.map((token) => token.raw).join("");
        return `<blockquote class="rounded-lg overflow-hidden bg-neutral-600 flex items-stretch">
        <div class="w-1.5 bg-blue-600"></div>
        <div class="flex-1 px-4 py-2"><p class="opacity-80">${marked.parse.parseInline(text)}</p></div>
        </blockquote>`
    }
};

marked.use({
    renderer,
    gfm: true
});

/** @param {string} content */
export function parseMarkdown(content: string) {
    return marked.parse(content, { async: false });
}

