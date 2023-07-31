import { Badge } from "@material-ui/core";
import { img_300, unavailable } from "../../config/config";
import "./SingleContent.css";
import ContentModal from "../ContentModal/ContentModal";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
  isInMoovieList = false,
}) => {
  const deleteFromWatchList = (e) => {
    e.stopPropagation();
    const list = localStorage.getItem("watchlist")
      ? JSON.parse(localStorage.getItem("watchlist"))
      : [];
    const newList = list.filter((e) => e.id !== id);
    localStorage.setItem("watchlist", JSON.stringify(newList));
    window.location.reload();
  };
  return (
    <ContentModal media_type={media_type} id={id}>
      <Badge
        badgeContent={vote_average}
        color={vote_average > 6 ? "primary" : "secondary"}
      />

      <img
        className="poster"
        src={poster ? `${img_300}${poster}` : unavailable}
        alt={title}
      />
      <b className="title">{title}</b>
      <span className="subTitle">
        {media_type === "tv" ? "TV Series" : "Movie"}
        <span className="subTitle">{date}</span>
      </span>
      {isInMoovieList && (
        <Button
          startIcon={<DeleteIcon />}
          variant="contained"
          color="secondary"
          target="__blank"
          style={{ marginBottom: 10, fontWeight: "bold" }}
          onClick={deleteFromWatchList}
        >
          Delete From WatchList
        </Button>
      )}
    </ContentModal>
  );
};

export default SingleContent;
