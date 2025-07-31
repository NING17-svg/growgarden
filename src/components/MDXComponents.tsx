import { MDXComponents } from 'mdx/types';

// 自定义MDX组件映射
export const mdxComponents: MDXComponents = {
  h1: (props) => (
    <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center" {...props} />
  ),
  h2: (props) => (
    <h2 className="text-2xl font-semibold mt-8 mb-4" {...props} />
  ),
  h3: (props) => (
    <h3 className="text-xl font-semibold mt-6 mb-3" {...props} />
  ),
  p: (props) => (
    <p className="mb-4 leading-relaxed" {...props} />
  ),
  ul: (props) => (
    <ul className="list-disc pl-6 mb-4 space-y-1" {...props} />
  ),
  ol: (props) => (
    <ol className="list-decimal pl-6 mb-4 space-y-1" {...props} />
  ),
  li: (props) => (
    <li className="mb-1" {...props} />
  ),
  strong: (props) => (
    <strong className="font-semibold text-gray-900" {...props} />
  ),
  em: (props) => (
    <em className="italic" {...props} />
  ),
  code: (props) => (
    <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono" {...props} />
  ),
  pre: (props) => (
    <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4" {...props} />
  ),
  blockquote: (props) => (
    <blockquote className="border-l-4 border-blue-500 pl-4 italic my-4 text-gray-700" {...props} />
  ),
  table: (props) => (
    <div className="overflow-x-auto mb-6">
      <table className="min-w-full divide-y divide-gray-200 border border-gray-300" {...props} />
    </div>
  ),
  thead: (props) => (
    <thead className="bg-gray-50" {...props} />
  ),
  th: (props) => (
    <th 
      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200" 
      {...props} 
    />
  ),
  tbody: (props) => (
    <tbody className="bg-white divide-y divide-gray-200" {...props} />
  ),
  td: (props) => (
    <td className="px-6 py-4 text-sm text-gray-900 border-b border-gray-200" {...props} />
  ),
  tr: (props) => (
    <tr className="hover:bg-gray-50" {...props} />
  ),
  a: (props) => (
    <a className="text-blue-600 hover:text-blue-800 hover:underline" {...props} />
  ),
  hr: (props) => (
    <hr className="my-8 border-gray-300" {...props} />
  ),
  // 自定义div组件，保持原有的className
  div: (props) => <div {...props} />,
  span: (props) => <span {...props} />,
};
