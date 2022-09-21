import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface ICoverImage {
    title: string
    coverImage: {
        node: {
            sourceUrl: string
        }
    }
    slug?: string
}

const CoverImage = ({title, coverImage, slug}: ICoverImage) => {
    const image = (
        <Image
          width={1700}
          height={1000}
          alt={`Cover Image for ${title}`}
          src={coverImage?.node.sourceUrl}
        //   className={cn('shadow-small', {
        //     'hover:shadow-medium transition-shadow duration-200': slug,
        //   })}
        />
      )
      return (
        <div className="sm:mx-0">
          {slug ? (
            <Link href={`/posts/${slug}`}>
              <a aria-label={title}>{image}</a>
            </Link>
          ) : (
            image
          )}
        </div>
      )
}

export default CoverImage