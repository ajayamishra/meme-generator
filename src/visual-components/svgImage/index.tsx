import { Fragment } from 'react'
import svgIcon from 'assets/svgs/fonts/svgs'

const SvgImage = (props: StateProps) => {
    const {
      className,
      color,
      imageName,
      width,
      height,
      viewBox
    } = props

    const icon = svgIcon[imageName]
    const { d, vb, f } = icon

    const renderPath = (data: any, index:number) => {
      return (
        <Fragment key={data}>
          {f ? (
            <path d={data} style={{ fill: f[index] }} />
          ): (
            <path d={data} style={{ fill: color }} />
          )}
        </Fragment>
      )
    }

  return (
    <>
      <svg
        style={{
          verticalAlign: "middle"
        }}
        width={`${width}px`}
        height={`${height}px`}
        viewBox={vb || viewBox}
        className={className}
      >
        {d.map(renderPath)}
      </svg>
    </>
  )
}

SvgImage.defaultProps = {
  color: '',
  className: '',
  viewBox: "0 0 1024 1024"
}

export default SvgImage

export interface StateProps {
  color?: string
  imageName: string
  width: number
  height: number
  viewBox: string
  className?: string
}