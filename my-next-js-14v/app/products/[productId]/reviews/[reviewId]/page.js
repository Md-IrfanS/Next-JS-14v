const ReviewDetailsPage = ({ params }) => {
  const { productId, reviewId } = params;
  return (
    <div>
      <h1>product - {productId}</h1>
      <h1>ReviewDetailsPage - review -{reviewId}</h1>
    </div>
  );
};

export default ReviewDetailsPage;
