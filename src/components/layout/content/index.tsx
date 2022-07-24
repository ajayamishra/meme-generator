import ImageSizeIdentifier from 'components/visuals/image-size-identifier'
import SvgImage from 'visual-components/svgImage'

import './styles/content.scss'

const Content = () => {
  return (
    <div className='content-container'>
      Body Part
      <div>more content here again</div>
      <div className="options-container">
        <div className='image-options-container'>
          <div>START WITH A BLANK CANVAS</div>
          <div className='image-options-content'>
            <ImageSizeIdentifier classNames='one-to-one'>1:1</ImageSizeIdentifier>
            <ImageSizeIdentifier classNames='sixteen-to-nine'>16:9</ImageSizeIdentifier>
            <ImageSizeIdentifier classNames='nine-to-sixteen'>9:16</ImageSizeIdentifier>
            <ImageSizeIdentifier classNames='four-to-five'>4:5</ImageSizeIdentifier>
          </div>
        </div>

        <div className='file-upload-container'>
          <div className='file-upload-content'>
            <ImageSizeIdentifier classNames='file-options'>
              <SvgImage imageName='google-drive' width={24} height={24} />
              <span>Google Drive</span>
            </ImageSizeIdentifier>
            <ImageSizeIdentifier classNames='file-options'>
              <SvgImage imageName='google-photos' width={24} height={24} />
              <span>Google Photos</span>
            </ImageSizeIdentifier>
            <ImageSizeIdentifier classNames='sample_options'>
              <SvgImage imageName='sample' width={18} height={18} color="red" />
              <span>Sample Photo</span>
            </ImageSizeIdentifier>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content