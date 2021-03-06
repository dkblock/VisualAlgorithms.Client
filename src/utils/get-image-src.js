import urlJoin from "url-join";
import config from "../config";

export const getImageSrc = (src) => urlJoin(config.baseUrl, "api/images", `?src=${src}`);
