import css from './toTheTopButton.module.css'
import { useRef, useState, useEffect, useCallback } from 'react'

interface ToTheTopButtonProps {
  className: string | undefined
  IDofElementToObserve: string
  link: string
}

export const ToTheTopButton: React.FC<ToTheTopButtonProps>
  = ({ className, IDofElementToObserve, link }) => {
    const observer = useRef<IntersectionObserver>()
    const [loaded, setLoaded] = useState(false)
    const toTheTopButton = useRef<HTMLAnchorElement | null>()

    /*
      Use Intersection Observer to make toTheTopButton appear when
      scrolling past headline
    */

    const observerCallback = useCallback((entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          toTheTopButton!.current!.style.display = 'none'
        } else {
          toTheTopButton!.current!.style.display = 'block'
        }
      })
    }, [])

    useEffect(() => {
      setLoaded(true)
      toTheTopButton.current =
        document.querySelector<HTMLAnchorElement>('#toTheTopButton')

      observer.current = new IntersectionObserver(observerCallback)
      observer.current.observe(document.querySelector(IDofElementToObserve)!)

      return () => {
        observer.current?.disconnect
      }
    }, [observer])

    return (
      <a className={`${css['toTheTopButton']} ${className}`} href={link} id='toTheTopButton'>&#x2190;</a>
    )
  }
