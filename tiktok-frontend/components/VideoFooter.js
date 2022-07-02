import MusicNoteIcon from '@mui/icons-material/MusicNote';
// import Ticker from "react-ticker";

function VideoFooter({ channel, description, song }) {
  console.log('executed', channel)
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@{channel}</h3>
        <p>{description}</p>
        <div className="videoFooter__ticker">
          <MusicNoteIcon className="videoFooter__icon" />
          {/* <Ticker>{() => <p>{song}</p>}</Ticker> */}
          <p>{song}</p>
        </div>
      </div>
      <img
        className="videoFooter__record"
        src="https://static.thenounproject.com/png/934821-200.png"
        alt=""
      />
    </div>
  );
}

export default VideoFooter;