import "./tweet.scss"

const Tweets = ({accountHolder, holderEmail, tweetText, tweetTag}) => {
  return (
    <div className='tweetCard'>
      <div className='userCard'>
        <div className="userCardLeft">
            <img src="/assets/unknown.jpg" alt="" />
            <div className="userDetails">
                <span style={{fontWeight:"bold", fontSize:"18px"}}>{accountHolder}</span>
                <span style={{fontSize:"14px"}}>{holderEmail}</span>
            </div>
        </div>
        <img src="/assets/appLogo.png" alt="" />
      </div>
      <div className='tweetBody'>
        <p>{tweetText}</p>
        <span>#{tweetTag}</span>
        <span>{new Date().toLocaleString() + ""}</span>
      </div>
    </div>
  )
}

export default Tweets
