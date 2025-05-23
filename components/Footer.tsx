import Link from './Link'
import siteMetadata from '@/data/siteMetadata'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <Link href="/">{siteMetadata.title}</Link>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
        </div>
        <div className="mb-8 flex text-sm text-gray-500 dark:text-gray-400">
          <div>{`Powered by `}</div>
          <Link href="https://github.com/timlrx/tailwind-nextjs-starter-blog">Tailwind Nextjs</Link>
        </div>
      </div>
    </footer>
  )
}
