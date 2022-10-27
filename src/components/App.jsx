import React, { useRef } from "react";
import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { MovieInformation, Movies, Actors, Profile, NavBar } from ".";
import useAlan from "./Alan";

import useStyles from "./styles";

const App = () => {
  const { classes } = useStyles();
  const alanBtnContainer = useRef();
  useAlan();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          {["/", "/approved"].map((path) => (
            <Route
              key="Home" // optional: avoid full re-renders on route changes
              path={path}
              element={<Movies />}
            />
          ))}
          {/* <Route path="/" element={<Movies />} /> */}
          <Route path="/movie/:id" element={<MovieInformation />} />
          <Route path="/actors/:id" element={<Actors />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
      <div ref={alanBtnContainer} />
    </div>
  );
};

export default App;
