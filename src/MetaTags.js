// MetaTags.js

import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const MetaTags = ({ title, description }) => {
  const location = useLocation();

  useEffect(() => {
    document.title = title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }
  }, [title, description, location.pathname]);

  return null;
};

export default MetaTags;
