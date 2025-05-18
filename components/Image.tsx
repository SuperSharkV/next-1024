import NextImage, { ImageProps } from 'next/image'

const Image = ({ src, ...rest }: ImageProps) => {
  if (typeof src === 'string') {
    return <NextImage src={src.startsWith('http') ? src : `/${src.replace(/^\/+/, '')}`} {...rest} />
  }
  return <NextImage src={src} {...rest} />
}

export default Image
