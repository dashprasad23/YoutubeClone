const GOOGLE_API_KEY = "****";
export const POPULAR_VIDEO_URL = "https://content-youtube.googleapis.com/youtube/v3/videos?regionCode=US&part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&key="+GOOGLE_API_KEY;
export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="