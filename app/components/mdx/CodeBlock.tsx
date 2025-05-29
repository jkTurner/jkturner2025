import { ReactNode } from 'react';
// import CopyButton from './CopyButton';

interface CodeBlockProps {
  title?: string;
  children: ReactNode;
}

const CodeBlock = ({ title, children }: CodeBlockProps) => {
  return (
    <div className="rounded-md border border-zinc-700 overflow-hidden">
      {title && (
        <div className="not-prose bg-zinc-800 text-white px-4 py-2 text-xxs border-b border-zinc-700">
          {title}
        </div>
      )}
      <div className="relative">
        {children}
        {/* <CopyButton /> */}
      </div>
    </div>
  );
};

export default CodeBlock;

// import { codeToHast, type BundledLanguage } from 'shiki';
// import { toJsxRuntime } from 'hast-util-to-jsx-runtime';
// import { Fragment } from 'react';
// import { jsx, jsxs } from 'react/jsx-runtime';
// import { JSX } from 'react';


// interface CodeBLockProps {
//     code: string;
//     lang: BundledLanguage;
//     filename?: string;
// }

// const CodeBlock = async ({ code, lang, filename }: CodeBLockProps) => {

//     const hast = await codeToHast(code, {
//         lang,
//         theme: 'github-dark',
//     })

//     const highlightedCode = toJsxRuntime(hast, {
//         Fragment,
//         jsx,
//         jsxs,
//         components: {
//             pre: (props) => (
//                 <pre
//                     className="!my-0 w-full overflow-x-auto"
//                     {...props}
//                 />
//             ),
//             code: (props) => (
//                 <code
//                     className="block overflow-x-auto whitespace-pre min-w-full px-4 py-3 leading-relaxed text-white font-mono"
//                     {...props}
//                 />
//             )
//         }
//     }) as JSX.Element

//     return (
//         <div className="flex flex-col w-full max-w-[100%] overflow-x-auto rounded-md border border-zinc-700">
//             {filename && (
//                 <div className="px-sm py-xs text-zinc-200 border-b border-zinc-700 bg-zinc-800 rounded-t-md">
//                 {filename}
//                 </div>
//             )}
//             <div className="w-full overflow-auto">
//                 {highlightedCode}
//             </div>
//         </div>
//     )
// }

// export default CodeBlock;













// import { codeToHast, type BundledLanguage } from 'shiki';
// import { toJsxRuntime } from 'hast-util-to-jsx-runtime';
// import { Fragment } from 'react';
// import { jsx, jsxs } from 'react/jsx-runtime';
// import { JSX } from 'react';


// interface CodeBLockProps {
//     code: string;
//     lang: BundledLanguage;
//     filename?: string;
// }

// const CodeBlock = async ({ code, lang, filename }: CodeBLockProps) => {

//     const hast = await codeToHast(code, {
//         lang,
//         theme: 'github-dark',
//     })

//     const highlightedCode = toJsxRuntime(hast, {
//         Fragment,
//         jsx,
//         jsxs,
//         components: {
//             pre: (props) => (
//                 <pre
//                     className="!my-0 w-full overflow-x-auto"
//                     {...props}
//                 />
//             ),
//             code: (props) => (
//                 <code
//                     className="block px-4 py-3 leading-relaxed text-white font-mono"
//                     {...props}
//                 />
//             )
//         }
//     }) as JSX.Element

//     return (
//         <div className="flex flex-col w-full max-w-[100%] overflow-x-auto rounded-md border border-zinc-700">
//             {filename && (
//                 <div className="px-sm py-xs text-zinc-200 border-b border-zinc-700 bg-zinc-800 rounded-t-md">
//                 {filename}
//                 </div>
//             )}
//             <div className="w-full overflow-auto">
//                 {highlightedCode}
//             </div>
//         </div>
//     )
// }

// export default CodeBlock;










