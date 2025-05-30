import type { MDXComponents } from 'mdx/types'
// import CopyButton from './app/components/ui/buttons/CopyButton'
import CodeBlock from './app/components/mdx/CodeBlock'
import ErrorBlock from './app/components/mdx/ErrorBlock'
import ListBlock from './app/components/mdx/ListBlock'
import ReasonBlock from './app/components/mdx/ReasonBlock'
import Inline from './app/components/mdx/CodeInline'
import SubHeader from './app/components/mdx/SubHeader'
import RefLink from './app/components/mdx/RefLink'
import RefBlock from './app/components/mdx/RefBlock'
 
export function getMDXComponents(components: MDXComponents): MDXComponents {
    return {
        pre: (props) => {
            return (
                <div className="prose max-w-none relative overflow-x-auto">
                    <pre {...props} className={`${props.className} rounded-none`}></pre>
                    {/* <CopyButton /> */}
                </div>
            )
        },
        ...components,
        SubHeader,
        CodeBlock,
        ErrorBlock,
        ListBlock,
        ReasonBlock,
        Inline,
        RefLink,
        RefBlock,
    }
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return getMDXComponents(components);
}


// import type { MDXComponents } from 'mdx/types'
 
// export function useMDXComponents(components: MDXComponents): MDXComponents {
//   return {
//     ...components,
//   }
// }



