import React, {useState, useRef} from 'react'
import useIntersectionObserver from '../hook/useIntersectionObserver'
import styles from '../../src/index.module.css'

const ImageLoading = ({image, alt, blur}) => {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <React.Fragment>
      <img
        src={null}
        alt={alt}
        style={{
          display: isLoaded ? (
            styles.imageNotLoading
          ):(
            blur ? (
              styles.imageLoadingBlur
            ):(
              styles.imageLoading
            )
          )
        }}
        width={"100%"}
        height={"100%"}
      />
      <img
        onLoad={() => {
          setIsLoaded(true)
        }}
        src={image}
        alt={alt}
        style={{ opacity: isLoaded ? 1 : 0 }}
        width={"100%"}
        height={"100%"}
      />
    </React.Fragment>
  )
}

const Image = ({image, alt, className, blur}) => {
  const [visible, setVisible] = useState(false)
  const target = useRef()

  blur = blur === undefined && false
  alt = alt || "loading"

  const handleIntersector = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (!visible) {
          setVisible(true)
        }
      }
    })
  }

  useIntersectionObserver({
    target,
    onIntersect: handleIntersector
  });

  return (
    <div ref={target} className={className || styles.image}>
      {
        visible && (
          <ImageLoading image={image} alt={alt} blur={blur} />
        )
      }
    </div>
  )
}

export default Image
