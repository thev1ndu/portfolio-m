import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data/index'

const Grid = () => {
  return (
    <section id="about">
        <BentoGrid className="max-w-6xl mx-auto p-4 h-[500px]"> {/* Adjust height with h-[500px] */}
            {gridItems.map(({id, title, description, className, img, imgClassName, titleClassName, spareImg}) => (
              <BentoGridItem 
                id={id}
                key={id}
                title={title}
                description={description}
                className={className}
                img={img}
                imgClassName={imgClassName}
                titleClassName={titleClassName}
                spareImg={spareImg}
              />
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid
