import { marked, type Tokens } from "marked";

const renderer = {
    heading({ depth, tokens }: Tokens.Heading): string {
        const text = tokens.map(token => token.raw).join("");
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

    link({ href, title, tokens }: Tokens.Link): string {
        const text = tokens.map(token => token.raw).join("");
        return `<a href="${href}" title="${title || ""}" class="text-blue-400 hover:underline cursor-pointer" target="_blank">${marked.parse.parseInline(text)}</a>`
    },

    code({ lang, text }: Tokens.Code): string {
        const id = crypto.randomUUID();
        return `<div class="p-1 bg-neutral-700 text-[16px]">
        <div class="flex items-center justify-between py-2">
            <span class="px-1">csharp</span>
            <button class="flex items-center gap-2 px-1 rounded hover:bg-neutral-600 active:bg-neutral-700 duration-150 cursor-pointer"
                onclick="navigator.clipboard.writeText(document.getElementById('${id}').innerHTML)"
            >
                <i class="bi bi-copy"></i>
                <span>Copy</span>
            </button>
        </div>
        <pre class="bg-neutral-800 p-1 overflow-x-auto"><code class="language-${lang} text-[16px] font-['Cascadia_Code',_Consolas,_monospace]" id=${id}>${text}</code></pre>
    </div>`;
    },

    codespan({ text }: Tokens.Codespan): string {
        return `<code class="rounded px-1 py-0.5 bg-neutral-800 text-sm font-['Cascadia_Code',_Consolas,_monospace]">${text}</code>`;
    },

    list({ ordered, items }: Tokens.List): string {
        const tag = ordered ? "ol" : "ul";
        return `<${tag} class="ml-8 list-disc flex flex-col gap-2">
             ${items.map((item) => renderer.listitem(item)).join("")}
        </${tag}>`;
    },

    listitem({ tokens }: Tokens.ListItem): string {
        const text = tokens.map(token => token.raw).join("");
        return `<li>${marked.parse.parseInline(text)}</li>`;
    },

    table({ header, rows }: Tokens.Table): string {
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

    tablerow({ text }: Tokens.TableRow): string {
        return `<tr class="border-collapse border border-neutral-600 text-left">
        ${text}
        </tr>`
    },

    tablecell({ tokens, header }: Tokens.TableCell): string {
        ;
        const text = tokens.map(token => token.raw).join("");
        const tag = header ? "th" : "td";
        return `<${tag} class="border-collapse border border-neutral-600 px-2 py-1 text-left">
            ${marked.parse.parseInline(text)}
        </${tag}>`;
    }
};

marked.use({
    renderer
});

export function parseMarkdown(content: string): string {
    return marked.parse(content, { async: false });
}

