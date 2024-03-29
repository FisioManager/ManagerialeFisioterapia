import './Section.scss'

const Section = ({ src, titolo, testo, mode }) => {
  return (
    <div
      id='section'
      className={
        'flex box-container ' + (mode ? 'left-to-right' : 'right-to-left')
      }
    >
      {mode ? (
        <>
          <div className='flex box-30'>
            <img src={src} alt='illustration' />
          </div>
          <div className='flex col box-30 gap-3'>
            <h1>{titolo}</h1>
            <p>{testo}</p>
          </div>
        </>
      ) : (
        <>
          <div className='flex col box-30 gap-3'>
            <h1>{titolo}</h1>
            <p>{testo}</p>
          </div>
          <div className='flex box-30'>
            <img src={src} alt='illustration' />
          </div>
        </>
      )}
    </div>
  )
}

export default Section
