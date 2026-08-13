"use client";

import { TweetProps, useTweet } from "react-tweet";

import {
  EldoraTweet,
  TweetNotFound,
  TweetSkeleton,
} from "./tweet-server";

const ClientTweetCard = ({
  id,
  apiUrl,
  fallback = <TweetSkeleton />,
  components,
  fetchOptions,
  onError,
  ...props
}: TweetProps & { className?: string }) => {
  const { data, error, isLoading } = useTweet(id, apiUrl, fetchOptions);

  if (isLoading) return fallback;
  // `useTweet` resolves `data` even for malformed/empty payloads (rate-limited
  // or geo-blocked Syndication API), so validate `entities` before rendering —
  // otherwise `enrichTweet` throws "entities is not iterable".
  if (error || !data || !Array.isArray(data.entities)) {
    const NotFound = components?.TweetNotFound || TweetNotFound;
    return <NotFound error={onError ? onError(error) : error} />;
  }

  return <EldoraTweet tweet={data} components={components} {...props} />;
};

export default ClientTweetCard;