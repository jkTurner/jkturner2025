import { codeToHast, type BundledLanguage } from 'shiki';
import { toJsxRuntime } from 'hast-util-to-jsx-runtime';
import { Fragment } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';
import { JSX } from 'react';


interface CodeBLockProps {
    code: string;
    lang: BundledLanguage;
    filename?: string;
}

const CodeBlock = async ({ code, lang, filename }: CodeBLockProps) => {

    const hast = await codeToHast(code, {
        lang,
        theme: 'github-dark',
    })

    const highlightedCode = toJsxRuntime(hast, {
        Fragment,
        jsx,
        jsxs,
        components: {
            pre: (props) => (
                <pre
                    className="!my-0 overflow-x-auto"
                    {...props}
                />
            ),
            code: (props) => (
                <code
                    className="block px-4 py-3 leading-relaxed text-white font-mono"
                    {...props}
                />
            )
        }
    }) as JSX.Element

    return (
        <div className="not-prose overflow-hidden rounded-md border border-zinc-700">
            {filename && (
                <div className="px-4 py-2 text-zinc-200 border-b border-zinc-700 bg-zinc-800 rounded-t-md">
                {filename}
                </div>
            )}
            {highlightedCode}
        </div>
    )
}

export default CodeBlock;