import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'
const Review = ({
  name,
  job,
  image,
  text,
  prevReview,
  nextReview,
  randomReview,
}) => {
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="btn-container">
        <span className="prev-btn" onClick={() => prevReview()}>
          <FaChevronLeft />
        </span>
        <span className="next-btn" onClick={() => nextReview()}>
          <FaChevronRight />
        </span>
      </div>
      <button className="btn btn-hipster" onClick={() => randomReview()}>
        surprise me
      </button>
    </article>
  )
}

export default Review
