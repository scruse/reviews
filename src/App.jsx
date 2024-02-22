import { useState } from 'react'
import people from './data'

import Review from './components/Review'

const App = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0)

  // const { name, job, image, text } = people[currentReviewIndex]

  const prevReview = () => {
    setCurrentReviewIndex((currentVal) => {
      let prev = 0

      if (currentReviewIndex === 0) {
        prev = people.length - 1
        return prev
      }

      prev = currentVal - 1
      return prev
    })
  }

  const nextReview = () => {
    setCurrentReviewIndex((currentVal) => {
      let next = 0

      if (currentReviewIndex === people.length - 1) {
        next = 0
        return next
      }

      next = currentVal + 1
      return next
    })
  }

  const randomReview = () => {
    const min = Math.floor(0)
    const max = Math.ceil(people.length)
    const randomNumber = Math.floor(Math.random() * (max - min) + min)

    setCurrentReviewIndex(randomNumber)
  }
  return (
    <main>
      <Review
        {...people[currentReviewIndex]}
        prevReview={prevReview}
        nextReview={nextReview}
        randomReview={randomReview}
      />
    </main>
  )
}
export default App
