import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import TvIcon from "@material-ui/icons/Tv";
import MovieIcon from "@material-ui/icons/Movie";
import SearchIcon from "@material-ui/icons/Search";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#2d313a",
    zIndex: 100,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const linkToPage = (link) => {
    window.location.href = link;
  };

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        if (newValue === 0) {
          linkToPage("/");
        } else if (newValue === 1) {
          linkToPage("/movies");
        } else if (newValue === 2) {
          linkToPage("/series");
        } else if (newValue === 3) {
          linkToPage("/search");
        } else if (newValue === 4) {
          linkToPage("/watchlist");
        }
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Trending"
        icon={<WhatshotIcon />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Movies"
        icon={<MovieIcon />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="TV Series"
        icon={<TvIcon />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Search"
        icon={<SearchIcon />}
      />

      <BottomNavigationAction
        style={{ color: "white" }}
        label="Watchlist"
        icon={<PlaylistAddIcon />}
      />
    </BottomNavigation>
  );
}
