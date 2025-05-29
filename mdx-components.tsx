import type { MDXComponents } from 'mdx/types'
// import CopyButton from './app/components/ui/buttons/CopyButton'
import CodeBlock from './app/components/mdx/CodeBlock'
import ErrorBlock from './app/components/mdx/ErrorBlock'
import ListBlock from './app/components/mdx/ListBlock'
import ReasonBlock from './app/components/mdx/ReasonBlock'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
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
        CodeBlock,
        ErrorBlock,
        ListBlock,
        ReasonBlock,
    }
}




// import type { MDXComponents } from 'mdx/types'
 
// export function useMDXComponents(components: MDXComponents): MDXComponents {
//   return {
//     ...components,
//   }
// }



