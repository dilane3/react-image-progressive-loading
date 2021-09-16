import React, {useState, useRef} from 'react'
import useIntersectionObserver from '../hook/useIntersectionObserver'
import styles from '../../src/index.module.css'

const ImageLoading = ({image, alt}) => {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <React.Fragment>
      <img
        src={null}
        alt={alt}
        style={{display: isLoaded ? "none":"block", backgroundColor: "#eee", opacity: .8}}
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

const Image = ({image, alt, className}) => {
  const [visible, setVisible] = useState(false)
  const target = useRef()

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
          <ImageLoading image={image} alt={alt} />
        )
      }
    </div>
  )
}

export default Image
