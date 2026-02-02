const apiKey = '***REMOVED***';
const placeId = 'ChIJr1zDbXgts1IRT5J8JwHX_gw';

const fields = 'rating,user_ratings_total,opening_hours,photos,reviews,current_opening_hours';
const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=${fields}&key=${apiKey}`;

const response = await fetch(url);
const data = await response.json();

console.log('Status:', data.status);
console.log('Reviews count:', data.result?.reviews?.length || 0);
if (data.result?.reviews) {
  console.log('First review:', data.result.reviews[0]?.text.substring(0, 100));
}
