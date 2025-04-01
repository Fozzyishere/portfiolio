interface VideoProps {
  src: string;
}

const Video: React.FC<VideoProps> = ({ src }) => {
  return (
    <div className="flex items-center flex-row">
      <video width="1000" height="562" controls preload="none">
        <source src={src} type="video/mkv" />
        Your browser does not support video playback.
      </video>
    </div>
  );
};
export default Video;
