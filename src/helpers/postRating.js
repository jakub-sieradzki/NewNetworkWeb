function getPostAverageRating(ratings) {
  let averageRatingInt = 0;
  let rate = (1 * ratings[1] + 2 * ratings[2] + 3 * ratings[3] + 4 * ratings[4] + 5 * ratings[5]) / ratings["count"];

  if (rate >= 1.0 && rate <= 1.99) {
    averageRatingInt = 1;
  } else if (rate >= 2.0 && rate <= 2.99) {
    averageRatingInt = 2;
  } else if (rate >= 3.0 && rate <= 3.99) {
    averageRatingInt = 3;
  } else if (rate >= 4.0 && rate <= 4.49) {
    averageRatingInt = 4;
  } else if (rate >= 4.5) {
    averageRatingInt = 5;
  } else {
    averageRatingInt = 1;
  }

  return averageRatingInt;
}

export { getPostAverageRating };
