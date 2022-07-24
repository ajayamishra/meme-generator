import React from 'react'

import './styles/image-size-identifier.scss'

const ImageSizeIdentifier = (props: StateProps) => {
  const { classNames, children } = props

  return (
    <div className={`${classNames} identifier-container`}>{children}</div>
  )
}

ImageSizeIdentifier.defaultProps = {
  classNames: ''
}

export default ImageSizeIdentifier

export interface StateProps {
  classNames: string
  children: React.ReactNode
}